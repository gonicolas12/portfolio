mountHeader('about');
mountFooter();

// Timeline reveal: when timeline enters viewport, draw the line + stagger items
const tl = document.getElementById('timeline');
const items = tl.querySelectorAll('.tl-item');
const tlIO = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      tl.classList.add('drawn');
      items.forEach((it, i) => {
        setTimeout(() => it.classList.add('in'), 200 + i * 180);
      });
      tlIO.disconnect();
    }
  });
}, { threshold: 0.15 });
tlIO.observe(tl);
