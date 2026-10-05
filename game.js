/* =========================================================
   เมาแล้วเถียง · Tipsy Duel v2
   More mini-games + optional 🔥 18+ content
   ========================================================= */
const $  = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);

/* =================== DARES (silly, all ages) =================== */
const DARES = [
  {e:'🍜', th:'พูดเหมือนแม่ค้าส้มตำที่กำลังโกรธ "เผ็ดไหม? เผ็ดไหม?!" จนจบเทิร์น',
          en:'Talk like an angry som tam vendor: "Spicy? SPICY?!" until your next turn.', d:20},
  {e:'🏍️', th:'ทำเสียงมอเตอร์ไซค์รับจ้าง + ตะโกน "วินๆๆๆ"',
          en:'Make motorcycle-taxi noises and yell "WIN WIN WIN!"', d:12},
  {e:'🎤', th:'ร้องเพลงลูกทุ่ง 1 ท่อน พร้อมเต้นให้ครบ',
          en:'Sing one verse of a luk thung song — with the dance.', d:20},
  {e:'👻', th:'เล่าเรื่องผีแม่นาคแบบตลก ให้จบใน 20 วิ',
          en:'Tell the legend of Mae Nak — but make it hilarious.', d:20},
  {e:'💔', th:'เลียนแบบพระเอกละครไทยที่กำลังอกหัก',
          en:'Imitate a Thai soap-opera hero going through heartbreak.', d:15},
  {e:'🐔', th:'ทำเป็นไก่ที่รู้ตัวว่ากำลังจะโดนทำต้มยำ',
          en:'Act like a chicken that realized it\'s going in the tom yum.', d:12},
  {e:'📺', th:'พูดแบบพิธีกรรายการเกมโชว์',
          en:'Announce like a game-show host. Everything.', d:18},
  {e:'🍺', th:'ทำเป็นลุงที่เมาแล้วร้องเพลง "ไฟไหม้ฟาง"',
          en:'Act like a drunk uncle belting out "Fai Mai Fang".', d:20},
  {e:'🚗', th:'ทำเป็นคนที่กำลังรถติดบนสุขุมวิท',
          en:'Act like someone stuck in Sukhumvit traffic.', d:15},
  {e:'🏪', th:'เลียนแบบพนักงาน 7-11 ที่เพิ่งเริ่มงานวันแรก',
          en:'Imitate a 7-Eleven clerk on their very first day.', d:18},
  {e:'🎰', th:'ทำเป็นคนถูกหวยรางวัลที่ 1',
          en:'Act like you just won the lottery jackpot.', d:12},
  {e:'📢', th:'พูดแบบนักการเมืองหาเสียง',
          en:'Give a campaign speech like a Thai politician.', d:18},
  {e:'🎓', th:'เลียนแบบคุณครูที่กำลังดุทั้งห้อง',
          en:'Imitate a teacher scolding the whole class.', d:15},
  {e:'🐘', th:'ทำเสียงช้าง + ท่าทางช้าง ให้เหมือนที่สุด',
          en:'Do your best elephant impression — sound and all.', d:12},
  {e:'🌶️', th:'ทำหน้าคนกินส้มตำเผ็ด 20 เม็ดพริก',
          en:'Make the face of someone who ate som tam with 20 chilies.', d:10},
  {e:'📱', th:'เลียนแบบ TikToker รีวิวของ กิน-ร้อง-เต้น',
          en:'Do a TikTok review — eat, sing, dance, all in one.', d:18},
  {e:'🛺', th:'ทำเป็นคนนั่งวินมอเตอร์ไซค์แล้วกลัวตาย',
          en:'Act like you\'re on a motorbike taxi and terrified.', d:12},
  {e:'🏥', th:'เลียนแบบหมอวินิจฉัยโรคแปลกๆ ให้เพื่อนฟัง',
          en:'Imitate a doctor diagnosing a very weird disease.', d:18},
  {e:'🗣️', th:'พูดภาษาวัยรุ่น Gen Z ล้วนๆ 3 ประโยคติด',
          en:'Speak in pure Gen-Z slang for 3 sentences straight.', d:15},
  {e:'🍲', th:'ทำเป็นคนไดเอทแต่เห็นหมูกระทะ',
          en:'Act like a dieter who just spotted a pork BBQ buffet.', d:12},
  {e:'🌧️', th:'ทำเป็นคนกำลังหลบฝนอยู่ใต้ป้ายรถเมล์',
          en:'Act like you\'re hiding from the rain under a bus stop.', d:15},
  {e:'🙏', th:'ทำเป็นคนกำลังทำบุญตักบาตร แล้วลืมเอาโถ',
          en:'Act like you\'re giving alms but forgot the bowl.', d:12},
  {e:'🥊', th:'ทำท่า Muay Thai + ร่ายคาถาก่อนชก',
          en:'Strike a Muay Thai pose and chant a pre-fight spell.', d:15},
  {e:'🎭', th:'เลียนแบบกระสือ/ปอบ ที่กำลังหาอาหาร',
          en:'Imitate a Krasue / Pop ghost hunting for food.', d:15},
  {e:'🚌', th:'ทำเป็นคนขึ้นรถเมล์แน่นจนหายใจไม่ออก',
          en:'Act like you\'re on a packed bus and can\'t breathe.', d:12},
  {e:'🎶', th:'ร้องเพลง "คิดถึง" ของเบิร์ด แบบจริงจังสุดใจ',
          en:'Sing "Khittheung" by Bird — with full sincerity.', d:20},
  {e:'😂', th:'พูดคำว่า "555" แทนหัวเราะทุกครั้ง จนจบเทิร์น',
          en:'Say "555" instead of laughing. Until your next turn.', d:20},
  {e:'🛍️', th:'เลียนแบบแม่ค้าในตลาดที่ขายของเก่งมาก',
          en:'Imitate a market vendor who could sell ice to an Eskimo.', d:18},
  {e:'🎬', th:'เลียนแบบไกด์ทัวร์พาคนไทยเที่ยววัด',
          en:'Imitate a Thai tour guide at a temple.', d:20},
  {e:'🇹🇭', th:'ร้องเพลงชาติไทยให้จบ (ผิดได้ ห้ามหยุด)',
          en:'Sing the Thai national anthem to the end. Don\'t stop.', d:30},
  {e:'🌶️', th:'พูดคำว่า "แซ่บ" ให้ได้ 5 แบบต่างกัน',
          en:'Say "zaeb" in 5 completely different ways.', d:15},
  {e:'🐕', th:'ทำเสียงหมาไทย + ท่าทางหมาตัวจริง',
          en:'Do a Thai street-dog impression. Sound included.', d:10},
  {e:'📺', th:'เลียนแบบพิธีกรข่าวเช้า อ่านข่าวตลก',
          en:'Imitate a morning-news anchor reading a funny story.', d:18},
  {e:'💃', th:'เต้นท่าฮิต TikTok 1 ท่า ให้ครบ',
          en:'Dance one trending TikTok move. All the way through.', d:15},
  {e:'🍲', th:'ทำเป็นคนที่ต้มยำรสจัดเกินไป แล้วต้องทำหน้านิ่ง',
          en:'Act like your tom yum is too spicy but you must stay calm.', d:12}
];

/* =================== CONFESS (18+) =================== */
const CONFESS = [
  {e:'💘', th:'แอบชอบใครอยู่ในห้องนี้ไหม? บอกมาตรงๆ',
          en:'Do you secretly like anyone in this room? Tell the truth.', d:20},
  {e:'💋', th:'เรื่องน่าอายที่สุดที่เคยเกิดขึ้นบนเตียง?',
          en:'Most embarrassing thing that\'s ever happened in bed?', d:25},
  {e:'🔥', th:'ครั้งสุดท้ายที่...เมื่อไหร่? (อีกคนถามได้)',
          en:'When was the last time you...? (opponent fills in the blank)', d:20},
  {e:'💭', th:'ถ้าต้องจูบใครในห้องนี้ เลือกใคร?',
          en:'If you had to kiss someone in this room, who?', d:15},
  {e:'🌙', th:'ความฝันลับๆ ที่ไม่เคยบอกใคร?',
          en:'A secret fantasy you\'ve never told anyone?', d:25},
  {e:'💔', th:'แฟนเก่าคนล่าสุดเป็นยังไง? ทำไมเลิก?',
          en:'What was your last ex like? Why did it end?', d:25},
  {e:'👀', th:'ข้อเสียของอีกคนที่อยากบอกมานาน?',
          en:'A flaw of the other player you\'ve wanted to say for a while?', d:20},
  {e:'🤫', th:'เคยแอบทำอะไรลับๆ ที่ไม่มีใครรู้?',
          en:'Something sneaky you\'ve done that nobody knows about?', d:20},
  {e:'⭐', th:'ให้คะแนนอีกคน 1-10 พร้อมเหตุผล',
          en:'Rate the other player from 1–10 and explain why.', d:20},
  {e:'💌', th:'ถ้าต้องสารภาพรักกับใครสักคน จะเป็นใคร?',
          en:'If you had to confess to someone, who would it be?', d:20},
  {e:'🛏️', th:'สเปกในใจเป็นแบบไหน? อีกคนตรงไหม?',
          en:'What\'s your type? Does the other player fit?', d:20},
  {e:'📱', th:'ข้อความล่าสุดที่ส่งหาแฟน/คนที่ชอบ คืออะไร?',
          en:'What\'s the last message you sent to your partner/crush?', d:20}
];

/* =================== SPICY DARES (18+) =================== */
const SPICY = [
  {e:'🤫', th:'กระซิบข้างหูอีกคน ว่าอยากทำอะไรด้วย',
          en:'Whisper into their ear what you want to do with them.', d:15},
  {e:'👁️', th:'จ้องตาอีกคน 30 วิ ห้ามหลบ ห้ามหัวเราะ',
          en:'Stare into their eyes for 30 sec. No looking away, no laughing.', d:30},
  {e:'💋', th:'บอกจุดที่เซ็กซี่ที่สุดของอีกคน',
          en:'Tell the other player their sexiest feature.', d:15},
  {e:'💌', th:'พูดคำหวานกับอีกคน 3 ประโยคติด ไม่ซ้ำ',
          en:'Say 3 sweet things to them in a row, no repeats.', d:20},
  {e:'💃', th:'ทำท่าเซ็กซี่ 5 วิ ให้อีกคนดู',
          en:'Strike a sexy pose for 5 seconds while they watch.', d:5},
  {e:'❤️', th:'บอกความในใจที่มีต่ออีกคน (จริงใจเท่านั้น)',
          en:'Tell them how you honestly feel about them.', d:25},
  {e:'🎤', th:'ให้อีกคนถามอะไรก็ได้ 1 ข้อ ตอบตามจริง',
          en:'Let them ask you one question. Answer honestly.', d:25},
  {e:'🖐️', th:'สัมผัสแขนอีกคน 10 วิ ห้ามปล่อย',
          en:'Touch their arm for 10 seconds. Don\'t let go.', d:10},
  {e:'😏', th:'ทำเสียงเซ็กซี่ 3 แบบ ให้อีกคนตัดสิน',
          en:'Make 3 "sexy" sounds and let them judge.', d:15},
  {e:'💬', th:'เล่าเรื่องเซ็กซี่ที่ไม่เคยเล่าให้ใครฟัง',
          en:'Tell a spicy story you\'ve never told anyone.', d:30},
  {e:'🎯', th:'บอกว่าอีกคนควรปรับอะไรให้เร้าใจขึ้น',
          en:'Tell them one thing they could do to be more exciting.', d:20},
  {e:'🫦', th:'ทำหน้าตาแบบ "อยาก" ให้อีกคนดู 5 วิ',
          en:'Give them your best "wanting" look for 5 seconds.', d:5},
  {e:'💍', th:'ถ้าต้องคบกับอีกคน 1 วัน จะพาไปไหน?',
          en:'If you had to date them for one day, where would you go?', d:20},
  {e:'🌶️', th:'บอกความลับที่ทำให้อีกคน blush',
          en:'Say something that will make them blush.', d:15},
  {e:'🤝', th:'จับมืออีกคนไว้ 20 วิ โดยไม่พูดอะไร',
          en:'Hold their hand for 20 sec without saying a word.', d:20}
];

/* =================== MINI-GAMES (7) =================== */
const MINIGAMES = [
  {e:'✊', th:'เป่ายิ้งฉุบ',   en:'Rock-Paper-Scissors', type:'rps'},
  {e:'⚡', th:'กดเร็ว',        en:'Tap Race',            type:'tap'},
  {e:'🔢', th:'ทายเลข',       en:'Number Guess',        type:'guess'},
  {e:'🎯', th:'ใครไวกว่า',    en:'Reaction Duel',       type:'react'},
  {e:'🧠', th:'จำให้ได้',      en:'Memory',              type:'memory'},
  {e:'😬', th:'วัดใจ',         en:'Chicken',             type:'chicken'},
  {e:'🔍', th:'หาตัวแปลก',   en:'Odd One Out',         type:'odd'}
];

/* =================== LINES =================== */
const PASS_LINES = [
  {th:'โอ้โห เก่งมาก! 🎉',       en:'Whoa — that was great!'},
  {th:'เทพไปเลย! 🏆',            en:'Absolutely legendary!'},
  {th:'ชนะขาด! 🔥',              en:'Total domination!'},
  {th:'กรรมการยอมแล้ว! 👏',      en:'The judge is impressed!'},
  {th:'ทำได้ไงเนี่ย! 😳',         en:'How did you even do that?!'},
  {th:'สุดยอดเลยพี่! ✨',         en:'Amazing, honestly.'}
];
const FAIL_LINES = [
  {th:'ดูไม่ได้เลย 😬',           en:'That was painful to watch.'},
  {th:'ไม่ผ่าน! 🚫',              en:'Failed!'},
  {th:'ยikes... 💀',              en:'Yikes... that\'s rough.'},
  {th:'กรรมการส่ายหน้า 🙅',       en:'The judge is shaking their head.'},
  {th:'พยายามดี แต่...ไม่ 💩',    en:'Nice try... but no.'},
  {th:'ห่วยมาก 555 😭',           en:'Terrible. 555.'},
  {th:'ร้องไห้แทน 😢',            en:'We\'re crying for you.'}
];
const SPICY_PASS = [
  {th:'ร้อนแรงมาก 🔥',           en:'That was hot.'},
  {th:'เขินเลย 😳',               en:'OK that was blush-worthy.'},
  {th:'กล้ามาก กล้ามาก 👏',      en:'Bold. Very bold.'},
  {th:'โอ้ยยย ไม่ไหว 🔥',        en:'Ooh, that was a lot.'}
];
const SPICY_FAIL = [
  {th:'ยังไม่กล้าพอ 😏',         en:'Not brave enough.'},
  {th:'อายอยู่นะ 😅',             en:'Still shy, huh.'},
  {th:'ไม่ผ่าน! ต้องกล้ากว่านี้ 💋', en:'Failed! Be bolder next time.'},
  {th:'แค่เนี้ยยย 😘',            en:'That\'s all you got?'}
];
const FORFEITS = [
  {th:'กระโดดตบ 10 ครั้ง 🏃',        en:'Do 10 jumping jacks'},
  {th:'วิดพื้น 5 ครั้ง 💪',           en:'Do 5 push-ups'},
  {th:'ยืนขาเดียว 15 วิ 🦩',          en:'Stand on one leg for 15 sec'},
  {th:'พูดเสียงสูงจนจบเทิร์นถัดไป 🎈', en:'Speak in a high voice until next turn'},
  {th:'เต้น TikTok 1 ท่า 💃',         en:'Dance one TikTok move'},
  {th:'ทำเสียงสัตว์ที่อีกฝ่ายเลือก 🐔', en:'Make the animal sound they pick'},
  {th:'นั่งยองๆ 20 วิ 🧎',            en:'Squat for 20 seconds'},
  {th:'พูดคำว่า "ครับ/ค่ะ" ท้ายทุกประโยค 👑', en:'End every sentence with "krub/kha"'}
];

/* =================== STATE =================== */
const state = {
  mode:'tipsy', target:5, content:'normal',
  players:[
    {name:'ไอ้หนู',  nameEn:'Player 1', score:0, bac:0},
    {name:'ไอ้ตี๋',  nameEn:'Player 2', score:0, bac:0}
  ],
  turn:0, busy:false, timerId:null, timeLeft:0
};
let recentDares = [], recentGames = [], recentConfess = [], recentSpicy = [];
let soundOn = true, toastTimer = null;
let lastMode = 'tipsy', lastTarget = 5, lastContent = 'normal';

/* =================== AUDIO =================== */
let actx = null;
function ac(){
  if(!actx){ try{ actx = new (window.AudioContext||window.webkitAudioContext)(); }catch(e){ actx=null; } }
  if(actx && actx.state === 'suspended') actx.resume();
  return actx;
}
function tone(freq,dur,type,vol,slideTo,delay){
  if(!soundOn) return;
  const a = ac(); if(!a) return;
  const t0 = a.currentTime + (delay||0);
  const o = a.createOscillator(), g = a.createGain();
  o.type = type||'sine';
  o.frequency.setValueAtTime(freq,t0);
  if(slideTo) o.frequency.exponentialRampToValueAtTime(slideTo,t0+dur);
  g.gain.setValueAtTime(0.0001,t0);
  g.gain.exponentialRampToValueAtTime(vol||0.08,t0+0.012);
  g.gain.exponentialRampToValueAtTime(0.0001,t0+dur);
  o.connect(g); g.connect(a.destination);
  o.start(t0); o.stop(t0+dur+0.05);
}
function sfx(k){
  switch(k){
    case 'deal':  tone(300,0.08,'triangle',0.09,760); break;
    case 'tick':  tone(900,0.045,'square',0.045); break;
    case 'buzz':  tone(170,0.45,'sawtooth',0.11,80); break;
    case 'pass':
      tone(523,0.10,'sine',0.10);
      tone(659,0.10,'sine',0.10,null,0.09);
      tone(784,0.22,'sine',0.10,null,0.18);
      break;
    case 'fail':
      tone(220,0.18,'sawtooth',0.10,110);
      tone(110,0.34,'sawtooth',0.10,60,0.16);
      break;
    case 'sip':
      tone(430,0.09,'sine',0.09,180);
      tone(390,0.09,'sine',0.09,160,0.10);
      break;
    case 'win':
      [523,659,784,1047,1319].forEach((f,i)=>tone(f,0.26,'triangle',0.10,null,i*0.11));
      break;
    case 'tap':   tone(680,0.04,'sine',0.05); break;
    case 'go':    tone(880,0.10,'triangle',0.12,1320); break;
    case 'suspense': tone(440,0.5,'sine',0.06,220); break;
    case 'spicy': tone(660,0.12,'sine',0.09,990); tone(990,0.15,'sine',0.08,1320,0.10); break;
  }
}
function vibrate(p){ if(navigator.vibrate){ try{ navigator.vibrate(p); }catch(e){} } }

/* =================== HELPERS =================== */
function toast(th, en, ms){
  const el = $('#toast');
  el.innerHTML = escapeHtml(th) + (en ? '<span class="en">' + escapeHtml(en) + '</span>' : '');
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>el.classList.remove('show'), ms||2200);
}
function showScreen(id){ $$('.screen').forEach(s => s.classList.toggle('active', s.id === id)); }
function pick(arr){ return arr[Math.floor(Math.random()*arr.length)]; }
function escapeHtml(s){
  return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
function drinkLine(who){
  if(state.mode === 'tipsy'){
    return { th: escapeHtml(who.name) + ' กินเหล้า 1 อึก 🍺',
             en: escapeHtml(who.nameEn) + ' takes a sip 🍺' };
  }
  const f = pick(FORFEITS);
  return { th: escapeHtml(who.name) + ' — ' + f.th,
           en: escapeHtml(who.nameEn) + ' — ' + f.en };
}
function pickFrom(arr, recentArr, key, max){
  let c, tries = 0;
  do { c = arr[Math.floor(Math.random()*arr.length)]; tries++; }
  while(recentArr.indexOf(c[key]) !== -1 && tries < 40 && arr.length > recentArr.length);
  recentArr.push(c[key]);
  while(recentArr.length > (max||12)) recentArr.shift();
  return c;
}

/* card weights */
function drawCardData(){
  const spicy = state.content === 'spicy';
  const r = Math.random();
  if(spicy){
    if(r < 0.25)      return { kind:'dare',    data: pickFrom(DARES,   recentDares,   'th') };
    else if(r < 0.55) return { kind:'game',    data: pickFrom(MINIGAMES, recentGames, 'type', 3) };
    else if(r < 0.78) return { kind:'confess', data: pickFrom(CONFESS, recentConfess, 'th') };
    else              return { kind:'spicy',   data: pickFrom(SPICY,   recentSpicy,   'th') };
  } else {
    return r < 0.55
      ? { kind:'dare', data: pickFrom(DARES, recentDares, 'th') }
      : { kind:'game', data: pickFrom(MINIGAMES, recentGames, 'type', 3) };
  }
}

/* =================== HUD =================== */
function updateHUD(){
  state.players.forEach((p,i)=>{
    const el = document.getElementById('p'+(i+1));
    el.querySelector('.p-name').textContent = p.name;
    el.querySelector('.p-score').innerHTML  = p.score + '<span>pts</span>';
    el.querySelector('.p-bar-fill').style.width = Math.min(100,p.bac) + '%';
    el.classList.toggle('active-turn',
      state.turn === i && state.busy === false && !$('#screen-win').classList.contains('active'));
  });
  const cur = state.players[state.turn];
  $('#turnBanner').innerHTML =
    'ตาของ <b>' + escapeHtml(cur.name) + '</b> — แข่งถึง ' + state.target +
    '<span class="en">' + escapeHtml(cur.nameEn) + '\'s turn — race to ' + state.target + '</span>';
}
function updateWobble(){
  const total = state.players[0].bac + state.players[1].bac;
  const w = Math.min(4.2, total / 45);
  document.documentElement.style.setProperty('--wob', w.toFixed(2));
}

/* =================== GAME FLOW =================== */
function startGame(){
  ac();
  const n1 = ($('#name1').value || 'ผู้เล่น 1').trim().slice(0,12) || 'ผู้เล่น 1';
  const n2 = ($('#name2').value || 'ผู้เล่น 2').trim().slice(0,12) || 'ผู้เล่น 2';

  state.mode    = lastMode;
  state.target  = lastTarget;
  state.content = lastContent;
  state.players = [
    {name:n1, nameEn:'Player 1', score:0, bac:0},
    {name:n2, nameEn:'Player 2', score:0, bac:0}
  ];
  state.turn = 0; state.busy = false;
  clearInterval(state.timerId);
  recentDares = []; recentGames = []; recentConfess = []; recentSpicy = [];

  const modeTh = state.mode === 'tipsy' ? '🍻 โหมดเมา' : '🥤 โหมดน้ำเปล่า';
  const modeEn = state.mode === 'tipsy' ? 'Tipsy' : 'Sober';
  const spicyTag = state.content === 'spicy' ? ' · 🔥 18+' : '';
  $('#modeTag').innerHTML =
    '<span class="th">' + modeTh + spicyTag + '</span>' +
    '<span class="en">' + modeEn + (state.content === 'spicy' ? ' · Spicy' : '') + '</span>';

  updateHUD(); updateWobble();
  showScreen('screen-game');
  renderDraw();
}

function renderDraw(){
  state.busy = false;
  const card = $('#card');
  const cur  = state.players[state.turn];
  card.className = 'card back';
  card.innerHTML =
    '<div class="cb-emoji">🎴</div>' +
    '<div class="cb-text">กดเพื่อจั่วการ์ด</div>' +
    '<div class="cb-sub">ตาของ ' + escapeHtml(cur.name) +
      '<span class="en">Tap to draw · ' + escapeHtml(cur.nameEn) + '\'s turn</span></div>';
  card.onclick = drawChallenge;

  $('#controls').innerHTML =
    '<button class="btn primary big" id="btn-draw">' +
      '<span class="th">จั่วการ์ด 🎴</span><span class="en">Draw Card</span>' +
    '</button>';
  $('#btn-draw').onclick = drawChallenge;
  updateHUD();
}

const TAG_INFO = {
  dare:    { cls:'dare',    th:'คำสั่ง',   en:'Dare' },
  game:    { cls:'game',    th:'มินิเกม',  en:'Mini-Game' },
  confess: { cls:'confess', th:'สารภาพ',   en:'Confess' },
  spicy:   { cls:'spicy',   th:'🔥 กล้า',  en:'🔥 Spicy Dare' }
};

function drawChallenge(){
  if(state.busy) return;
  state.busy = true;
  ac();
  const picked = drawCardData();
  const isSpicy = picked.kind === 'spicy' || picked.kind === 'confess';
  sfx(isSpicy ? 'spicy' : 'deal');
  vibrate(isSpicy ? [20,40,20] : 18);

  const cur   = state.players[state.turn];
  const judge = state.players[1 - state.turn];
  const tag   = TAG_INFO[picked.kind];

  const card = $('#card');
  card.className = 'card deal type-' + tag.cls;
  card.onclick = null;

  if(picked.kind === 'game'){
    const g = picked.data;
    card.innerHTML =
      '<div class="ch-tag ' + tag.cls + '">' + tag.th + '<span class="en">' + tag.en + '</span></div>' +
      '<div class="ch-emoji">' + g.e + '</div>' +
      '<div class="ch-text">' + escapeHtml(g.th) +
        '<span class="en">' + escapeHtml(g.en) + '</span></div>' +
      '<div class="ch-who">' + escapeHtml(cur.name) + ' vs ' + escapeHtml(judge.name) + '</div>';

    $('#controls').innerHTML =
      '<button class="btn primary big" id="btn-play-game">' +
        '<span class="th">เริ่มมินิเกม ▶</span><span class="en">Start Mini-Game</span>' +
      '</button>';
    $('#btn-play-game').onclick = () => launchMinigame(g.type);
    updateHUD();
    return;
  }

  /* all other types = judge pass/fail */
  const ch = picked.data;
  const spicyBanner = picked.kind === 'spicy'
    ? '<div class="ch-spicy-banner">🔥 18+ · SPICY</div>' : '';

  card.innerHTML =
    spicyBanner +
    '<div class="ch-tag ' + tag.cls + '">' + tag.th + '<span class="en">' + tag.en + '</span></div>' +
    '<div class="ch-emoji">' + ch.e + '</div>' +
    '<div class="ch-text">' + escapeHtml(ch.th) +
      '<span class="en">' + escapeHtml(ch.en) + '</span></div>' +
    (ch.d
      ? '<div class="ch-timer" id="chTimer">' + ch.d + '</div>'
      : '<div class="ch-timer instant">ไม่มีจับเวลา — ทำเลย · No timer</div>') +
    '<div class="ch-who">' + escapeHtml(cur.name) + ' เริ่ม! · Go!</div>';

  $('#controls').innerHTML =
    '<div class="judge-label">' +
      '👨‍⚖️ ' + escapeHtml(judge.name) + ' ตัดสิน — ถ้าไม่สบายใจกดไม่ผ่านได้เลย' +
      '<span class="en">' + escapeHtml(judge.nameEn) + ' judges — tap "Failed" anytime if uncomfortable</span>' +
    '</div>' +
    '<div class="judge-row">' +
      '<button class="btn pass" id="btn-pass">' +
        '<span class="th">✅ ผ่าน</span><span class="en">Nailed It</span></button>' +
      '<button class="btn fail" id="btn-fail">' +
        '<span class="th">❌ ไม่ผ่าน</span><span class="en">Failed</span></button>' +
    '</div>';
  $('#btn-pass').onclick = () => resolveCard(true);
  $('#btn-fail').onclick = () => resolveCard(false);

  if(ch.d) startCountdown(ch.d);
  updateHUD();
}

function startCountdown(sec){
  state.timeLeft = sec;
  clearInterval(state.timerId);
  state.timerId = setInterval(()=>{
    state.timeLeft--;
    const el = document.getElementById('chTimer');
    if(!el) return;
    el.textContent = state.timeLeft;
    if(state.timeLeft <= 3 && state.timeLeft > 0){
      el.classList.add('low'); sfx('tick'); vibrate(12);
    }
    if(state.timeLeft <= 0){
      clearInterval(state.timerId);
      el.textContent = '⏰';
      el.classList.remove('low'); el.classList.add('over');
      sfx('buzz'); vibrate([40,60,40]);
    }
  }, 1000);
}

function resolveCard(passed){
  if(!state.busy) return;
  state.busy = false;
  clearInterval(state.timerId);

  const cur   = state.players[state.turn];
  const other = state.players[1 - state.turn];

  /* detect kind from current card class */
  const card = $('#card');
  const isSpicy = card.classList.contains('type-spicy') || card.classList.contains('type-confess');

  let title, sub, cls, icon;

  if(passed){
    cur.score++;
    other.bac = Math.min(100, other.bac + 13);
    sfx('pass'); vibrate(30);
    icon = '✅'; cls = 'good';
    title = isSpicy ? 'ผ่าน! · Bold!' : 'ผ่าน! · Passed!';
    const p = pick(isSpicy ? SPICY_PASS : PASS_LINES);
    const d = drinkLine(other);
    sub = p.th + '<br><br>' + d.th +
          '<span class="en">' + p.en + '<br>' + d.en + '</span>';
    toast('✅ ' + cur.name + ' ได้แต้ม!', '✅ ' + cur.nameEn + ' scores!', 1800);
  } else {
    cur.bac = Math.min(100, cur.bac + 16);
    sfx('fail'); vibrate([50,40,50]);
    icon = '❌'; cls = 'bad';
    title = 'ไม่ผ่าน! · Failed!';
    const p = pick(isSpicy ? SPICY_FAIL : FAIL_LINES);
    const d = drinkLine(cur);
    sub = p.th + '<br><br>' + d.th +
          '<span class="en">' + p.en + '<br>' + d.en + '</span>';
    toast('❌ ' + cur.name + ' ไม่ผ่าน!', '❌ ' + cur.nameEn + ' failed!', 1800);
  }
  setTimeout(()=>sfx('sip'), 350);

  const stamp = document.createElement('div');
  stamp.className = 'stamp ' + cls + (isSpicy ? ' spicy' : '');
  stamp.innerHTML =
    '<div class="stamp-icon">' + icon + '</div>' +
    '<div class="stamp-title">' + title + '</div>' +
    '<div class="stamp-sub">' + sub + '</div>';
  card.appendChild(stamp);
  $('#controls').innerHTML = '<div class="judge-label">…</div>';

  updateHUD(); updateWobble();
  setTimeout(afterResolution, 2100);
}

function resolveMinigame(winnerIdx){
  state.busy = false;
  const winner = state.players[winnerIdx];
  const loser  = state.players[1 - winnerIdx];

  winner.score++;
  loser.bac = Math.min(100, loser.bac + 15);
  sfx('pass');
  updateWobble();

  const p = pick(PASS_LINES);
  const d = drinkLine(loser);

  const stamp = document.createElement('div');
  stamp.className = 'stamp good';
  stamp.innerHTML =
    '<div class="stamp-icon">🏆</div>' +
    '<div class="stamp-title">' + escapeHtml(winner.name) + ' ชนะ! · Wins!</div>' +
    '<div class="stamp-sub">' + p.th + '<br><br>' + d.th +
      '<span class="en">' + p.en + '<br>' + d.en + '</span></div>';
  $('#card').innerHTML = '';
  $('#card').appendChild(stamp);
  $('#controls').innerHTML = '<div class="judge-label">…</div>';
  updateHUD();
  toast('🏆 ' + winner.name + ' ชนะมินิเกม!', '🏆 ' + winner.nameEn + ' wins!', 1900);
  setTimeout(afterResolution, 2100);
}

function afterResolution(){
  const winner = state.players.find(p => p.score >= state.target);
  if(winner){ endGame(winner); }
  else { state.turn = 1 - state.turn; renderDraw(); }
}

/* =================== MINI-GAME LAUNCHER =================== */
function launchMinigame(type){
  sfx('tap');
  const overlay = $('#overlay');
  overlay.classList.add('active');
  overlay.innerHTML = '';
  vibrate(20);
  const fn = { rps:startRPS, tap:startTapRace, guess:startGuess,
               react:startReaction, memory:startMemory,
               chicken:startChicken, odd:startOdd }[type];
  if(fn) fn(overlay);
}
function closeOverlay(){
  $('#overlay').classList.remove('active');
  $('#overlay').innerHTML = '';
}

/* ---------- helper: two-player verdict screen ---------- */
function verdict(root, {emojiA, emojiB, nameA, nameB, winner, correctText, drawText, replayFn}){
  root.innerHTML = '<div class="mg-wrap">' +
    '<div class="mg-title">ผลออกแล้ว!<span class="en">The verdict!</span></div>' +
    '<div class="mg-reveal">' +
      '<div class="mg-side">' +
        '<div class="who">' + escapeHtml(nameA.name) + '<span class="en">' + escapeHtml(nameA.nameEn) + '</span></div>' +
        '<div class="em" style="font-size:44px">' + emojiA + '</div>' +
      '</div>' +
      '<div class="mg-vs">VS</div>' +
      '<div class="mg-side">' +
        '<div class="who">' + escapeHtml(nameB.name) + '<span class="en">' + escapeHtml(nameB.nameEn) + '</span></div>' +
        '<div class="em" style="font-size:44px">' + emojiB + '</div>' +
      '</div>' +
    '</div>' +
    '<div class="mg-result" id="mgResult"></div>' +
  '</div>';
  const res = $('#mgResult');
  if(winner === -1){
    res.innerHTML = drawText + '<span class="en">Draw! Play again.</span>';
    res.style.color = '#fbbf24';
    const btn = document.createElement('button');
    btn.className = 'mg-bigbtn';
    btn.innerHTML = 'เล่นใหม่<span class="en">Play Again</span>';
    btn.onclick = ()=>{ sfx('tap'); replayFn(); };
    root.querySelector('.mg-wrap').appendChild(btn);
  } else {
    const w = state.players[winner];
    res.innerHTML = '🏆 ' + escapeHtml(w.name) + ' ชนะ!' +
      '<span class="en">🏆 ' + escapeHtml(w.nameEn) + ' wins!</span>';
    res.style.color = '#22c55e';
    sfx('pass');
    setTimeout(()=>{ closeOverlay(); resolveMinigame(winner); }, 1700);
  }
}

/* ---------- 1. เป่ายิ้งฉุบ ---------- */
function startRPS(root){
  const moves = ['✊','✌️','✋'];
  const namesTh = ['ค้อน','กรรไกร','กระดาษ'];
  const namesEn = ['Rock','Scissors','Paper'];
  let p1=null, p2=null, phase=1;

  function render(){
    if(phase === 1){
      root.innerHTML = '<div class="mg-wrap">' +
        '<div class="mg-title">เป่ายิ้งฉุบ<span class="en">Rock-Paper-Scissors</span></div>' +
        '<div class="mg-sub">' + escapeHtml(state.players[0].name) + ' เลือกก่อน (อีกคนห้ามดู!)' +
          '<span class="en">' + escapeHtml(state.players[0].nameEn) + ' picks first — no peeking!</span></div>' +
        '<div class="mg-row">' +
          moves.map((m,i)=>'<button class="mg-move" data-i="'+i+'">' +
            '<span class="em">'+m+'</span>' +
            '<span class="lb">'+namesTh[i]+'<span class="en">'+namesEn[i]+'</span></span>' +
          '</button>').join('') +
        '</div>' +
      '</div>';
      root.querySelectorAll('.mg-move').forEach(b=>{
        b.onclick = ()=>{ p1 = +b.dataset.i; sfx('tap'); phase = 2; render(); };
      });
    } else if(phase === 2){
      root.innerHTML = '<div class="mg-wrap">' +
        '<div class="mg-title">ส่งเครื่องให้<span class="en">Pass the phone</span></div>' +
        '<div class="mg-sub">' + escapeHtml(state.players[1].name) +
          '<span class="en">' + escapeHtml(state.players[1].nameEn) + '</span></div>' +
        '<div class="mg-hint">อย่าแอบดูของอีกคน!<span class="en">Don\'t peek!</span></div>' +
        '<button class="mg-bigbtn" id="mg-ready">พร้อมแล้ว ▶<span class="en">Ready</span></button>' +
      '</div>';
      $('#mg-ready').onclick = ()=>{ sfx('tap'); phase = 3; render(); };
    } else if(phase === 3){
      root.innerHTML = '<div class="mg-wrap">' +
        '<div class="mg-title">ตาคุณแล้ว<span class="en">Your turn</span></div>' +
        '<div class="mg-sub">' + escapeHtml(state.players[1].name) + ' เลือกเลย' +
          '<span class="en">' + escapeHtml(state.players[1].nameEn) + ' — choose!</span></div>' +
        '<div class="mg-row">' +
          moves.map((m,i)=>'<button class="mg-move" data-i="'+i+'">' +
            '<span class="em">'+m+'</span>' +
            '<span class="lb">'+namesTh[i]+'<span class="en">'+namesEn[i]+'</span></span>' +
          '</button>').join('') +
        '</div>' +
      '</div>';
      root.querySelectorAll('.mg-move').forEach(b=>{
        b.onclick = ()=>{ p2 = +b.dataset.i; sfx('tap'); phase = 4; render(); };
      });
    } else {
      let winner;
      if(p1 === p2) winner = -1;
      else if((p1===0 && p2===1) || (p1===1 && p2===2) || (p1===2 && p2===0)) winner = 0;
      else winner = 1;
      verdict(root, {
        emojiA: moves[p1], emojiB: moves[p2],
        nameA: state.players[0], nameB: state.players[1],
        winner,
        drawText: 'เสมอ! เป่าใหม่ 🔁',
        replayFn: ()=>{ p1=null; p2=null; phase=1; render(); }
      });
    }
  }
  render();
}

/* ---------- 2. กดเร็ว ---------- */
function startTapRace(root){
  root.innerHTML = '<div class="mg-wrap">' +
    '<div class="mg-title">กดเร็ว!<span class="en">Tap Race</span></div>' +
    '<div class="mg-sub">กดฝั่งตัวเองให้เยอะสุด ใน 5 วินาที' +
      '<span class="en">Tap your own side as many times as you can in 5 seconds.</span></div>' +
    '<button class="mg-bigbtn" id="mg-start">พร้อม! เริ่มเลย ▶<span class="en">Ready! Go!</span></button>' +
  '</div>';

  $('#mg-start').onclick = ()=>{
    sfx('go');
    let c1=0, c2=0, timeLeft=5, running=true;
    root.innerHTML = '<div class="mg-wrap" style="max-width:520px">' +
      '<div class="mg-arena">' +
        '<div class="mg-half p1" id="half1">' +
          '<div class="hname">' + escapeHtml(state.players[0].name) +
            '<span class="en">' + escapeHtml(state.players[0].nameEn) + '</span></div>' +
          '<div class="hcount" id="c1">0</div>' +
          '<div class="hint">กดตรงนี้<span class="en">Tap here</span></div>' +
        '</div>' +
        '<div class="mg-half p2" id="half2">' +
          '<div class="hcount" id="c2">0</div>' +
          '<div class="hname">' + escapeHtml(state.players[1].name) +
            '<span class="en">' + escapeHtml(state.players[1].nameEn) + '</span></div>' +
          '<div class="hint">กดตรงนี้<span class="en">Tap here</span></div>' +
        '</div>' +
        '<div class="mg-timer" id="mgTimer">5</div>' +
      '</div>' +
    '</div>';

    const h1=$('#half1'), h2=$('#half2'), cnt1=$('#c1'), cnt2=$('#c2'), timerEl=$('#mgTimer');

    const tap1 = e => { if(!running) return; e.preventDefault(); c1++; cnt1.textContent=c1;
      h1.classList.add('pop'); setTimeout(()=>h1.classList.remove('pop'),60); vibrate(8); };
    const tap2 = e => { if(!running) return; e.preventDefault(); c2++; cnt2.textContent=c2;
      h2.classList.add('pop'); setTimeout(()=>h2.classList.remove('pop'),60); vibrate(8); };

    h1.addEventListener('touchstart', tap1, {passive:false});
    h1.addEventListener('mousedown', tap1);
    h2.addEventListener('touchstart', tap2, {passive:false});
    h2.addEventListener('mousedown', tap2);

    const t = setInterval(()=>{
      timeLeft--;
      timerEl.textContent = timeLeft;
      if(timeLeft <= 3 && timeLeft > 0){ sfx('tick'); vibrate(20); }
      if(timeLeft <= 0){
        clearInterval(t); running = false;
        timerEl.textContent = '⏰';
        sfx('buzz'); vibrate([40,60,40]);
        h1.removeEventListener('touchstart', tap1); h1.removeEventListener('mousedown', tap1);
        h2.removeEventListener('touchstart', tap2); h2.removeEventListener('mousedown', tap2);
        const winner = c1 > c2 ? 0 : (c2 > c1 ? 1 : -1);
        setTimeout(()=>{
          verdict(root, {
            emojiA: String(c1), emojiB: String(c2),
            nameA: state.players[0], nameB: state.players[1],
            winner,
            drawText: 'เสมอ! 🔁',
            replayFn: ()=>startTapRace(root)
          });
        }, 300);
      }
    }, 1000);
  };
}

/* ---------- 3. ทายเลข ---------- */
function startGuess(root){
  let secret = null, phase = 1;
  function render(){
    if(phase === 1){
      root.innerHTML = '<div class="mg-wrap">' +
        '<div class="mg-title">ทายเลข 1–10<span class="en">Number Guess</span></div>' +
        '<div class="mg-sub">' + escapeHtml(state.players[0].name) + ' เลือกเลขลับ 1–10<br>อีกคนห้ามดู!' +
          '<span class="en">' + escapeHtml(state.players[0].nameEn) + ' picks a secret number 1–10. No peeking!</span></div>' +
        '<div class="mg-numpad">' +
          Array.from({length:10},(_,i)=>'<button class="mg-num" data-n="'+(i+1)+'">'+(i+1)+'</button>').join('') +
        '</div></div>';
      root.querySelectorAll('.mg-num').forEach(b=>{
        b.onclick = ()=>{ secret = +b.dataset.n; b.classList.add('picked'); sfx('tap');
          setTimeout(()=>{ phase = 2; render(); }, 260); };
      });
    } else if(phase === 2){
      root.innerHTML = '<div class="mg-wrap">' +
        '<div class="mg-title">ส่งเครื่องให้<span class="en">Pass the phone</span></div>' +
        '<div class="mg-sub">' + escapeHtml(state.players[1].name) + ' ทายเลย' +
          '<span class="en">' + escapeHtml(state.players[1].nameEn) + ' — make your guess.</span></div>' +
        '<button class="mg-bigbtn" id="mg-ready">พร้อม ▶<span class="en">Ready</span></button></div>';
      $('#mg-ready').onclick = ()=>{ sfx('tap'); phase = 3; render(); };
    } else {
      root.innerHTML = '<div class="mg-wrap">' +
        '<div class="mg-title">ทายสิ!<span class="en">Guess it!</span></div>' +
        '<div class="mg-sub">ทายเลขลับ 1–10' +
          '<span class="en">Guess the secret number 1–10.</span></div>' +
        '<div class="mg-numpad">' +
          Array.from({length:10},(_,i)=>'<button class="mg-num" data-n="'+(i+1)+'">'+(i+1)+'</button>').join('') +
        '</div></div>';
      root.querySelectorAll('.mg-num').forEach(b=>{
        b.onclick = ()=>{
          const guess = +b.dataset.n;
          sfx('tap');
          const correct = (guess === secret);
          const winner = correct ? 1 : 0;
          verdict(root, {
            emojiA: String(secret), emojiB: String(guess),
            nameA: {name:'เลขลับ', nameEn:'Secret'},
            nameB: {name:'ทายว่า', nameEn:'Guess'},
            winner,
            drawText: 'ถูกเป๊ะ!',
            replayFn: ()=>{ secret=null; phase=1; render(); }
          });
        };
      });
    }
  }
  render();
}

/* ---------- 4. ใครไวกว่า (Reaction Duel) ---------- */
function startReaction(root){
  let armed = false, timeoutId = null, locked = false;

  root.innerHTML = '<div class="mg-wrap">' +
    '<div class="mg-title">ใครไวกว่า<span class="en">Reaction Duel</span></div>' +
    '<div class="mg-sub">รอสัญญาณ "GO!" แล้วแตะฝั่งตัวเองคนแรกชนะ' +
      '<span class="en">Wait for "GO!" then tap your side first. Tap too early = lose.</span></div>' +
    '<button class="mg-bigbtn" id="mg-start">พร้อม! เริ่มเลย ▶<span class="en">Ready! Go!</span></button>' +
  '</div>';

  $('#mg-start').onclick = ()=>{
    locked = false;
    root.innerHTML = '<div class="mg-wrap" style="max-width:520px">' +
      '<div class="mg-arena">' +
        '<div class="mg-half p1" id="half1">' +
          '<div class="hname">' + escapeHtml(state.players[0].name) +
            '<span class="en">' + escapeHtml(state.players[0].nameEn) + '</span></div>' +
          '<div class="hint">รอ GO!<span class="en">Wait for GO!</span></div>' +
        '</div>' +
        '<div class="mg-half p2" id="half2">' +
          '<div class="hname">' + escapeHtml(state.players[1].name) +
            '<span class="en">' + escapeHtml(state.players[1].nameEn) + '</span></div>' +
          '<div class="hint">รอ GO!<span class="en">Wait for GO!</span></div>' +
        '</div>' +
        '<div class="mg-timer" id="mgTimer">…</div>' +
      '</div>' +
    '</div>';

    const h1=$('#half1'), h2=$('#half2'), timerEl=$('#mgTimer');

    const clickHandler = who => e => {
      if(locked) return;
      e.preventDefault();
      locked = true;
      clearTimeout(timeoutId);
      if(!armed){
        /* early tap = auto-lose */
        sfx('buzz'); vibrate([60,40,60]);
        const winner = 1 - who;
        const w = state.players[winner];
        timerEl.textContent = '⚡';
        timerEl.classList.remove('go');
        setTimeout(()=>{
          verdict(root, {
            emojiA: who === 0 ? '❌' : '✅',
            emojiB: who === 1 ? '❌' : '✅',
            nameA: state.players[0], nameB: state.players[1],
            winner,
            drawText: '', replayFn: ()=>startReaction(root)
          });
        }, 400);
        return;
      }
      /* valid tap - first one wins */
      sfx('pass'); vibrate(40);
      const winner = who;
      verdict(root, {
        emojiA: who === 0 ? '⚡' : '😴',
        emojiB: who === 1 ? '⚡' : '😴',
        nameA: state.players[0], nameB: state.players[1],
        winner,
        drawText: '', replayFn: ()=>startReaction(root)
      });
    };

    h1.addEventListener('touchstart', clickHandler(0), {passive:false});
    h1.addEventListener('mousedown', clickHandler(0));
    h2.addEventListener('touchstart', clickHandler(1), {passive:false});
    h2.addEventListener('mousedown', clickHandler(1));

    /* countdown then GO */
    sfx('suspense');
    timeoutId = setTimeout(()=>{
      armed = true;
      timerEl.textContent = 'GO!';
      timerEl.classList.add('go');
      sfx('go'); vibrate([30,30,30]);
    }, 1800 + Math.random() * 2500);
  };
}

/* ---------- 5. จำให้ได้ (Memory) ---------- */
function startMemory(root){
  const colors = ['c1','c2','c3','c4'];
  const seq = [];
  const len = 5;
  for(let i=0;i<len;i++) seq.push(Math.floor(Math.random()*4));

  let phase = 'idle';
  let input = [];

  function renderIdle(){
    root.innerHTML = '<div class="mg-wrap">' +
      '<div class="mg-title">จำให้ได้<span class="en">Memory</span></div>' +
      '<div class="mg-sub">จำลำดับสี ' + len + ' สี ที่จะกระพริบ แล้วกดตามให้ถูก<br>' +
        'กดผิด = แพ้ทันที' +
        '<span class="en">Watch ' + len + ' colors flash. Repeat the sequence. One mistake = lose.</span></div>' +
      '<button class="mg-bigbtn" id="mg-start">พร้อม ▶<span class="en">Ready</span></button>' +
    '</div>';
    $('#mg-start').onclick = ()=>playSequence();
  }

  function renderBoard(interactive){
    root.innerHTML = '<div class="mg-wrap">' +
      '<div class="mg-title">จำให้ได้<span class="en">Memory</span></div>' +
      '<div class="mg-sub" id="memMsg">' +
        (interactive
          ? 'กดตามลำดับ!<span class="en">Repeat the sequence!</span>'
          : 'ดูให้ดี...<span class="en">Watch closely...</span>') +
      '</div>' +
      '<div class="mg-memgrid">' +
        colors.map((c,i)=>'<div class="mg-mem '+c+'" data-i="'+i+'"></div>').join('') +
      '</div>' +
    '</div>';

    const cells = root.querySelectorAll('.mg-mem');
    if(interactive){
      cells.forEach(cell=>{
        cell.onclick = ()=>{
          const i = +cell.dataset.i;
          input.push(i);
          cell.classList.add('flash');
          sfx('tap'); vibrate(12);
          setTimeout(()=>cell.classList.remove('flash'), 180);

          const idx = input.length - 1;
          if(input[idx] !== seq[idx]){
            /* wrong */
            sfx('fail'); vibrate([60,40,60]);
            cell.classList.add('wrong');
            cells.forEach(c => c.onclick = null);
            /* current player loses - judge wins */
            const loser = state.turn;
            const winner = 1 - loser;
            setTimeout(()=>{
              verdict(root, {
                emojiA: loser === 0 ? '❌' : '✅',
                emojiB: loser === 1 ? '❌' : '✅',
                nameA: state.players[0], nameB: state.players[1],
                winner,
                drawText: '', replayFn: ()=>startMemory(root)
              });
            }, 700);
            return;
          }
          if(input.length === seq.length){
            /* success */
            sfx('pass'); vibrate(40);
            const winner = state.turn;
            setTimeout(()=>{
              verdict(root, {
                emojiA: winner === 0 ? '🧠' : '😴',
                emojiB: winner === 1 ? '🧠' : '😴',
                nameA: state.players[0], nameB: state.players[1],
                winner,
                drawText: '', replayFn: ()=>startMemory(root)
              });
            }, 500);
          }
        };
      });
    }
  }

  function playSequence(){
    renderBoard(false);
    let i = 0;
    const cells = root.querySelectorAll('.mg-mem');
    const interval = setInterval(()=>{
      if(i >= seq.length){
        clearInterval(interval);
        input = [];
        setTimeout(()=>renderBoard(true), 400);
        return;
      }
      const cell = cells[seq[i]];
      cell.classList.add('flash');
      tone(400 + seq[i]*120, 0.14, 'sine', 0.09);
      vibrate(15);
      setTimeout(()=>cell.classList.remove('flash'), 380);
      i++;
    }, 620);
  }

  renderIdle();
}

/* ---------- 6. วัดใจ (Chicken) ---------- */
function startChicken(root){
  root.innerHTML = '<div class="mg-wrap">' +
    '<div class="mg-title">วัดใจ<span class="en">Chicken</span></div>' +
    '<div class="mg-sub">แตะค้างไว้ทั้งสองคน ใครปล่อยก่อนแพ้!<br>แต่ถ้าค้างเกิน 10 วิ ทั้งคู่แพ้' +
      '<span class="en">Both hold your side. First to let go loses. But holding past 10 sec = both lose.</span></div>' +
    '<button class="mg-bigbtn" id="mg-start">พร้อม ▶<span class="en">Ready</span></button>' +
  '</div>';

  $('#mg-start').onclick = ()=>{
    let held1 = false, held2 = false, done = false, elapsed = 0;
    let tickId = null;

    root.innerHTML = '<div class="mg-wrap" style="max-width:520px">' +
      '<div class="mg-chicken">' +
        '<div class="mg-chick-half p1" id="chick1">' +
          '<div class="hname">' + escapeHtml(state.players[0].name) +
            '<span class="en">' + escapeHtml(state.players[0].nameEn) + '</span></div>' +
          '<div class="status" id="st1">กดค้าง</div>' +
        '</div>' +
        '<div class="mg-chick-half p2" id="chick2">' +
          '<div class="hname">' + escapeHtml(state.players[1].name) +
            '<span class="en">' + escapeHtml(state.players[1].nameEn) + '</span></div>' +
          '<div class="status" id="st2">กดค้าง</div>' +
        '</div>' +
        '<div class="mg-timer" id="mgTimer">0.0<span class="small">sec</span></div>' +
      '</div>' +
    '</div>';

    const chick1 = $('#chick1'), chick2 = $('#chick2');
    const st1 = $('#st1'), st2 = $('#st2'), timerEl = $('#mgTimer');

    function end(loser){
      if(done) return;
      done = true;
      clearInterval(tickId);
      chick1.replaceWith(chick1.cloneNode(true));
      chick2.replaceWith(chick2.cloneNode(true));
      sfx('buzz'); vibrate([40,60,40]);
      const winner = 1 - loser;
      setTimeout(()=>{
        verdict(root, {
          emojiA: loser === 0 ? '🐔' : '😤',
          emojiB: loser === 1 ? '🐔' : '😤',
          nameA: state.players[0], nameB: state.players[1],
          winner,
          drawText: '', replayFn: ()=>startChicken(root)
        });
      }, 500);
    }

    function startHold(who){
      if(done) return;
      if(who === 0 && !held1){ held1 = true; chick1.classList.add('holding'); st1.textContent = 'ค้างอยู่!'; st1.classList.add('hold'); }
      if(who === 1 && !held2){ held2 = true; chick2.classList.add('holding'); st2.textContent = 'ค้างอยู่!'; st2.classList.add('hold'); }
    }
    function endHold(who){
      if(done) return;
      if(who === 0 && held1){ held1 = false; chick1.classList.remove('holding'); st1.textContent = 'ปล่อย!'; end(0); }
      if(who === 1 && held2){ held2 = false; chick2.classList.remove('holding'); st2.textContent = 'ปล่อย!'; end(1); }
    }

    chick1.addEventListener('touchstart', e=>{ e.preventDefault(); startHold(0); }, {passive:false});
    chick1.addEventListener('touchend', e=>{ e.preventDefault(); endHold(0); }, {passive:false});
    chick1.addEventListener('touchcancel', ()=>endHold(0));
    chick1.addEventListener('mousedown', ()=>startHold(0));
    chick1.addEventListener('mouseup', ()=>endHold(0));
    chick1.addEventListener('mouseleave', ()=>{ if(held1) endHold(0); });

    chick2.addEventListener('touchstart', e=>{ e.preventDefault(); startHold(1); }, {passive:false});
    chick2.addEventListener('touchend', e=>{ e.preventDefault(); endHold(1); }, {passive:false});
    chick2.addEventListener('touchcancel', ()=>endHold(1));
    chick2.addEventListener('mousedown', ()=>startHold(1));
    chick2.addEventListener('mouseup', ()=>endHold(1));
    chick2.addEventListener('mouseleave', ()=>{ if(held2) endHold(1); });

    tickId = setInterval(()=>{
      if(done) return;
      elapsed += 0.1;
      timerEl.innerHTML = elapsed.toFixed(1) + '<span class="small">sec</span>';
      if(elapsed >= 7 && elapsed < 10){
        chick1.classList.add('danger'); chick2.classList.add('danger');
        if(Math.floor(elapsed*10) % 10 === 0) sfx('tick');
      }
      if(elapsed >= 10){
        /* both lose - judge calls it a draw, but let's just say no one wins */
        done = true;
        clearInterval(tickId);
        sfx('buzz'); vibrate([80,40,80,40,80]);
        chick1.replaceWith(chick1.cloneNode(true));
        chick2.replaceWith(chick2.cloneNode(true));
        timerEl.innerHTML = '💥<span class="small">BOTH LOSE</span>';
        setTimeout(()=>{
          verdict(root, {
            emojiA: '🐔', emojiB: '🐔',
            nameA: state.players[0], nameB: state.players[1],
            winner: -1,
            drawText: 'เสือกทั้งคู่! 🔁',
            replayFn: ()=>startChicken(root)
          });
        }, 800);
      }
    }, 100);
  };
}

/* ---------- 7. หาตัวแปลก (Odd One Out) ---------- */
function startOdd(root){
  const PAIRS = [
    ['🍺','🍻'], ['😀','😁'], ['🐶','🐕'], ['🍜','🍝'],
    ['❤️','💖'], ['⭐','🌟'], ['🔥','🔥'], ['🌶️','🌶'],
    ['🎉','🎊'], ['☕','🍵'], ['🚗','🚙'], ['🐱','🐈']
  ];
  const pair = PAIRS[Math.floor(Math.random()*PAIRS.length)];
  const same = Math.random() < 0.5 ? pair[0] : pair[1];
  const odd  = same === pair[0] ? pair[1] : pair[0];
  const oddIndex = Math.floor(Math.random()*9);

  root.innerHTML = '<div class="mg-wrap">' +
    '<div class="mg-title">หาตัวแปลก<span class="en">Odd One Out</span></div>' +
    '<div class="mg-sub">' + escapeHtml(state.players[state.turn].name) +
      ' — หาตัวที่ไม่เหมือนใน 5 วิ' +
      '<span class="en">Find the one that doesn\'t match. 5 seconds.</span></div>' +
    '<div class="mg-oddgrid" id="oddGrid">' +
      Array.from({length:9},(_,i)=>'<button class="mg-oddcell" data-i="'+i+'">' +
        (i === oddIndex ? odd : same) + '</button>').join('') +
    '</div>' +
    '<div class="mg-timer" id="oddTimer" style="position:static;transform:none;font-size:36px;margin-top:8px">5</div>' +
  '</div>';

  let done = false;
  let timeLeft = 5;
  const timerEl = $('#oddTimer');
  const grid = $('#oddGrid');

  const timeoutId = setTimeout(()=>{
    if(done) return;
    done = true;
    sfx('buzz'); vibrate([60,40,60]);
    clearInterval(tick);
    grid.querySelectorAll('.mg-oddcell').forEach(c=>c.disabled = true);
    /* current player loses */
    const loser = state.turn;
    const winner = 1 - loser;
    setTimeout(()=>{
      verdict(root, {
        emojiA: loser === 0 ? '⏰' : '✅',
        emojiB: loser === 1 ? '⏰' : '✅',
        nameA: state.players[0], nameB: state.players[1],
        winner,
        drawText: '', replayFn: ()=>startOdd(root)
      });
    }, 700);
  }, 5000);

  const tick = setInterval(()=>{
    if(done) return;
    timeLeft--;
    timerEl.textContent = timeLeft;
    if(timeLeft <= 3 && timeLeft > 0){ sfx('tick'); vibrate(15); }
  }, 1000);

  grid.querySelectorAll('.mg-oddcell').forEach(cell=>{
    cell.onclick = ()=>{
      if(done) return;
      done = true;
      clearTimeout(timeoutId); clearInterval(tick);
      const i = +cell.dataset.i;
      grid.querySelectorAll('.mg-oddcell').forEach(c=>c.disabled = true);

      if(i === oddIndex){
        cell.classList.add('right');
        sfx('pass'); vibrate(40);
        const winner = state.turn;
        setTimeout(()=>{
          verdict(root, {
            emojiA: winner === 0 ? '🔍' : '😴',
            emojiB: winner === 1 ? '🔍' : '😴',
            nameA: state.players[0], nameB: state.players[1],
            winner,
            drawText: '', replayFn: ()=>startOdd(root)
          });
        }, 500);
      } else {
        cell.classList.add('wrong');
        sfx('fail'); vibrate([60,40,60]);
        const loser = state.turn;
        const winner = 1 - loser;
        setTimeout(()=>{
          verdict(root, {
            emojiA: loser === 0 ? '❌' : '✅',
            emojiB: loser === 1 ? '❌' : '✅',
            nameA: state.players[0], nameB: state.players[1],
            winner,
            drawText: '', replayFn: ()=>startOdd(root)
          });
        }, 700);
      }
    };
  });
}

/* =================== END =================== */
function endGame(winner){
  showScreen('screen-win');
  sfx('win'); vibrate([30,50,30,50,80]);
  confetti();
  $('#winName').textContent = winner.name;
  const loser = state.players.find(p => p !== winner);
  const lines = [
    {th:'อีกคนก็สู้เต็มที่นะ แค่แพ้เอง', en:'The other one fought hard. Just lost, that\'s all.'},
    {th:'ไม่มีใครหยุดได้ ไม่มีใครเทียบได้', en:'Unstoppable. Untouchable.'},
    {th:'ผลงานระดับตำนาน 📚',           en:'A performance for the history books. 📚'},
    {th:'ไปดู ' + loser.name + ' หน่อย หมดสภาพ', en:'Somebody check on ' + loser.nameEn + '.'},
    {th:'ระดับตำนานไปเลย 🏆',            en:'Legend status: unlocked. 🏆'},
    {th:'ชนะเพราะโชค แพ้เพราะ...ก็แพ้',  en:'Won by luck. Lost because... well, lost.'}
  ];
  const l = pick(lines);
  $('#winSub').innerHTML = l.th + '<span class="en">' + l.en + '</span>';
  $('#finalScore').textContent = state.players[0].score + ' — ' + state.players[1].score;
}
function confetti(){
  const wrap = $('#confetti');
  wrap.innerHTML = '';
  const emojis = ['🍻','🎉','🥳','🍺','⭐','💜','🎊','🍾','✨','🇹🇭','💋','🔥'];
  for(let i = 0; i < 34; i++){
    const s = document.createElement('span');
    s.textContent = emojis[Math.floor(Math.random()*emojis.length)];
    s.style.left = (Math.random()*100) + '%';
    s.style.fontSize = (16 + Math.random()*26) + 'px';
    s.style.animationDelay = (Math.random()*2.2) + 's';
    s.style.animationDuration = (2.6 + Math.random()*2.4) + 's';
    wrap.appendChild(s);
  }
}

/* =================== EVENT WIRING =================== */
function init(){
  $('#modeRow').addEventListener('click', e => {
    const b = e.target.closest('.pill'); if(!b) return;
    sfx('tap');
    $$('#modeRow .pill').forEach(p => p.classList.remove('active'));
    b.classList.add('active');
    lastMode = b.dataset.mode;
  });

  $('#contentRow').addEventListener('click', e => {
    const b = e.target.closest('.pill'); if(!b) return;
    sfx('tap');
    $$('#contentRow .pill').forEach(p => p.classList.remove('active'));
    b.classList.add('active');
    lastContent = b.dataset.content;
    if(lastContent === 'spicy'){
      toast('🔥 โหมด 18+ เปิดแล้ว — ต้องยินยอมทั้งสองฝ่าย',
            'Spicy mode ON — both players must consent.', 3200);
      sfx('spicy');
    }
  });

  $('#targetRow').addEventListener('click', e => {
    const b = e.target.closest('.pill'); if(!b) return;
    sfx('tap');
    $$('#targetRow .pill').forEach(p => p.classList.remove('active'));
    b.classList.add('active');
    lastTarget = parseInt(b.dataset.target, 10);
  });

  $('#btn-start').addEventListener('click', startGame);
  $('#btn-rules').addEventListener('click', ()=>{ sfx('tap'); showScreen('screen-rules'); });
  $('#btn-back').addEventListener('click', ()=>{ sfx('tap'); showScreen('screen-title'); });
  $('#btn-again').addEventListener('click', ()=>{ sfx('tap'); $('#confetti').innerHTML=''; startGame(); });
  $('#btn-home').addEventListener('click', ()=>{
    sfx('tap'); $('#confetti').innerHTML=''; updateWobble();
    showScreen('screen-title');
  });
  $('#btn-quit').addEventListener('click', ()=>{
    sfx('tap'); clearInterval(state.timerId); state.busy = false;
    closeOverlay(); showScreen('screen-title');
  });
  $('#btn-sound').addEventListener('click', function(){
    soundOn = !soundOn;
    this.textContent = soundOn ? '🔊' : '🔇';
    if(soundOn) sfx('tap');
  });

  updateWobble();
}

init();