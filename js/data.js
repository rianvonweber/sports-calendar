// ── Matchday — Event Data ──
// All times in WIB (GMT+7). Boxing V3 rules applied (men's only, no TBA).

window.ALL_EVENTS = [
// ═══════════════════════════════════════
// WORLD CUP 2026 — all 104 matches
// ═══════════════════════════════════════
// GROUP A
{id:1,cat:'football',t:'WC Group A: Mexico vs South Africa',d:'2026-06-12',h:'02:00',n:'Mexico City | 3pm ET Jun 11',tm:['Mexico','South Africa']},
{id:2,cat:'football',t:'WC Group A: South Korea vs Czechia',d:'2026-06-12',h:'09:00',n:'Guadalajara | 10pm ET Jun 11',tm:['South Korea','Czechia']},
{id:3,cat:'football',t:'WC Group A: Czechia vs South Africa',d:'2026-06-18',h:'23:00',n:'Atlanta | 12pm ET Jun 18',tm:['Czechia','South Africa']},
{id:4,cat:'football',t:'WC Group A: Mexico vs South Korea',d:'2026-06-19',h:'08:00',n:'Guadalajara | 9pm ET Jun 18',tm:['Mexico','South Korea']},
{id:5,cat:'football',t:'WC Group A: Czechia vs Mexico',d:'2026-06-25',h:'08:00',n:'Mexico City | 9pm ET Jun 24',tm:['Czechia','Mexico']},
{id:6,cat:'football',t:'WC Group A: South Africa vs South Korea',d:'2026-06-25',h:'08:00',n:'Monterrey | 9pm ET Jun 24',tm:['South Africa','South Korea']},
// GROUP B
{id:7,cat:'football',t:'WC Group B: Canada vs Bosnia-Herzegovina',d:'2026-06-13',h:'02:00',n:'Toronto | 3pm ET Jun 12',tm:['Canada','Bosnia-Herzegovina']},
{id:8,cat:'football',t:'WC Group B: Qatar vs Switzerland',d:'2026-06-14',h:'02:00',n:'San Francisco | 3pm ET Jun 13',tm:['Qatar','Switzerland']},
{id:9,cat:'football',t:'WC Group B: Switzerland vs Bosnia-Herzegovina',d:'2026-06-19',h:'02:00',n:'Los Angeles | 3pm ET Jun 18',tm:['Switzerland','Bosnia-Herzegovina']},
{id:10,cat:'football',t:'WC Group B: Canada vs Qatar',d:'2026-06-19',h:'05:00',n:'Vancouver | 6pm ET Jun 18',tm:['Canada','Qatar']},
{id:11,cat:'football',t:'WC Group B: Switzerland vs Canada',d:'2026-06-25',h:'02:00',n:'Vancouver | 3pm ET Jun 24',tm:['Switzerland','Canada']},
{id:12,cat:'football',t:'WC Group B: Bosnia-Herzegovina vs Qatar',d:'2026-06-25',h:'02:00',n:'Seattle | 3pm ET Jun 24',tm:['Bosnia-Herzegovina','Qatar']},
// GROUP C
{id:13,cat:'football',t:'WC Group C: Brazil vs Morocco',d:'2026-06-14',h:'05:00',n:'New York/NJ | 6pm ET Jun 13',tm:['Brazil','Morocco']},
{id:14,cat:'football',t:'WC Group C: Haiti vs Scotland',d:'2026-06-14',h:'08:00',n:'Boston | 9pm ET Jun 13',tm:['Haiti','Scotland']},
{id:15,cat:'football',t:'WC Group C: Scotland vs Morocco',d:'2026-06-20',h:'05:00',n:'Boston | 6pm ET Jun 19',tm:['Scotland','Morocco']},
{id:16,cat:'football',t:'WC Group C: Brazil vs Haiti',d:'2026-06-20',h:'08:00',n:'Philadelphia | 9pm ET Jun 19',tm:['Brazil','Haiti']},
{id:17,cat:'football',t:'WC Group C: Scotland vs Brazil',d:'2026-06-25',h:'05:00',n:'Miami | 6pm ET Jun 24',tm:['Scotland','Brazil']},
{id:18,cat:'football',t:'WC Group C: Morocco vs Haiti',d:'2026-06-25',h:'05:00',n:'Atlanta | 6pm ET Jun 24',tm:['Morocco','Haiti']},
// GROUP D
{id:19,cat:'football',t:'WC Group D: USA vs Paraguay',d:'2026-06-13',h:'08:00',n:'Los Angeles SoFi | 9pm ET Jun 12',tm:['USA','Paraguay']},
{id:20,cat:'football',t:'WC Group D: Australia vs Turkiye',d:'2026-06-14',h:'11:00',n:'Vancouver | midnight ET Jun 13/14',tm:['Australia','Turkiye']},
{id:21,cat:'football',t:'WC Group D: USA vs Australia',d:'2026-06-20',h:'02:00',n:'Seattle | 3pm ET Jun 19',tm:['USA','Australia']},
{id:22,cat:'football',t:'WC Group D: Turkiye vs Paraguay',d:'2026-06-20',h:'11:00',n:'San Francisco | midnight ET Jun 19/20',tm:['Turkiye','Paraguay']},
{id:23,cat:'football',t:'WC Group D: Turkiye vs USA',d:'2026-06-26',h:'09:00',n:'Los Angeles | 10pm ET Jun 25',tm:['Turkiye','USA']},
{id:24,cat:'football',t:'WC Group D: Paraguay vs Australia',d:'2026-06-26',h:'09:00',n:'San Francisco | 10pm ET Jun 25',tm:['Paraguay','Australia']},
// GROUP E
{id:25,cat:'football',t:'WC Group E: Germany vs Curacao',d:'2026-06-15',h:'00:00',n:'Houston | 1pm ET Jun 14',tm:['Germany','Curacao']},
{id:26,cat:'football',t:'WC Group E: Ivory Coast vs Ecuador',d:'2026-06-15',h:'06:00',n:'Philadelphia | 7pm ET Jun 14',tm:['Ivory Coast','Ecuador']},
{id:27,cat:'football',t:'WC Group E: Germany vs Ivory Coast',d:'2026-06-21',h:'03:00',n:'Toronto | 4pm ET Jun 20',tm:['Germany','Ivory Coast']},
{id:28,cat:'football',t:'WC Group E: Ecuador vs Curacao',d:'2026-06-21',h:'07:00',n:'Kansas City | 8pm ET Jun 20',tm:['Ecuador','Curacao']},
{id:29,cat:'football',t:'WC Group E: Ecuador vs Germany',d:'2026-06-26',h:'03:00',n:'New York/NJ | 4pm ET Jun 25',tm:['Ecuador','Germany']},
{id:30,cat:'football',t:'WC Group E: Curacao vs Ivory Coast',d:'2026-06-26',h:'03:00',n:'Philadelphia | 4pm ET Jun 25',tm:['Curacao','Ivory Coast']},
// GROUP F
{id:31,cat:'football',t:'WC Group F: Netherlands vs Japan',d:'2026-06-15',h:'03:00',n:'Dallas | 4pm ET Jun 14',tm:['Netherlands','Japan']},
{id:32,cat:'football',t:'WC Group F: Sweden vs Tunisia',d:'2026-06-15',h:'09:00',n:'Monterrey | 10pm ET Jun 14',tm:['Sweden','Tunisia']},
{id:33,cat:'football',t:'WC Group F: Netherlands vs Sweden',d:'2026-06-21',h:'00:00',n:'Houston | 1pm ET Jun 20',tm:['Netherlands','Sweden']},
{id:34,cat:'football',t:'WC Group F: Tunisia vs Japan',d:'2026-06-21',h:'11:00',n:'Monterrey | midnight ET Jun 20/21',tm:['Tunisia','Japan']},
{id:35,cat:'football',t:'WC Group F: Japan vs Sweden',d:'2026-06-26',h:'06:00',n:'Dallas | 7pm ET Jun 25',tm:['Japan','Sweden']},
{id:36,cat:'football',t:'WC Group F: Tunisia vs Netherlands',d:'2026-06-26',h:'06:00',n:'Kansas City | 7pm ET Jun 25',tm:['Tunisia','Netherlands']},
// GROUP G
{id:37,cat:'football',t:'WC Group G: Belgium vs Egypt',d:'2026-06-16',h:'02:00',n:'Seattle | 3pm ET Jun 15',tm:['Belgium','Egypt']},
{id:38,cat:'football',t:'WC Group G: Iran vs New Zealand',d:'2026-06-16',h:'08:00',n:'Los Angeles | 9pm ET Jun 15',tm:['Iran','New Zealand']},
{id:39,cat:'football',t:'WC Group G: Belgium vs Iran',d:'2026-06-22',h:'02:00',n:'Los Angeles | 3pm ET Jun 21',tm:['Belgium','Iran']},
{id:40,cat:'football',t:'WC Group G: New Zealand vs Egypt',d:'2026-06-22',h:'08:00',n:'Vancouver | 9pm ET Jun 21',tm:['New Zealand','Egypt']},
{id:41,cat:'football',t:'WC Group G: Egypt vs Iran',d:'2026-06-27',h:'10:00',n:'Seattle | 11pm ET Jun 26',tm:['Egypt','Iran']},
{id:42,cat:'football',t:'WC Group G: New Zealand vs Belgium',d:'2026-06-27',h:'10:00',n:'Vancouver | 11pm ET Jun 26',tm:['New Zealand','Belgium']},
// GROUP H
{id:43,cat:'football',t:'WC Group H: Spain vs Cape Verde',d:'2026-06-15',h:'23:00',n:'Atlanta | 12pm ET Jun 15',tm:['Spain','Cape Verde']},
{id:44,cat:'football',t:'WC Group H: Saudi Arabia vs Uruguay',d:'2026-06-16',h:'05:00',n:'Miami | 6pm ET Jun 15',tm:['Saudi Arabia','Uruguay']},
{id:45,cat:'football',t:'WC Group H: Spain vs Saudi Arabia',d:'2026-06-21',h:'23:00',n:'Atlanta | 12pm ET Jun 21',tm:['Spain','Saudi Arabia']},
{id:46,cat:'football',t:'WC Group H: Uruguay vs Cape Verde',d:'2026-06-22',h:'05:00',n:'Miami | 6pm ET Jun 21',tm:['Uruguay','Cape Verde']},
{id:47,cat:'football',t:'WC Group H: Cape Verde vs Saudi Arabia',d:'2026-06-27',h:'07:00',n:'Houston | 8pm ET Jun 26',tm:['Cape Verde','Saudi Arabia']},
{id:48,cat:'football',t:'WC Group H: Uruguay vs Spain',d:'2026-06-27',h:'07:00',n:'Guadalajara | 8pm ET Jun 26',tm:['Uruguay','Spain']},
// GROUP I
{id:49,cat:'football',t:'WC Group I: France vs Senegal',d:'2026-06-17',h:'02:00',n:'New York/NJ | 3pm ET Jun 16',tm:['France','Senegal']},
{id:50,cat:'football',t:'WC Group I: Iraq vs Norway',d:'2026-06-17',h:'05:00',n:'Boston | 6pm ET Jun 16',tm:['Iraq','Norway']},
{id:51,cat:'football',t:'WC Group I: France vs Iraq',d:'2026-06-23',h:'04:00',n:'Philadelphia | 5pm ET Jun 22',tm:['France','Iraq']},
{id:52,cat:'football',t:'WC Group I: Norway vs Senegal',d:'2026-06-23',h:'07:00',n:'New York/NJ | 8pm ET Jun 22',tm:['Norway','Senegal']},
{id:53,cat:'football',t:'WC Group I: Norway vs France',d:'2026-06-27',h:'02:00',n:'Boston | 3pm ET Jun 26',tm:['Norway','France']},
{id:54,cat:'football',t:'WC Group I: Senegal vs Iraq',d:'2026-06-27',h:'02:00',n:'Toronto | 3pm ET Jun 26',tm:['Senegal','Iraq']},
// GROUP J
{id:55,cat:'football',t:'WC Group J: Argentina vs Algeria',d:'2026-06-17',h:'08:00',n:'Kansas City | 9pm ET Jun 16',tm:['Argentina','Algeria']},
{id:56,cat:'football',t:'WC Group J: Austria vs Jordan',d:'2026-06-17',h:'11:00',n:'San Francisco | midnight ET Jun 16/17',tm:['Austria','Jordan']},
{id:57,cat:'football',t:'WC Group J: Argentina vs Austria',d:'2026-06-23',h:'00:00',n:'Dallas | 1pm ET Jun 22',tm:['Argentina','Austria']},
{id:58,cat:'football',t:'WC Group J: Jordan vs Algeria',d:'2026-06-24',h:'10:00',n:'San Francisco | 11pm ET Jun 22',tm:['Jordan','Algeria']},
{id:59,cat:'football',t:'WC Group J: Algeria vs Austria',d:'2026-06-28',h:'09:00',n:'Kansas City | 10pm ET Jun 27',tm:['Algeria','Austria']},
{id:60,cat:'football',t:'WC Group J: Jordan vs Argentina',d:'2026-06-28',h:'09:00',n:'Dallas | 10pm ET Jun 27',tm:['Jordan','Argentina']},
// GROUP K
{id:61,cat:'football',t:'WC Group K: Portugal vs DR Congo',d:'2026-06-18',h:'00:00',n:'Houston | 1pm ET Jun 17',tm:['Portugal','DR Congo']},
{id:62,cat:'football',t:'WC Group K: Uzbekistan vs Colombia',d:'2026-06-18',h:'09:00',n:'Mexico City | 10pm ET Jun 17',tm:['Uzbekistan','Colombia']},
{id:63,cat:'football',t:'WC Group K: Portugal vs Uzbekistan',d:'2026-06-24',h:'00:00',n:'Houston | 1pm ET Jun 23',tm:['Portugal','Uzbekistan']},
{id:64,cat:'football',t:'WC Group K: Colombia vs DR Congo',d:'2026-06-24',h:'09:00',n:'Guadalajara | 10pm ET Jun 23',tm:['Colombia','DR Congo']},
{id:65,cat:'football',t:'WC Group K: Colombia vs Portugal',d:'2026-06-28',h:'06:30',n:'Miami | 7:30pm ET Jun 27',tm:['Colombia','Portugal']},
{id:66,cat:'football',t:'WC Group K: DR Congo vs Uzbekistan',d:'2026-06-28',h:'06:30',n:'Atlanta | 7:30pm ET Jun 27',tm:['DR Congo','Uzbekistan']},
// GROUP L
{id:67,cat:'football',t:'WC Group L: England vs Croatia',d:'2026-06-18',h:'03:00',n:'Dallas | 4pm ET Jun 17',tm:['England','Croatia']},
{id:68,cat:'football',t:'WC Group L: Ghana vs Panama',d:'2026-06-18',h:'06:00',n:'Toronto | 7pm ET Jun 17',tm:['Ghana','Panama']},
{id:69,cat:'football',t:'WC Group L: England vs Ghana',d:'2026-06-24',h:'03:00',n:'Boston | 4pm ET Jun 23',tm:['England','Ghana']},
{id:70,cat:'football',t:'WC Group L: Panama vs Croatia',d:'2026-06-24',h:'06:00',n:'Toronto | 7pm ET Jun 23',tm:['Panama','Croatia']},
{id:71,cat:'football',t:'WC Group L: Panama vs England',d:'2026-06-28',h:'04:00',n:'New York/NJ | 5pm ET Jun 27',tm:['Panama','England']},
{id:72,cat:'football',t:'WC Group L: Croatia vs Ghana',d:'2026-06-28',h:'04:00',n:'Philadelphia | 5pm ET Jun 27',tm:['Croatia','Ghana']},
// ROUND OF 32
{id:73,cat:'football',t:'WC Round of 32 — M73: 2nd A vs 2nd B',d:'2026-06-29',h:'02:00',n:'Los Angeles',tm:[]},
{id:74,cat:'football',t:'WC Round of 32 — M74: 1st E vs 3rd-place',d:'2026-06-30',h:'03:30',n:'Boston',tm:[]},
{id:75,cat:'football',t:'WC Round of 32 — M75: 1st F vs 2nd C',d:'2026-06-30',h:'08:00',n:'Monterrey',tm:[]},
{id:76,cat:'football',t:'WC Round of 32 — M76: 1st C vs 2nd F',d:'2026-06-30',h:'00:00',n:'Houston',tm:[]},
{id:77,cat:'football',t:'WC Round of 32 — M77: 1st I vs 3rd-place',d:'2026-07-02',h:'04:00',n:'New York/NJ',tm:[]},
{id:78,cat:'football',t:'WC Round of 32 — M78: 2nd E vs 2nd I',d:'2026-07-02',h:'00:00',n:'Dallas',tm:[]},
{id:79,cat:'football',t:'WC Round of 32 — M79: 1st A vs 3rd-place',d:'2026-07-02',h:'08:00',n:'Mexico City',tm:[]},
{id:80,cat:'football',t:'WC Round of 32 — M80: 1st L vs 3rd-place',d:'2026-07-02',h:'23:00',n:'Atlanta',tm:[]},
{id:81,cat:'football',t:'WC Round of 32 — M81: 1st D vs 3rd-place',d:'2026-07-03',h:'07:00',n:'San Francisco',tm:[]},
{id:82,cat:'football',t:'WC Round of 32 — M82: 1st G vs 3rd-place',d:'2026-07-03',h:'03:00',n:'Seattle',tm:[]},
{id:83,cat:'football',t:'WC Round of 32 — M83: 2nd K vs 2nd L',d:'2026-07-04',h:'06:00',n:'Toronto',tm:[]},
{id:84,cat:'football',t:'WC Round of 32 — M84: 1st H vs 2nd J',d:'2026-07-04',h:'02:00',n:'Los Angeles',tm:[]},
{id:85,cat:'football',t:'WC Round of 32 — M85: 1st B vs 3rd-place',d:'2026-07-04',h:'10:00',n:'Vancouver',tm:[]},
{id:86,cat:'football',t:'WC Round of 32 — M86: 1st J vs 2nd H',d:'2026-07-04',h:'05:00',n:'Miami',tm:[]},
{id:87,cat:'football',t:'WC Round of 32 — M87: 1st K vs 3rd-place',d:'2026-07-05',h:'08:30',n:'Kansas City',tm:[]},
{id:88,cat:'football',t:'WC Round of 32 — M88: 2nd D vs 2nd G',d:'2026-07-05',h:'01:00',n:'Dallas',tm:[]},
// ROUND OF 16
{id:89,cat:'football',t:'WC Round of 16 — M89: W81 vs W82',d:'2026-07-05',h:'04:00',n:'Philadelphia',tm:[]},
{id:90,cat:'football',t:'WC Round of 16 — M90: W83 vs W84',d:'2026-07-05',h:'00:00',n:'Houston',tm:[]},
{id:91,cat:'football',t:'WC Round of 16 — M91: W77 vs W78',d:'2026-07-06',h:'03:00',n:'New York/NJ',tm:[]},
{id:92,cat:'football',t:'WC Round of 16 — M92: W79 vs W80',d:'2026-07-06',h:'07:00',n:'Mexico City',tm:[]},
{id:93,cat:'football',t:'WC Round of 16 — M93: W85 vs W86',d:'2026-07-07',h:'02:00',n:'Dallas',tm:[]},
{id:94,cat:'football',t:'WC Round of 16 — M94: W87 vs W88',d:'2026-07-07',h:'07:00',n:'Seattle',tm:[]},
{id:95,cat:'football',t:'WC Round of 16 — M95: W73 vs W74',d:'2026-07-07',h:'23:00',n:'Atlanta',tm:[]},
{id:96,cat:'football',t:'WC Round of 16 — M96: W75 vs W76',d:'2026-07-08',h:'03:00',n:'Vancouver',tm:[]},
// QUARTER-FINALS
{id:97,cat:'football',t:'WC Quarter-final 1 — M97',d:'2026-07-10',h:'03:00',n:'Boston',tm:[]},
{id:98,cat:'football',t:'WC Quarter-final 2 — M98',d:'2026-07-11',h:'02:00',n:'Los Angeles',tm:[]},
{id:99,cat:'football',t:'WC Quarter-final 3 — M99',d:'2026-07-12',h:'04:00',n:'Miami',tm:[]},
{id:100,cat:'football',t:'WC Quarter-final 4 — M100',d:'2026-07-12',h:'08:00',n:'Kansas City',tm:[]},
// SEMI-FINALS
{id:101,cat:'football',t:'WC Semi-final 1 — M101',d:'2026-07-15',h:'02:00',n:'Dallas',tm:[]},
{id:102,cat:'football',t:'WC Semi-final 2 — M102',d:'2026-07-16',h:'02:00',n:'Atlanta',tm:[]},
{id:103,cat:'football',t:'WC Third-place play-off — M103',d:'2026-07-19',h:'04:00',n:'Miami',tm:[]},
{id:104,cat:'football',t:'WC Final — M104',d:'2026-07-20',h:'02:00',n:'MetLife Stadium, New Jersey',tm:[]},
// ═══════════════════
// TENNIS
// ═══════════════════
{id:200,cat:'tennis',t:"Queen's Club ATP 500 — Men's SF 1",d:'2026-06-20',h:'18:00',n:"Queen's Club, London. Sat ~12:00 BST"},
{id:201,cat:'tennis',t:"Queen's Club ATP 500 — Men's SF 2",d:'2026-06-20',h:'20:30',n:"Queen's Club, London. Sat ~2:30pm BST"},
{id:202,cat:'tennis',t:"Queen's Club ATP 500 — Men's Final",d:'2026-06-21',h:'20:30',n:"Queen's Club, London. Sun ~2:30pm BST"},
{id:203,cat:'tennis',t:"Halle ATP 500 — Men's SF 1",d:'2026-06-20',h:'17:00',n:'OWL Arena, Halle. Sat ~12:00 CEST'},
{id:204,cat:'tennis',t:"Halle ATP 500 — Men's SF 2",d:'2026-06-20',h:'19:00',n:'OWL Arena, Halle. Sat ~2pm CEST'},
{id:205,cat:'tennis',t:"Halle ATP 500 — Men's Final",d:'2026-06-21',h:'20:00',n:'OWL Arena, Halle. Sun ~3pm CEST'},
{id:206,cat:'tennis',t:"Wimbledon — Men's QF 1",d:'2026-07-07',h:'17:00',n:'All England Club. Tue Jul 7 ~11am BST'},
{id:207,cat:'tennis',t:"Wimbledon — Men's QF 2",d:'2026-07-07',h:'20:00',n:'All England Club. Tue Jul 7 ~2pm BST'},
{id:208,cat:'tennis',t:"Wimbledon — Men's QF 3",d:'2026-07-08',h:'17:00',n:'All England Club. Wed Jul 8 ~11am BST'},
{id:209,cat:'tennis',t:"Wimbledon — Men's QF 4",d:'2026-07-08',h:'20:00',n:'All England Club. Wed Jul 8 ~2pm BST'},
{id:210,cat:'tennis',t:"Wimbledon — Men's SF 1",d:'2026-07-10',h:'17:00',n:'All England Club. Fri Jul 10 ~11am BST'},
{id:211,cat:'tennis',t:"Wimbledon — Men's SF 2",d:'2026-07-10',h:'20:00',n:'All England Club. Fri Jul 10 ~2pm BST'},
{id:212,cat:'tennis',t:"Wimbledon — Men's Final",d:'2026-07-12',h:'21:00',n:'All England Club. Sun Jul 12 ~2pm BST'},
{id:213,cat:'tennis',t:"Washington ATP 500 — Men's SF 1",d:'2026-08-01',h:'23:00',n:'FitzGerald Tennis Ctr, D.C. Sat ~12pm ET'},
{id:214,cat:'tennis',t:"Washington ATP 500 — Men's SF 2",d:'2026-08-02',h:'01:30',n:'FitzGerald Tennis Ctr, D.C. Sat ~2:30pm ET'},
{id:215,cat:'tennis',t:"Washington ATP 500 — Men's Final",d:'2026-08-03',h:'00:00',n:'FitzGerald Tennis Ctr, D.C. Sun ~5pm ET'},
// ═══════════════════
// UFC
// ═══════════════════
{id:300,cat:'mma',t:'UFC Freedom 250: Topuria vs. Gaethje',d:'2026-06-15',h:'07:00',n:'White House South Lawn, D.C. 8pm ET Jun 14. LW title + HW Pereira vs Gane'},
{id:301,cat:'mma',t:'UFC FN 279: Kape vs. Horiguchi 2',d:'2026-06-21',h:'09:00',n:'UFC Apex, Las Vegas. 10pm ET Fri Jun 20'},
{id:302,cat:'mma',t:'UFC FN 280: Fiziev vs. Torres (Baku)',d:'2026-06-28',h:'09:00',n:'National Gymnastics Arena, Baku. 10pm ET Sat Jun 27'},
{id:303,cat:'mma',t:'UFC 329: McGregor vs. Holloway 2',d:'2026-07-12',h:'09:00',n:'T-Mobile Arena, Las Vegas. PPV 10pm ET Sat Jul 11'},
{id:304,cat:'mma',t:'UFC FN 281: Oklahoma City',d:'2026-07-19',h:'09:00',n:'Paycom Center, Oklahoma City. 10pm ET Sat Jul 18'},
{id:305,cat:'mma',t:'UFC FN 282: Ankalaev vs. Rountree Jr. (Abu Dhabi)',d:'2026-07-26',h:'02:00',n:'Etihad Arena, Abu Dhabi. 3pm ET Sat Jul 25'},
{id:306,cat:'mma',t:'UFC FN 283: Medić vs. Rodriguez (Belgrade)',d:'2026-08-02',h:'01:00',n:'Belgrade Arena, Serbia. 2pm ET Sat Aug 1'},
// ═══════════════════
// PFL
// ═══════════════════
{id:400,cat:'mma',t:'PFL Africa: Nigeria (Lagos)',d:'2026-06-14',h:'00:00',n:'Eko Convention Center, Lagos. 1pm ET Sat Jun 13'},
{id:401,cat:'mma',t:'PFL MENA 10 (Jeddah, Saudi Arabia)',d:'2026-06-19',h:'22:00',n:'King Abdullah Sports City, Jeddah'},
{id:402,cat:'mma',t:'PFL San Diego',d:'2026-06-28',h:'09:00',n:'Pechanga Arena, San Diego. 10pm ET Sat Jun 27'},
{id:403,cat:'mma',t:'PFL Austin 2026',d:'2026-07-19',h:'07:00',n:'Moody Center, Austin TX. 8pm ET Sat Jul 18'},
{id:404,cat:'mma',t:'PFL Washington D.C.',d:'2026-07-26',h:'09:00',n:'Washington D.C. 10pm ET Sat Jul 25'},
{id:405,cat:'mma',t:'PFL New York',d:'2026-08-01',h:'02:00',n:'UBS Arena, Belmont Park NY. 7pm ET Fri Jul 31'},
// ═══════════════════
// ONE CHAMPIONSHIP
// ═══════════════════
{id:500,cat:'muaythai',t:'ONE Friday Fights 158 & Inner Circle 18',d:'2026-06-12',h:'20:00',n:'Lumpinee Stadium, Bangkok. Muay Thai + Kickboxing'},
{id:501,cat:'muaythai',t:'ONE Friday Fights 159 & Inner Circle 19',d:'2026-06-19',h:'20:00',n:'Lumpinee Stadium, Bangkok. Muay Thai + Kickboxing'},
{id:502,cat:'muaythai',t:'ONE Friday Fights 160 & Inner Circle 20',d:'2026-06-26',h:'20:00',n:'Lumpinee Stadium, Bangkok. Muay Thai + Kickboxing'},
{id:503,cat:'muaythai',t:'ONE Fight Night 44',d:'2026-06-27',h:'20:00',n:'Lumpinee Stadium, Bangkok. MMA + Muay Thai + Kickboxing'},
{id:504,cat:'muaythai',t:'ONE Friday Fights 161 & Inner Circle 21',d:'2026-07-03',h:'20:00',n:'Lumpinee Stadium, Bangkok. Muay Thai + Kickboxing'},
{id:505,cat:'muaythai',t:'ONE Friday Fights 162 & Inner Circle 22',d:'2026-07-17',h:'20:00',n:'Lumpinee Stadium, Bangkok. Muay Thai + Kickboxing'},
{id:506,cat:'muaythai',t:'ONE Fight Night 45',d:'2026-07-18',h:'20:00',n:'Lumpinee Stadium, Bangkok. MMA + Muay Thai + Kickboxing'},
{id:507,cat:'muaythai',t:'ONE Friday Fights 163 & Inner Circle 23',d:'2026-07-24',h:'20:00',n:'Lumpinee Stadium, Bangkok. Muay Thai + Kickboxing'},
{id:508,cat:'muaythai',t:'ONE Friday Fights 164 & Inner Circle 24',d:'2026-07-31',h:'20:00',n:'Lumpinee Stadium, Bangkok. Muay Thai + Kickboxing'},
{id:509,cat:'muaythai',t:'ONE Friday Fights 165 & Inner Circle 25',d:'2026-08-07',h:'20:00',n:'Lumpinee Stadium, Bangkok. Muay Thai + Kickboxing'},
{id:510,cat:'mma',t:'ONE SAMURAI 2',d:'2026-08-08',h:'17:00',n:'Tokyo, Japan. ~7pm JST = 17:00 WIB. MMA + Muay Thai + Kickboxing'},
{id:511,cat:'muaythai',t:'ONE Friday Fights 166',d:'2026-08-14',h:'20:00',n:'Lumpinee Stadium, Bangkok. Muay Thai + Kickboxing'},
{id:512,cat:'muaythai',t:'ONE Fight Night 46',d:'2026-08-21',h:'20:00',n:'Lumpinee Stadium, Bangkok. MMA + Muay Thai + Kickboxing'},
// ═══════════════════
// BOXING V3 — men's only, no TBA, all verified
// ═══════════════════
{id:600,cat:'boxing',t:'Vargas vs Bam Rodriguez (WBA Bantamweight)',d:'2026-06-14',h:'07:00',n:'Desert Diamond Arena, Glendale AZ. DAZN. 8pm ET Jun 13'},
{id:601,cat:'boxing',t:'Collazo vs Canoy (WBA/WBO Strawweight)',d:'2026-06-21',h:'08:00',n:'Frontwave Arena, Oceanside CA. DAZN. 9pm ET Jun 20'},
{id:602,cat:'boxing',t:'Crocker vs Paro (IBF Welterweight)',d:'2026-06-24',h:'16:00',n:'Pat Rafter Arena, Brisbane. Card 6pm AEST; main event ~10pm AEST'},
{id:603,cat:'boxing',t:'Zayas vs Ennis (WBA/WBO Jr.Middleweight)',d:'2026-06-28',h:'07:00',n:'Barclays Center, Brooklyn NY. DAZN PPV. 8pm ET Jun 27'},
{id:604,cat:'boxing',t:'De Los Santos vs Valenzuela (Lightweight)',d:'2026-06-29',h:'08:00',n:'Las Vegas. Paramount+. 9pm ET Jun 28'},
{id:605,cat:'boxing',t:'Mason vs Cordina (WBO Lightweight)',d:'2026-07-05',h:'07:00',n:'Wolstein Center, Cleveland OH. DAZN+TNT. 8pm ET Jul 4'},
{id:606,cat:'boxing',t:'Gassiev vs Yoka (WBA Reg. Heavyweight)',d:'2026-07-11',h:'23:00',n:'VTB Arena, Moscow. IBA PRO 19. 7pm MSK Jul 11'},
{id:607,cat:'boxing',t:'Joshua vs Prenga (Heavyweight)',d:'2026-07-25',h:'23:00',n:'Riyadh, Saudi Arabia. DAZN. ~12pm ET Jul 25'},
{id:608,cat:'boxing',t:'Spence vs Tszyu (Jr.Middleweight)',d:'2026-07-26',h:'07:00',n:'Australia (TBC). PBC PPV/Prime Video. 8pm ET Jul 25'},
{id:609,cat:'boxing',t:'Berlanga vs Butler / Hitchins vs Salas',d:'2026-07-27',h:'08:00',n:'Infosys Theater, MSG New York. Paramount+. 9pm ET Jul 26'},
{id:610,cat:'boxing',t:'Roach vs Zepeda (Vacant WBC Lightweight)',d:'2026-08-02',h:'07:00',n:'Virgin Hotels Theater, Las Vegas. DAZN+TNT. ~8pm ET Aug 1'},
{id:611,cat:'boxing',t:'Canelo vs Mbilli (WBC Super Middleweight)',d:'2026-09-13',h:'00:00',n:'Riyadh, Saudi Arabia. DAZN. 1pm ET Sep 12'},
// ═══════════════════
// SWIMMING
// ═══════════════════
{id:700,cat:'swimming',t:'European Swimming Championships 2026',d:'2026-08-10',h:'14:00',n:'Olympic Aquatic Centre, Paris. Aug 10–16'},
{id:701,cat:'swimming',t:'Pan Pacific Swimming Championships 2026',d:'2026-08-12',h:'09:00',n:'Woollett Jr. Aquatics Center, Irvine CA. Aug 12–15'},
{id:702,cat:'swimming',t:'World Aquatics Championships (25m)',d:'2026-12-01',h:'09:00',n:'National Aquatics Centre, Beijing. Dec 1–6'},
];

// ── Config ──
window.BIG_TEAMS = ['England','France','Argentina','Brazil','Portugal','Spain','Germany','Netherlands','Belgium','Croatia'];

window.CAT_CONFIG = {
  football: { icon:'⚽', label:'Football',   iconClass:'icon-football' },
  tennis:   { icon:'🎾', label:'Tennis',     iconClass:'icon-tennis'   },
  swimming: { icon:'🏊', label:'Swimming',   iconClass:'icon-swimming' },
  mma:      { icon:'🥊', label:'MMA',        iconClass:'icon-mma'      },
  boxing:   { icon:'🥊', label:'Boxing',     iconClass:'icon-boxing'   },
  muaythai: { icon:'🥋', label:'Muay Thai',  iconClass:'icon-muaythai' },
  other:    { icon:'📅', label:'Other',      iconClass:'icon-other'    },
};
