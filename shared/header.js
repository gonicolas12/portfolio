// Shared header (sysbar + mainnav + scroll progress + corner marks + kb overlay)
// Usage: <div id="header-mount" data-page="home"></div> then call mountHeader()
window.mountHeader = function(currentPage) {
  const mount = document.getElementById('header-mount');
  if (!mount) return;
  const pages = [
    { id: 'home', href: 'index.html', labelFr: 'ACCUEIL', labelEn: 'HOME', idx: '01' },
    { id: 'about', href: 'about.html', labelFr: 'À PROPOS', labelEn: 'ABOUT', idx: '02' },
    { id: 'work', href: 'work.html', labelFr: 'TRAVAIL', labelEn: 'WORK', idx: '03' },
    { id: 'contact', href: 'contact.html', labelFr: 'CONTACT', labelEn: 'CONTACT', idx: '04' }
  ];
  mount.innerHTML = `
    <div class="sysbar">
      <div class="sysbar-l">
        <span class="mark">◼</span>
        <span>N.GOUY</span>
        <span class="sep">/</span>
        <span data-fr="PORTFOLIO · 2026" data-en="PORTFOLIO · 2026">PORTFOLIO · 2026</span>
        <span class="sep">/</span>
        <span id="clock"></span>
      </div>
      <div class="sysbar-r">
        <button class="btn-lang ${PORTFOLIO_STATE.lang==='fr'?'active':''}" data-l="fr" onclick="setLang('fr')">FR</button>
        <span class="sep">·</span>
        <button class="btn-lang ${PORTFOLIO_STATE.lang==='en'?'active':''}" data-l="en" onclick="setLang('en')">EN</button>
        <span class="sep">|</span>
        <button class="btn-mode ${PORTFOLIO_STATE.mode==='rec'?'active':''}" data-m="rec" onclick="setMode('rec')">RECRUITER</button>
        <span class="sep">·</span>
        <button class="btn-mode ${PORTFOLIO_STATE.mode==='dev'?'active':''}" data-m="dev" onclick="setMode('dev')">DEV</button>
      </div>
    </div>
    <div class="scroll-progress" id="scroll-progress"></div>
    <nav class="mainnav">
      ${pages.map(p => `<a href="${p.href}" class="${p.id===currentPage?'active':''}"><span class="idx">${p.idx}</span><span data-fr="${p.labelFr}" data-en="${p.labelEn}">${p.labelFr}</span></a>`).join('')}
      <div class="spacer"></div>
      <div class="kb" id="kb-open">? SHORTCUTS</div>
    </nav>
    <div class="corner-marks">
      <div class="m tl"></div><div class="m tr"></div><div class="m bl"></div><div class="m br"></div>
    </div>
    <div class="kb-overlay" id="kb-overlay">
      <div class="kb-box">
        <h3>KEYBOARD <span>SHORTCUTS</span></h3>
        <div class="row"><span>Go to HOME</span><span><kbd>G</kbd> then <kbd>H</kbd></span></div>
        <div class="row"><span>Go to ABOUT</span><span><kbd>G</kbd> then <kbd>A</kbd></span></div>
        <div class="row"><span>Go to WORK</span><span><kbd>G</kbd> then <kbd>W</kbd></span></div>
        <div class="row"><span>Go to CONTACT</span><span><kbd>G</kbd> then <kbd>C</kbd></span></div>
        <div class="row"><span>Toggle language</span><span><kbd>L</kbd></span></div>
        <div class="row"><span>Toggle mode</span><span><kbd>M</kbd></span></div>
        <div class="row"><span>Open GitHub</span><span><kbd>Shift</kbd>+<kbd>G</kbd></span></div>
        <div class="row"><span>Email me</span><span><kbd>E</kbd></span></div>
        <div class="row"><span>Show shortcuts</span><span><kbd>?</kbd></span></div>
        <div class="row"><span>Secret</span><span><kbd>↑↑↓↓←→←→BA</kbd></span></div>
        <div class="close" onclick="document.getElementById('kb-overlay').classList.remove('open')">— press ESC or click to close —</div>
      </div>
    </div>
    <div class="konami-overlay" id="konami-overlay">
      <h1>NICOLAS<br/>MODE</h1>
      <p>◼ YOU FOUND THE EASTER EGG ◼</p>
      <p class="close-hint">PRESS ANY KEY TO CLOSE</p>
    </div>
  `;

  // Clock
  const clock = document.getElementById('clock');
  const frTimeFormatter = new Intl.DateTimeFormat('fr-FR', {
    timeZone: 'Europe/Paris',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
  const tick = () => {
    clock.textContent = `FR ${frTimeFormatter.format(new Date())}`;
  };
  tick(); setInterval(tick, 1000);

  // Apply initial state
  document.body.classList.add('mode-' + PORTFOLIO_STATE.mode);
  setLang(PORTFOLIO_STATE.lang);

  // Scroll progress
  const prog = document.getElementById('scroll-progress');
  window.addEventListener('scroll', () => {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    prog.style.width = (window.scrollY / h * 100) + '%';
  });

  // Shortcuts
  const kbOverlay = document.getElementById('kb-overlay');
  document.getElementById('kb-open').addEventListener('click', () => kbOverlay.classList.add('open'));
  kbOverlay.addEventListener('click', (e) => {
    if (e.target === kbOverlay) kbOverlay.classList.remove('open');
  });

  let gPressed = false;
  let gTimeout = null;
  const konami = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
  let konamiIdx = 0;

  document.addEventListener('keydown', (e) => {
    const konamiOverlay = document.getElementById('konami-overlay');
    if (konamiOverlay.classList.contains('open')) {
      konamiOverlay.classList.remove('open');
      return;
    }
    if (e.key === 'Escape') { kbOverlay.classList.remove('open'); return; }
    if (document.activeElement && ['INPUT','TEXTAREA'].includes(document.activeElement.tagName)) return;

    // Konami
    if (e.key === konami[konamiIdx] || e.key.toLowerCase() === konami[konamiIdx]) {
      konamiIdx++;
      if (konamiIdx === konami.length) {
        konamiOverlay.classList.add('open');
        konamiIdx = 0;
      }
    } else {
      konamiIdx = (e.key === konami[0]) ? 1 : 0;
    }

    if (e.key === '?') kbOverlay.classList.toggle('open');
    if (e.key === 'l' || e.key === 'L') setLang(PORTFOLIO_STATE.lang === 'fr' ? 'en' : 'fr');
    if (e.key === 'm' || e.key === 'M') setMode(PORTFOLIO_STATE.mode === 'rec' ? 'dev' : 'rec');
    if (e.key === 'E') window.location.href = 'mailto:' + PORTFOLIO.email;
    if (e.key === 'G' && e.shiftKey) window.open(PORTFOLIO.githubUrl, '_blank');

    if (gPressed) {
      if (e.key === 'h') location.href = 'index.html';
      if (e.key === 'a') location.href = 'about.html';
      if (e.key === 'w') location.href = 'work.html';
      if (e.key === 'c') location.href = 'contact.html';
      gPressed = false;
    } else if (e.key === 'g' && !e.shiftKey) {
      gPressed = true;
      clearTimeout(gTimeout);
      gTimeout = setTimeout(() => gPressed = false, 1200);
    }
  });

  // Reveal observer
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('in');
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal, .slide-x').forEach(el => io.observe(el));
};

window.mountFooter = function() {
  const mount = document.getElementById('footer-mount');
  if (!mount) return;
  mount.innerHTML = `
    <footer class="foot">
      <span>◼ NICOLAS GOUY · ${new Date().getFullYear()}</span>
      <span data-fr="CONSTRUIT AVEC ATTENTION · TOULOUSE" data-en="BUILT WITH CARE · TOULOUSE">CONSTRUIT AVEC ATTENTION · TOULOUSE</span>
      <span><a class="link" href="${PORTFOLIO.githubUrl}" target="_blank">GITHUB ↗</a> · <a class="link" href="${PORTFOLIO.linkedinUrl}" target="_blank">LINKEDIN ↗</a></span>
    </footer>
  `;
  setLang(PORTFOLIO_STATE.lang);
};

// Additional style for active buttons
const style = document.createElement('style');
style.textContent = `
.sysbar button.active { color: var(--accent) !important; border-bottom: 1px solid var(--accent); }
`;
document.head.appendChild(style);
