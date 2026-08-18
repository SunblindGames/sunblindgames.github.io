(() => {
  const prefersReduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const coarse = matchMedia('(pointer: coarse)').matches;
  window.initDeckExperience = config => {
    const root = document.querySelector('[data-deck-experience]');
    if (!root) return;
    const stage = root.querySelector('.experience-stage');
    const slides = [...stage.querySelectorAll('.experience-slide')];
    const paged = root.classList.contains('deck-fkc');
    if (paged) root.classList.add('is-paged');
    root.querySelectorAll('.parallax[data-depth]').forEach(layer => { const depth = Number(layer.dataset.depth); if (Number.isFinite(depth)) layer.style.setProperty('--depth', String(depth)); });
    const previous = root.querySelector('[data-previous]');
    const next = root.querySelector('[data-next]');
    const progress = root.querySelector('.experience-progress');
    const live = root.querySelector('.experience-status');
    const fullscreen = root.querySelector('[data-fullscreen]');
    const hasExplicitHash = /^#\d+$/.test(location.hash);
    let current = Math.min(slides.length, Math.max(1, Number(location.hash.slice(1)) || 1));
    const setHash = n => history.replaceState(null, '', `#${n}`);
    const update = n => {
      current = Math.min(slides.length, Math.max(1, n));
      slides.forEach((slide, i) => slide.setAttribute('aria-current', String(i + 1 === current)));
      previous.disabled = current === 1;
      next.disabled = current === slides.length;
      [...progress.children].forEach((dot, i) => dot.setAttribute('aria-current', String(i + 1 === current)));
      const counter = root.querySelector('.experience-counter');
      if (counter) counter.textContent = `${current} / ${slides.length}`;
      if (live) live.textContent = `${config.name}, slide ${current} of ${slides.length}`;
      setHash(current);
    };
    const go = (n, focus = false) => {
      const target = Math.min(slides.length, Math.max(1, n));
      if (target === current) return;
      const behavior = prefersReduced || coarse ? 'auto' : 'smooth';
      if (paged) update(target);
      else if (document.fullscreenElement === root) stage.scrollTo({ top: slides[target - 1].offsetTop, behavior });
      else slides[target - 1].scrollIntoView({ behavior, block: 'start' });
      if (!paged) update(target);
      if (focus) slides[target - 1].focus({ preventScroll: true });
    };
    progress.replaceChildren();
    slides.forEach(slide => { slide.tabIndex = 0; });
    const counter = document.createElement('span'); counter.className = 'experience-counter'; counter.setAttribute('aria-hidden', 'true'); progress.append(counter);
    if (!paged) {
      const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting && entry.intersectionRatio >= .55) update(slides.indexOf(entry.target) + 1); }), { root: null, threshold: [.55] });
      slides.forEach(slide => observer.observe(slide));
    }
    previous.addEventListener('click', () => go(current - 1, true)); next.addEventListener('click', () => go(current + 1, true));
    root.addEventListener('keydown', event => {
      if (event.target.closest('a,button,input,textarea,select') && event.target !== stage) return;
      if (['ArrowLeft', 'PageUp'].includes(event.key)) { event.preventDefault(); go(current - 1, true); }
      if (['ArrowRight', 'PageDown', ' '].includes(event.key)) { event.preventDefault(); go(current + 1, true); }
      if (event.key === 'Home') { event.preventDefault(); go(1, true); }
      if (event.key === 'End') { event.preventDefault(); go(slides.length, true); }
    });
    window.addEventListener('hashchange', () => { const n = Number(location.hash.slice(1)); if (n >= 1 && n <= slides.length) go(n); });
    fullscreen?.addEventListener('click', async () => { try { if (document.fullscreenElement) await document.exitFullscreen(); else await root.requestFullscreen(); } catch (error) { if (live) live.textContent = `Fullscreen unavailable: ${error.message || 'browser denied the request'}`; } });
    document.addEventListener('fullscreenchange', () => { const on = document.fullscreenElement === root; root.classList.toggle('fullscreen-on', on); document.body.classList.toggle('deck-is-fullscreen', on); if (fullscreen) { fullscreen.textContent = on ? 'Exit fullscreen' : 'Fullscreen'; fullscreen.setAttribute('aria-pressed', String(on)); } if (on && !paged) requestAnimationFrame(() => stage.scrollTo({ top: slides[current - 1].offsetTop, behavior: 'auto' })); });
    if (!prefersReduced && !coarse) {
      let raf = 0; stage.addEventListener('pointermove', event => { cancelAnimationFrame(raf); raf = requestAnimationFrame(() => { const r = stage.getBoundingClientRect(); const y = ((event.clientY - r.top) / r.height - .5) * -10; root.style.setProperty('--parallax-y', `${y}px`); }); });
      stage.addEventListener('pointerleave', () => root.style.setProperty('--parallax-y', '0px'));
    }
    update(current); if (hasExplicitHash && !paged) slides[current - 1]?.scrollIntoView({ behavior: 'auto', block: 'start' });
  };
})();
