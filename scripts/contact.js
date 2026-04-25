mountHeader('contact');
mountFooter();

// Copy buttons
document.querySelectorAll('[data-copy]').forEach(btn => {
  btn.addEventListener('click', () => {
    navigator.clipboard.writeText(btn.dataset.copy).then(() => {
      const orig = btn.textContent;
      btn.textContent = PORTFOLIO_STATE.lang === 'fr' ? 'COPIÉ ✓' : 'COPIED ✓';
      btn.classList.add('copied');
      setTimeout(() => {
        btn.textContent = PORTFOLIO_STATE.lang === 'fr' ? 'COPIER' : 'COPY';
        btn.classList.remove('copied');
      }, 1500);
    });
  });
});
