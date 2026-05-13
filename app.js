/* ============================================================
   STATE
   ============================================================ */
let xp = 0, totalCorrect = 0, streak = 0;
let curDeck = null, curIdx = 0, flipped = false;
let qIdx = 0, qScore = 0, shuffled = [];
let selOSI = null;

/* ============================================================
   XP
   ============================================================ */
function addXP(n) {
  xp += n;
  document.getElementById('xp-val').textContent = xp;
  document.getElementById('xp-fill').style.width = (xp % 100) + '%';
  document.getElementById('s-correct').textContent = totalCorrect;
  document.getElementById('s-streak').textContent = streak;
}

/* ============================================================
   TABS & ARTICLE RENDERING — defined after TERMS below
   ============================================================ */
const TABS = ['home','netread','devread','awsread','cards','diagram','quiz'];

function scrollTo2(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({behavior:'smooth', block:'start'});
  el.closest('.section').querySelectorAll('.toc-a').forEach(a => a.classList.remove('active'));
  const tocEl = document.querySelector(`[onclick="scrollTo2('${id}')"]`);
  if (tocEl) tocEl.classList.add('active');
}

/* ============================================================
   FLASHCARDS — deck list rendering
   ============================================================ */
function renderDeckLists() {
  const netKeys = ['osi','tcpip','netsec'];
  const awsKeys = ['compute','storage','netaws','secaws'];
  const make = (keys, containerId) => {
    document.getElementById(containerId).innerHTML = keys.map(k => {
      const d = DECKS[k];
      return `<div class="card" onclick="openDeck('${k}')">
        <span class="card-icon">${d.icon}</span>
        <div class="card-title">${d.title}</div>
        <div class="card-desc">${d.desc}</div>
        <span class="badge badge-${d.badge}">${d.cards.length}枚</span>
      </div>`;
    }).join('');
  };
  make(netKeys, 'net-deck-list');
  make(awsKeys, 'aws-deck-list');
}
renderDeckLists();

function openDeck(key) {
  curDeck = DECKS[key]; curIdx = 0; flipped = false;
  document.getElementById('fc-list').style.display = 'none';
  document.getElementById('fc-viewer').style.display = 'block';
  document.getElementById('fc-deck-title').textContent = curDeck.title;
  renderFC();
}

function closeFC() {
  document.getElementById('fc-viewer').style.display = 'none';
  document.getElementById('fc-list').style.display = 'block';
}

function renderFC() {
  const c = curDeck.cards[curIdx];
  document.getElementById('fc-q').textContent = c.q;
  document.getElementById('fc-a').innerHTML = c.a;
  document.getElementById('fc-cur').textContent = curIdx + 1;
  document.getElementById('fc-tot').textContent = curDeck.cards.length;
  const card = document.getElementById('fc-card');
  card.classList.remove('flipped'); flipped = false;
}

function flipFC() {
  flipped = !flipped;
  document.getElementById('fc-card').classList.toggle('flipped', flipped);
  if (flipped) addXP(2);
}

function fcNav(dir) {
  if (!curDeck) return;
  curIdx = Math.max(0, Math.min(curDeck.cards.length - 1, curIdx + dir));
  renderFC();
}

/* ============================================================
   QUIZ
   ============================================================ */
function initQuiz() {
  shuffled = [...QUIZ].sort(() => Math.random() - .5);
  qIdx = 0; qScore = 0;
  document.getElementById('quiz-area').style.display = 'block';
  document.getElementById('quiz-score').classList.remove('show');
  renderQ();
}

function renderQ() {
  const q = shuffled[qIdx];
  document.getElementById('q-num').textContent = `Q${qIdx+1} / ${shuffled.length}`;
  document.getElementById('q-text').textContent = q.q;
  document.getElementById('q-exp').className = 'quiz-exp';
  document.getElementById('q-next').style.display = 'none';
  document.getElementById('q-opts').innerHTML = q.opts.map((o,i) =>
    `<button class="quiz-opt" onclick="answerQ(${i})">${o}</button>`
  ).join('');
}

function answerQ(chosen) {
  const q = shuffled[qIdx];
  document.querySelectorAll('.quiz-opt').forEach(b => b.disabled = true);
  document.querySelectorAll('.quiz-opt')[q.ans].classList.add('correct');
  if (chosen === q.ans) {
    qScore++; totalCorrect++; streak++;
    addXP(10 + Math.min(streak * 2, 20));
  } else {
    document.querySelectorAll('.quiz-opt')[chosen].classList.add('wrong');
    streak = 0; addXP(2);
  }
  const exp = document.getElementById('q-exp');
  exp.innerHTML = q.exp; exp.classList.add('show');
  document.getElementById('q-next').style.display = 'inline-block';
}

function nextQ() {
  qIdx++;
  if (qIdx >= shuffled.length) showScore();
  else renderQ();
}

function showScore() {
  document.getElementById('quiz-area').style.display = 'none';
  document.getElementById('quiz-score').classList.add('show');
  document.getElementById('final-score').textContent = qScore;
  const pct = Math.round(qScore / shuffled.length * 100);
  document.getElementById('score-msg').textContent =
    pct >= 90 ? '🏆 完璧！素晴らしい理解度です！' :
    pct >= 70 ? '👏 よくできました！もう少しで完璧！' :
    pct >= 50 ? '📚 基礎は理解できています。フラッシュカードで復習しよう' :
    '💪 もう一度学習して再チャレンジしましょう！';
}

/* ============================================================
   DIAGRAM
   ============================================================ */
function initDiagram() {
  // OSI
  const cont = document.getElementById('osi-layers');
  if (!cont.innerHTML) {
    cont.innerHTML = OSI.map((l,i) => `
      <div class="osi-row" onclick="selOSIRow(${i})" style="border-left:3px solid ${l.color}">
        <div class="osi-num" style="color:${l.color}">${l.num}</div>
        <div class="osi-name">${l.name}</div>
        <div class="osi-eg">${l.eg}</div>
      </div>
    `).join('');
  }
  // Tooltip
  document.querySelectorAll('[data-tip]').forEach(el => {
    el.addEventListener('mouseenter', e => {
      const t = TIPS[el.dataset.tip]; if (!t) return;
      document.getElementById('tt-title').textContent = t.t;
      document.getElementById('tt-body').textContent = t.b;
      document.getElementById('tt').classList.add('show');
      moveTT(e);
    });
    el.addEventListener('mousemove', moveTT);
    el.addEventListener('mouseleave', () => document.getElementById('tt').classList.remove('show'));
  });
}

function moveTT(e) {
  const tt = document.getElementById('tt');
  tt.style.left = Math.min(e.clientX + 14, window.innerWidth - 255) + 'px';
  tt.style.top = (e.clientY - 6) + 'px';
}

function selOSIRow(i) {
  const rows = document.querySelectorAll('.osi-row');
  const detail = document.getElementById('osi-detail');
  if (selOSI === i) {
    rows[i].classList.remove('sel');
    detail.classList.remove('show');
    selOSI = null; return;
  }
  rows.forEach(r => r.classList.remove('sel'));
  rows[i].classList.add('sel');
  const l = OSI[i];
  detail.innerHTML = `<strong style="color:${l.color}">第${l.num}層 — ${l.name}</strong><br><br>${l.detail}`;
  detail.classList.add('show');
  selOSI = i;
  addXP(3);
}

/* ============================================================
   INIT
   ============================================================ */
// tab() is defined further below after TERMS


/* ============================================================
   TERM POPUP LOGIC
   ============================================================ */
let activeTerm = null;

function openTerm(key, el) {
  const t = TERMS[key]; if (!t) return;
  if (activeTerm) activeTerm.classList.remove('active');
  activeTerm = el;
  el.classList.add('active');

  document.getElementById('tp-word').textContent = t.w;
  document.getElementById('tp-body').innerHTML = t.b;

  const popup = document.getElementById('term-popup');
  popup.classList.add('show');

  // position:fixed — coords are relative to viewport, no scrollY needed
  const rect = el.getBoundingClientRect();
  const pw = 284;
  let left = Math.min(rect.left, window.innerWidth - pw - 8);
  if (left < 8) left = 8;
  let top = rect.bottom + 6;
  // if too close to bottom, show above
  if (top + 160 > window.innerHeight) top = rect.top - 160;
  popup.style.left = left + 'px';
  popup.style.top  = top + 'px';
  popup.style.width = pw + 'px';
}

function closeTerm() {
  document.getElementById('term-popup').classList.remove('show');
  if (activeTerm) { activeTerm.classList.remove('active'); activeTerm = null; }
}

// Single event delegation — handles term clicks and outside-close
document.addEventListener('click', e => {
  const termEl = e.target.closest('.term');
  const popup  = document.getElementById('term-popup');
  if (termEl) {
    openTerm(termEl.dataset.term, termEl);
  } else if (!popup.contains(e.target)) {
    closeTerm();
  }
});

// Wire terms after article render — integrated into renderArticle
function renderArticle(sections, bodyId) {
  const body = document.getElementById(bodyId);
  if (body.innerHTML) return;
  body.innerHTML = sections.map(s => `
    <div class="a-section" id="${s.id}">
      <div class="a-h2"><span class="a-icon">${s.icon}</span>${s.title}</div>
      <div class="a-lead">${s.lead}</div>
      ${s.html}
    </div>
  `).join('');
}

function tab(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('sec-' + id).classList.add('active');
  document.querySelectorAll('.nav-tab')[TABS.indexOf(id)].classList.add('active');
  if (id === 'netread') renderArticle(NET_READ, 'body-netread');
  if (id === 'devread') renderArticle(DEV_READ, 'body-devread');
  if (id === 'awsread') renderArticle(AWS_READ, 'body-awsread');
  if (id === 'quiz') initQuiz();
  if (id === 'diagram') initDiagram();
  window.scrollTo(0, 0);
}

// Initial quiz render
initQuiz();
