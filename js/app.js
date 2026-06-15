// ── Matchday — App Logic ──

// ── Storage ──
const STORE_KEY = 'matchday_events_v1';
const NOTIF_KEY = 'matchday_notif_ids';

function loadEvents() {
  try {
    const saved = localStorage.getItem(STORE_KEY);
    if (saved) return JSON.parse(saved);
  } catch(e) {}
  // First load: seed from data.js
  const seed = (window.ALL_EVENTS || []).map(e => ({ ...e, status: e.status || 'upcoming', result: e.result || '', notif: false }));
  saveEvents(seed);
  return seed;
}
function saveEvents(evs) {
  localStorage.setItem(STORE_KEY, JSON.stringify(evs));
}

let events = loadEvents();

// ── State ──
let activeSport = 'all';
let activeWC = 'all';
let searchQ = '';
let detailId = null;
let addDrawerOpen = false;
let countdownTimers = {};

// ── DOM refs ──
const sportFiltersEl  = document.getElementById('sport-filters');
const wcFilterSec     = document.getElementById('wc-filter-section');
const wcFiltersEl     = document.getElementById('wc-filters');
const eventListEl     = document.getElementById('event-list');
const searchInput     = document.getElementById('search-input');
const totalCountEl    = document.getElementById('total-count');
const overlay         = document.getElementById('overlay');
const detailDrawer    = document.getElementById('detail-drawer');
const addDrawer       = document.getElementById('add-drawer');
const notifBanner     = document.getElementById('notif-banner');
const toast           = document.getElementById('toast');

// ── Helpers ──
function isBigTeam(e) {
  if (!e.tm || !e.tm.length) return false;
  return e.tm.some(t => BIG_TEAMS.includes(t));
}
function isBigMatch(e) {
  if (!e.tm || e.tm.length < 2) return false;
  return e.tm.filter(t => BIG_TEAMS.includes(t)).length >= 2;
}

function getEventDateTime(e) {
  if (!e.d || !e.h) return null;
  return new Date(e.d + 'T' + e.h + ':00+07:00'); // WIB
}

function getCountdown(e) {
  const dt = getEventDateTime(e);
  if (!dt) return null;
  const now = Date.now();
  const diff = dt.getTime() - now;
  if (diff <= 0) return null;
  const totalMins = Math.floor(diff / 60000);
  if (totalMins < 60) return { label: `${totalMins}m`, class: totalMins < 30 ? 'very-soon' : 'soon' };
  const hrs = Math.floor(diff / 3600000);
  if (hrs < 24) return { label: `${hrs}h ${Math.floor((diff % 3600000)/60000)}m`, class: hrs < 3 ? 'soon' : '' };
  const days = Math.floor(diff / 86400000);
  return { label: `${days}d ${hrs % 24}h`, class: '' };
}

function computeStatus(e) {
  if (e.status === 'finished') return 'finished';
  if (e.status === 'live') return 'live';
  const dt = getEventDateTime(e);
  if (!dt) return 'upcoming';
  const now = Date.now();
  const diff = dt.getTime() - now;
  if (diff < 0 && diff > -7200000) return 'live'; // within 2h after start = live
  if (diff < -7200000) return 'finished';
  return 'upcoming';
}

function fmtDate(d) {
  if (!d) return 'No date';
  const dt = new Date(d + 'T00:00:00');
  const today = new Date(); today.setHours(0,0,0,0);
  const diff = Math.round((dt - today) / 86400000);
  if (diff === 0) return 'Today';
  if (diff === 1) return 'Tomorrow';
  if (diff === -1) return 'Yesterday';
  return dt.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });
}
function isToday(d) {
  if (!d) return false;
  const dt = new Date(d + 'T00:00:00');
  const today = new Date(); today.setHours(0,0,0,0);
  return Math.round((dt - today) / 86400000) === 0;
}

function groupByDate(list) {
  const g = {};
  list.forEach(e => {
    const k = e.d || 'zz';
    if (!g[k]) g[k] = [];
    g[k].push(e);
  });
  return g;
}

// ── Filter logic ──
function passesFilter(e) {
  if (activeSport !== 'all' && e.cat !== activeSport) return false;
  if (searchQ) {
    const q = searchQ.toLowerCase();
    if (!e.t.toLowerCase().includes(q) && !(e.n || '').toLowerCase().includes(q)) return false;
  }
  if (e.cat === 'football' && activeWC !== 'all') {
    const isWC = e.t && e.t.startsWith('WC');
    if (!isWC) return true;
    if (activeWC === 'big_teams') return isBigTeam(e);
    if (activeWC === 'big_matches') return isBigMatch(e);
    return e.tm && e.tm.includes(activeWC);
  }
  return true;
}

// ── Render filters ──
function renderFilters() {
  const cats = ['all','football','tennis','swimming','mma','boxing','muaythai'];
  const catLabels = { all:'All', football:'Football', tennis:'Tennis', swimming:'Swimming', mma:'MMA', boxing:'Boxing', muaythai:'Muay Thai' };
  const catIcons = { all:'🏟️', football:'⚽', tennis:'🎾', swimming:'🏊', mma:'🥊', boxing:'🥊', muaythai:'🥋' };

  sportFiltersEl.innerHTML = cats.map(c => `
    <button class="chip ${activeSport === c ? 'active' : ''}" onclick="setSport('${c}')">
      <span class="chip-icon">${catIcons[c]}</span>${catLabels[c]}
    </button>
  `).join('');

  const showWC = activeSport === 'football' || activeSport === 'all';
  wcFilterSec.style.display = showWC ? 'block' : 'none';
  if (showWC) {
    const teamChips = BIG_TEAMS.map(t => `
      <button class="chip ${activeWC === t ? 'active' : ''}" onclick="setWC('${t}')">${t}</button>
    `).join('');
    wcFiltersEl.innerHTML =
      `<button class="chip special ${activeWC==='all'?'active':''}" onclick="setWC('all')">All matches</button>` +
      `<button class="chip special ${activeWC==='big_teams'?'active':''}" onclick="setWC('big_teams')">★ Big Teams</button>` +
      `<button class="chip danger ${activeWC==='big_matches'?'active':''}" onclick="setWC('big_matches')">🔥 Big Matches</button>` +
      teamChips;
  }
}

// ── Render event list ──
function render() {
  renderFilters();
  const filtered = events.filter(passesFilter);
  const sorted = [...filtered].sort((a,b) => {
    const ka = (a.d||'zz')+(a.h||'');
    const kb = (b.d||'zz')+(b.h||'');
    return ka < kb ? -1 : ka > kb ? 1 : 0;
  });

  totalCountEl.textContent = sorted.length + ' events';

  if (!sorted.length) {
    eventListEl.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">📭</div>
        <div class="empty-title">No events found</div>
        <div class="empty-sub">Try a different filter or add a new event</div>
      </div>`;
    return;
  }

  const grouped = groupByDate(sorted);
  const clockIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`;
  const trashIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"/></svg>`;

  eventListEl.innerHTML = Object.keys(grouped).sort().map(date => {
    const dateLabel = fmtDate(date);
    const isT = isToday(date === 'zz' ? null : date);
    return `
      <div class="date-group">
        <div class="date-label ${isT ? 'date-today' : ''}">${dateLabel}</div>
        ${grouped[date].map(e => {
          const status = computeStatus(e);
          const cd = status === 'upcoming' ? getCountdown(e) : null;
          const cfg = CAT_CONFIG[e.cat] || CAT_CONFIG.other;

          let rightHtml = '';
          if (status === 'live') {
            rightHtml = `<div class="live-pulse"><div class="pulse-dot"></div>LIVE</div>`;
          } else if (status === 'finished') {
            rightHtml = `<span class="status-badge status-finished">${e.result ? e.result : 'Finished'}</span>`;
          } else if (cd) {
            rightHtml = `<div class="countdown ${cd.class}">${cd.label}</div>`;
          } else {
            rightHtml = `<span class="status-badge status-upcoming">Upcoming</span>`;
          }

          return `
            <div class="event-card cat-${e.cat} ${status === 'live' ? 'is-live' : ''}" onclick="openDetail(${e.id})">
              <div class="sport-icon ${cfg.iconClass}">${cfg.icon}</div>
              <div class="card-body">
                <div class="card-title">${e.t}</div>
                <div class="card-meta">
                  ${e.h ? `<span class="card-time">${clockIcon}${e.h} WIB</span>` : ''}
                  ${e.n ? `<span class="card-venue">${e.n.split('|')[0].split('.')[0].trim()}</span>` : ''}
                </div>
              </div>
              <div class="card-right">
                ${rightHtml}
              </div>
              <button class="del-btn" onclick="event.stopPropagation(); deleteEvent(${e.id})" title="Remove">${trashIcon}</button>
            </div>`;
        }).join('')}
      </div>`;
  }).join('');

  // Tick countdowns every minute
  clearInterval(window._countdownInterval);
  window._countdownInterval = setInterval(render, 30000);
}

// ── Set filters ──
function setSport(c) { activeSport = c; activeWC = 'all'; render(); }
function setWC(c) { activeWC = c; render(); }
window.setSport = setSport;
window.setWC = setWC;

// ── Search ──
searchInput.addEventListener('input', e => {
  searchQ = e.target.value.trim();
  render();
});

// ── Detail drawer ──
function openDetail(id) {
  const e = events.find(x => x.id === id);
  if (!e) return;
  detailId = id;
  const cfg = CAT_CONFIG[e.cat] || CAT_CONFIG.other;
  const status = computeStatus(e);
  const dt = getEventDateTime(e);

  const clockIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`;
  const mapIcon   = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>`;
  const tvIcon    = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="15" rx="2"/><path d="M17 2l-5 5-5-5"/></svg>`;
  const bellIcon  = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"/></svg>`;

  let countdownHtml = '';
  if (status === 'upcoming' && dt) {
    const cd = getCountdown(e);
    if (cd) {
      countdownHtml = `<div class="detail-countdown-big">${cd.label} to go</div>`;
    }
  } else if (status === 'live') {
    countdownHtml = `<div class="detail-countdown-big" style="color:var(--red);background:var(--red-dim);border-color:rgba(255,77,106,0.2)"><span class="pulse-dot" style="display:inline-block;margin-right:8px"></span>LIVE NOW</div>`;
  } else if (e.result) {
    countdownHtml = `<div class="detail-countdown-big" style="color:var(--green);background:var(--green-dim);border-color:rgba(46,204,113,0.2)">${e.result}</div>`;
  }

  // Parse notes for broadcast info
  const notes = e.n || '';
  const parts = notes.split('|').map(s => s.trim());
  const venuePart = parts[0] || '';
  const timePart  = parts[1] || '';

  document.getElementById('detail-content').innerHTML = `
    <div class="detail-sport-icon ${cfg.iconClass}">${cfg.icon}</div>
    <div class="detail-title">${e.t}</div>
    ${countdownHtml}
    <div class="detail-rows">
      ${e.d ? `<div class="detail-row">${clockIcon}<span><strong>${fmtDate(e.d)}</strong>${e.h ? ` at ${e.h} WIB` : ''}</span></div>` : ''}
      ${venuePart ? `<div class="detail-row">${mapIcon}<span>${venuePart}</span></div>` : ''}
      ${timePart  ? `<div class="detail-row">${tvIcon}<span>${timePart}</span></div>` : ''}
    </div>
    <div class="detail-actions">
      <button class="btn-action ${e.notif ? 'btn-secondary' : 'btn-primary'}" onclick="toggleNotif(${e.id})">
        ${bellIcon} ${e.notif ? 'Reminder set ✓' : 'Set reminder'}
      </button>
      <button class="btn-action btn-danger-outline" onclick="deleteEvent(${e.id}); closeDrawers()">Remove</button>
    </div>
    ${status === 'finished' ? `
    <div style="margin-top:12px">
      <div class="field">
        <label>Add result</label>
        <input type="text" id="result-input" placeholder="e.g. Argentina 2–1 France" value="${e.result||''}" style="font-family:var(--mono)">
      </div>
      <button class="btn-action btn-primary" style="width:100%" onclick="saveResult(${e.id})">Save result</button>
    </div>` : ''}
  `;

  openDrawer(detailDrawer);
}
window.openDetail = openDetail;

function saveResult(id) {
  const val = document.getElementById('result-input').value.trim();
  const idx = events.findIndex(x => x.id === id);
  if (idx < 0) return;
  events[idx].result = val;
  events[idx].status = 'finished';
  saveEvents(events);
  showToast('Result saved');
  closeDrawers();
  render();
}
window.saveResult = saveResult;

// ── Notifications ──
async function requestNotifPermission() {
  if (!('Notification' in window)) { showToast('Notifications not supported'); return false; }
  const perm = await Notification.requestPermission();
  if (perm === 'granted') {
    notifBanner.style.display = 'none';
    showToast('Notifications enabled!');
    scheduleAllNotifs();
    return true;
  }
  showToast('Notifications denied');
  return false;
}
window.requestNotifPermission = requestNotifPermission;

function scheduleAllNotifs() {
  // Clear old timeouts
  if (window._notifTimeouts) window._notifTimeouts.forEach(clearTimeout);
  window._notifTimeouts = [];
  const now = Date.now();
  events.filter(e => e.notif && e.status !== 'finished').forEach(e => {
    const dt = getEventDateTime(e);
    if (!dt) return;
    [60, 30, 5].forEach(mins => {
      const fireAt = dt.getTime() - mins * 60000;
      if (fireAt > now) {
        const t = setTimeout(() => {
          if (Notification.permission === 'granted') {
            new Notification(`⏱ Starting in ${mins} min`, {
              body: e.t,
              icon: './icons/icon-192.png',
              tag: `event-${e.id}-${mins}`
            });
          }
        }, fireAt - now);
        window._notifTimeouts.push(t);
      }
    });
  });
}

function toggleNotif(id) {
  const idx = events.findIndex(x => x.id === id);
  if (idx < 0) return;
  if (Notification.permission !== 'granted') {
    requestNotifPermission().then(ok => {
      if (ok) { events[idx].notif = true; saveEvents(events); openDetail(id); }
    });
    return;
  }
  events[idx].notif = !events[idx].notif;
  saveEvents(events);
  scheduleAllNotifs();
  showToast(events[idx].notif ? '🔔 Reminder set!' : '🔕 Reminder removed');
  openDetail(id);
}
window.toggleNotif = toggleNotif;

function checkNotifBanner() {
  if (!('Notification' in window) || Notification.permission === 'granted') {
    notifBanner.style.display = 'none';
  } else {
    notifBanner.style.display = 'flex';
  }
}

// ── Add event drawer ──
document.getElementById('open-add-btn').addEventListener('click', () => {
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('f-date').value = today;
  document.getElementById('f-title').value = '';
  document.getElementById('f-notes').value = '';
  document.getElementById('f-time').value = '';
  document.getElementById('f-status').value = 'upcoming';
  openDrawer(addDrawer);
});

document.getElementById('save-event-btn').addEventListener('click', () => {
  const title = document.getElementById('f-title').value.trim();
  if (!title) { showToast('Please enter a title'); return; }
  const newEv = {
    id: Date.now(),
    cat: document.getElementById('f-cat').value,
    status: document.getElementById('f-status').value,
    t: title,
    d: document.getElementById('f-date').value,
    h: document.getElementById('f-time').value,
    n: document.getElementById('f-notes').value.trim(),
    tm: [],
    notif: false,
    result: ''
  };
  events.push(newEv);
  saveEvents(events);
  closeDrawers();
  render();
  showToast('Event added');
});

// ── Delete event ──
function deleteEvent(id) {
  events = events.filter(e => e.id !== id);
  saveEvents(events);
  render();
}
window.deleteEvent = deleteEvent;

// ── Drawer helpers ──
function openDrawer(drawer) {
  closeDrawers(true);
  overlay.classList.add('open');
  drawer.classList.add('open');
}
function closeDrawers(silent) {
  overlay.classList.remove('open');
  document.querySelectorAll('.drawer').forEach(d => d.classList.remove('open'));
  detailId = null;
}
window.closeDrawers = closeDrawers;
overlay.addEventListener('click', closeDrawers);

// ── Toast ──
let _toastTimer;
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => toast.classList.remove('show'), 2500);
}

// ── Service Worker registration ──
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').then(reg => {
      console.log('SW registered', reg.scope);
    }).catch(err => console.warn('SW failed', err));
  });
}

// ── Init ──
checkNotifBanner();
scheduleAllNotifs();
render();
