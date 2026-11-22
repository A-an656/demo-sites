// Pointer-following light on glass cards.
document.addEventListener('pointermove', e => {
  const el = e.target.closest && e.target.closest('.card, .doc');
  if (!el) return;
  const r = el.getBoundingClientRect();
  el.style.setProperty('--mx', (e.clientX - r.left) + 'px');
  el.style.setProperty('--my', (e.clientY - r.top) + 'px');
}, { passive: true });
