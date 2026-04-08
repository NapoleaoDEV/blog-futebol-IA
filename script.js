/* ══════════════════════════════════════
   FUTEBOL BR — Brasileirão 2026
   main.js
   ══════════════════════════════════════ */

'use strict';

/* ══ DATA ══════════════════════════════════════════════════════════════ */

const times = [
  { pos:1,  zona:'libertadores', nome:'Palmeiras',     flag:'🟢⚪', pj:8, v:6, e:1, d:1, gp:17, gc:6,  sg:+11, pts:19, forma:['V','V','V','E','V'] },
  { pos:2,  zona:'libertadores', nome:'São Paulo',     flag:'🔴⚫', pj:8, v:5, e:1, d:2, gp:14, gc:8,  sg:+6,  pts:16, forma:['V','D','V','V','D'] },
  { pos:3,  zona:'libertadores', nome:'Fluminense',   flag:'⚪🔴', pj:8, v:5, e:1, d:2, gp:12, gc:7,  sg:+5,  pts:16, forma:['V','V','D','V','E'] },
  { pos:4,  zona:'libertadores', nome:'Flamengo',     flag:'🔴⚫', pj:7, v:4, e:2, d:1, gp:12, gc:5,  sg:+7,  pts:14, forma:['V','E','V','D','V'] },
  { pos:5,  zona:'sulamericana', nome:'Bahia',        flag:'🔵🔴', pj:8, v:4, e:1, d:3, gp:12, gc:11, sg:+1,  pts:13, forma:['D','V','V','E','D'] },
  { pos:6,  zona:'sulamericana', nome:'Athletico-PR', flag:'🔴⚫', pj:7, v:4, e:1, d:2, gp:10, gc:7,  sg:+3,  pts:13, forma:['V','V','D','V','E'] },
  { pos:7,  zona:'sulamericana', nome:'Coritiba',     flag:'⚪⚫', pj:8, v:4, e:1, d:3, gp:9,  gc:8,  sg:+1,  pts:13, forma:['D','V','V','D','V'] },
  { pos:8,  zona:'sulamericana', nome:'Grêmio',       flag:'🔵⚫', pj:8, v:3, e:2, d:3, gp:13, gc:12, sg:+1,  pts:11, forma:['E','V','D','V','D'] },
  { pos:9,  zona:'meio',        nome:'Vasco',         flag:'⚪⚫', pj:8, v:3, e:2, d:3, gp:13, gc:13, sg:0,   pts:11, forma:['V','D','E','V','V'] },
  { pos:10, zona:'meio',        nome:'Vitória',       flag:'🔴⚫', pj:7, v:3, e:1, d:3, gp:8,  gc:10, sg:-2,  pts:10, forma:['V','D','V','D','V'] },
  { pos:11, zona:'meio',        nome:'Corinthians',   flag:'⚪⚫', pj:8, v:2, e:4, d:2, gp:7,  gc:7,  sg:0,   pts:10, forma:['E','V','E','D','E'] },
  { pos:12, zona:'meio',        nome:'Internacional', flag:'🔴⚫', pj:8, v:2, e:2, d:4, gp:7,  gc:9,  sg:-2,  pts:8,  forma:['V','D','D','V','D'] },
  { pos:13, zona:'meio',        nome:'Atlético-MG',   flag:'⚫⚪', pj:8, v:2, e:2, d:4, gp:8,  gc:11, sg:-3,  pts:8,  forma:['D','D','V','E','D'] },
  { pos:14, zona:'meio',        nome:'RB Bragantino', flag:'⚪🔴', pj:8, v:2, e:2, d:4, gp:6,  gc:10, sg:-4,  pts:8,  forma:['D','V','D','E','D'] },
  { pos:15, zona:'meio',        nome:'Chapecoense',   flag:'🟢⚪', pj:7, v:1, e:4, d:2, gp:9,  gc:11, sg:-2,  pts:7,  forma:['E','D','E','V','E'] },
  { pos:16, zona:'meio',        nome:'Santos',        flag:'⚫⚪', pj:8, v:1, e:4, d:3, gp:10, gc:13, sg:-3,  pts:7,  forma:['D','E','V','E','D'] },
  { pos:17, zona:'rebaixamento',nome:'Botafogo',      flag:'⚫⚪', pj:6, v:2, e:0, d:4, gp:10, gc:12, sg:-2,  pts:6,  forma:['D','V','D','D','V'] },
  { pos:18, zona:'rebaixamento',nome:'Mirassol',      flag:'🟡⚫', pj:7, v:1, e:3, d:3, gp:8,  gc:10, sg:-2,  pts:6,  forma:['E','D','E','V','D'] },
  { pos:19, zona:'rebaixamento',nome:'Remo',          flag:'🔵⚪', pj:8, v:1, e:3, d:4, gp:10, gc:15, sg:-5,  pts:6,  forma:['D','E','D','V','D'] },
  { pos:20, zona:'rebaixamento',nome:'Cruzeiro',      flag:'🔵⚪', pj:8, v:0, e:4, d:4, gp:8,  gc:16, sg:-8,  pts:4,  forma:['E','D','D','E','D'] },
];

const artilheiros = [
  { rank:1, flag:'🇧🇷', nome:'Carlos Vinícius', clube:'Grêmio',         gols:6, max:6 },
  { rank:2, flag:'🇧🇷', nome:'Danilo',           clube:'Botafogo',       gols:5, max:6 },
  { rank:3, flag:'🇦🇷', nome:'J. Calleri',       clube:'São Paulo',      gols:4, max:6 },
  { rank:4, flag:'🇧🇷', nome:'Neymar Jr.',        clube:'Santos',         gols:3, max:6 },
  { rank:4, flag:'🇧🇷', nome:'Gabriel Barbosa',   clube:'Flamengo',      gols:3, max:6 },
  { rank:4, flag:'🇧🇷', nome:'Vitor Roque',       clube:'Palmeiras',     gols:3, max:6 },
  { rank:4, flag:'🇨🇴', nome:'Jhon Arias',        clube:'Palmeiras',     gols:2, max:6 },
];

/* ══ TABLE STATE ════════════════════════════════════════════════════════ */

let currentZone   = 'todos';
let currentSearch = '';
let sortCol       = null;
let sortDir       = 1;          // 1 = asc, -1 = desc

/* helper: CSS class based on zone */
function posClass(zona) {
  if (zona === 'libertadores') return 'lib';
  if (zona === 'sulamericana') return 'sul';
  if (zona === 'rebaixamento') return 'rel';
  return '';
}

/* ══ RENDER TABLE ════════════════════════════════════════════════════════ */

function renderTable(data) {
  const tbody   = document.getElementById('tabela-body');
  const noRes   = document.getElementById('no-results');
  let html      = '';
  let lastZona  = null;

  data.forEach(t => {
    const matchZone   = currentZone === 'todos' || t.zona === currentZone;
    const matchSearch = t.nome.toLowerCase().includes(currentSearch.toLowerCase());
    if (!matchZone || !matchSearch) return;

    /* zone separator — only when NOT sorting */
    if (t.zona !== lastZona && sortCol === null) {
      const labels = {
        libertadores: '🟢 Zona Libertadores (1–4)',
        sulamericana: '🔵 Zona Sul-Americana (5–8)',
        rebaixamento: '🔴 Zona de Rebaixamento (17–20)',
        meio:         '— Meio da tabela',
      };
      const classes = {
        libertadores: 'sep-lib',
        sulamericana: 'sep-sul',
        rebaixamento: 'sep-rel',
        meio:         'sep-mid',
      };
      html += `<tr class="sep-row"><td colspan="11" class="${classes[t.zona]}">${labels[t.zona]}</td></tr>`;
      lastZona = t.zona;
    }

    const pc      = posClass(t.zona);
    const sgClass = t.sg > 0 ? 'sg-pos' : t.sg < 0 ? 'sg-neg' : '';
    const sgText  = t.sg > 0 ? `+${t.sg}` : `${t.sg}`;
    const forma   = t.forma.map(f => `<div class="f ${f.toLowerCase()}">${f}</div>`).join('');

    html += `
      <tr data-zone="${t.zona}" data-nome="${t.nome.toLowerCase()}">
        <td class="pos ${pc}">${t.pos}</td>
        <td class="t-nome">${t.flag} ${t.nome}</td>
        <td>${t.pj}</td>
        <td>${t.v}</td>
        <td>${t.e}</td>
        <td>${t.d}</td>
        <td>${t.gp}</td>
        <td>${t.gc}</td>
        <td class="${sgClass}">${sgText}</td>
        <td class="pts-cell">${t.pts}</td>
        <td><div class="form">${forma}</div></td>
      </tr>`;
  });

  tbody.innerHTML = html;
  noRes.style.display = tbody.innerHTML.trim() === '' ? 'block' : 'none';
}

/* ══ SORTABLE COLUMNS ════════════════════════════════════════════════════ */

function initSortableColumns() {
  document.querySelectorAll('thead th[data-col]').forEach(th => {
    th.addEventListener('click', () => {
      const col = th.dataset.col;

      if (sortCol === col) {
        sortDir *= -1;
      } else {
        document.querySelectorAll('thead th').forEach(x => {
          x.classList.remove('sort-asc', 'sort-desc');
        });
        sortCol = col;
        sortDir = -1;           // default: highest first
      }

      th.classList.toggle('sort-asc',  sortDir ===  1);
      th.classList.toggle('sort-desc', sortDir === -1);

      const sorted = [...times].sort((a, b) => (b[col] - a[col]) * sortDir);
      renderTable(sorted);
    });
  });
}

/* ══ SEARCH ══════════════════════════════════════════════════════════════ */

function initSearch() {
  document.getElementById('search-input').addEventListener('input', e => {
    currentSearch = e.target.value;
    renderTable(times);
  });
}

/* ══ ZONE FILTERS ════════════════════════════════════════════════════════ */

function initZoneFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentZone = btn.dataset.zone;
      renderTable(times);
    });
  });
}

/* ══ RESULTADO TABS ══════════════════════════════════════════════════════ */

function initResultTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      document.querySelectorAll('.jogo-card').forEach(card => {
        card.style.display = (filter === 'todos' || card.dataset.tipo === filter)
          ? 'grid'
          : 'none';
      });
    });
  });
}

/* ══ RENDER ARTILHEIROS ══════════════════════════════════════════════════ */

function rankClass(rank) {
  if (rank === 1) return 'gold';
  if (rank === 2) return 'silver';
  if (rank === 3) return 'bronze';
  return '';
}

function renderArtilheiros() {
  const grid = document.getElementById('art-grid');
  grid.innerHTML = artilheiros.map(a => `
    <div class="art-row">
      <div class="art-rank ${rankClass(a.rank)}">${a.rank}º</div>
      <div class="art-flag">${a.flag}</div>
      <div class="art-info">
        <div class="art-name">${a.nome}</div>
        <div class="art-club">${a.clube}</div>
      </div>
      <div class="art-bar-wrap">
        <div class="art-bar">
          <div class="art-bar-fill" data-pct="${((a.gols / a.max) * 100).toFixed(0)}"></div>
        </div>
      </div>
      <div>
        <div class="art-gols">${a.gols}</div>
        <div class="art-label">GOLS</div>
      </div>
    </div>
  `).join('');
}

/* ══ COUNTER ANIMATION ════════════════════════════════════════════════════ */

function animateCount(el) {
  const target = +el.dataset.count;
  const suffix = el.dataset.suffix || '';
  const dur    = 900;
  const start  = performance.now();

  function step(now) {
    const progress = Math.min((now - start) / dur, 1);
    const eased    = 1 - Math.pow(1 - progress, 3);   // cubic ease-out
    el.textContent = Math.round(eased * target) + suffix;
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

/* ══ SCROLL REVEAL + BAR ANIMATIONS ══════════════════════════════════════ */

function initScrollReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add('visible');

      /* animate artilheiro bars */
      entry.target.querySelectorAll('.art-bar-fill').forEach(bar => {
        bar.style.width = bar.dataset.pct + '%';
      });

      /* animate stat counters */
      entry.target.querySelectorAll('.stat-n[data-count]').forEach(el => {
        animateCount(el);
      });
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal, .stats-bar').forEach(el => observer.observe(el));
}

/* ══ LIVE CLOCK ══════════════════════════════════════════════════════════ */

function updateClock() {
  const now   = new Date();
  const short = now.toLocaleTimeString('pt-BR', { hour:'2-digit', minute:'2-digit' });
  const full  = now.toLocaleTimeString('pt-BR');

  const navClock    = document.getElementById('clock-nav');
  const footerClock = document.getElementById('clock-footer');

  if (navClock)    navClock.textContent    = short;
  if (footerClock) footerClock.textContent = full;
}

/* ══ COUNTDOWN ════════════════════════════════════════════════════════════
   Target: Athletico-PR × Botafogo  •  30/03/2026  16:00 BRT            */

function updateCountdown() {
  const target = new Date('2026-03-30T16:00:00-03:00');
  const diff   = target - new Date();
  const wrap   = document.getElementById('countdown');

  if (diff <= 0) {
    if (wrap) wrap.style.display = 'none';
    return;
  }

  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000)  / 60000);
  const s = Math.floor((diff % 60000)    / 1000);

  document.getElementById('cd-d').textContent = String(d).padStart(2, '0');
  document.getElementById('cd-h').textContent = String(h).padStart(2, '0');
  document.getElementById('cd-m').textContent = String(m).padStart(2, '0');
  document.getElementById('cd-s').textContent = String(s).padStart(2, '0');
}

/* ══ SCROLL EVENTS (progress bar + nav shrink + active links) ════════════ */

function initScrollEvents() {
  window.addEventListener('scroll', () => {
    const root = document.documentElement;
    const pct  = (root.scrollTop / (root.scrollHeight - root.clientHeight)) * 100;

    /* progress bar */
    document.getElementById('progress-bar').style.width = pct + '%';

    /* nav compact */
    document.getElementById('main-nav').classList.toggle('scrolled', root.scrollTop > 60);

    /* back-to-top button */
    document.getElementById('back-top').classList.toggle('visible', root.scrollTop > 400);

    /* active nav links */
    const sections = ['resultados', 'tabela', 'artilheiros', 'noticias'];
    let active = '';
    sections.forEach(id => {
      const sec = document.getElementById(id);
      if (sec && sec.getBoundingClientRect().top <= 120) active = id;
    });
    document.querySelectorAll('.nav-link').forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + active);
    });
  });
}

/* ══ CUSTOM CURSOR ════════════════════════════════════════════════════════ */

function initCursor() {
  const cur = document.getElementById('cursor');
  if (!cur) return;

  document.addEventListener('mousemove', e => {
    cur.style.left = e.clientX + 'px';
    cur.style.top  = e.clientY + 'px';
  });
  document.addEventListener('mousedown', () => cur.classList.add('click'));
  document.addEventListener('mouseup',   () => cur.classList.remove('click'));
}

/* ══ BACK TO TOP ══════════════════════════════════════════════════════════ */

function initBackToTop() {
  const btn = document.getElementById('back-top');
  if (btn) btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ══ LOGO CLICK ══════════════════════════════════════════════════════════ */

function initLogoClick() {
  const logo = document.querySelector('.logo');
  if (logo) logo.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ══ INIT ══════════════════════════════════════════════════════════════════
   Entry point — runs after DOM is ready                                    */

document.addEventListener('DOMContentLoaded', () => {
  /* Table */
  renderTable(times);
  initSortableColumns();
  initSearch();
  initZoneFilters();

  /* Resultados */
  initResultTabs();

  /* Artilheiros */
  renderArtilheiros();

  /* Animations & observers */
  initScrollReveal();

  /* Clock (update every second) */
  updateClock();
  setInterval(updateClock, 1000);

  /* Countdown (update every second) */
  updateCountdown();
  setInterval(updateCountdown, 1000);

  /* Scroll-based effects */
  initScrollEvents();

  /* UX extras */
  initCursor();
  initBackToTop();
  initLogoClick();
});