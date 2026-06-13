/* ============================================
   JULIÁN DE ECOZAN · LANDING PAGE
   main.js
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ─── NAV SCROLL ────────────────────────────────
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });

  // ─── REVEAL ON SCROLL ──────────────────────────
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 90);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.07 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

  // ─── ANIMATED COUNTERS ─────────────────────────
  function animateCounter(el) {
    const target = parseInt(el.dataset.target);
    const duration = 1800;
    const start = performance.now();
    const update = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target) + (progress < 1 ? '' : '+');
      if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  }
  const counterObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animateCounter(e.target);
        counterObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.count-up').forEach(el => counterObs.observe(el));

  // ─── CAROUSEL DE REFERENCIAS ───────────────────
  (function () {
    const viewport = document.getElementById('carouselViewport');
    const track = document.getElementById('carouselTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const progressFill = document.getElementById('carouselProgressFill');
    const counterEl = document.getElementById('carouselCounter');

    if (!track || !viewport) return;

    const cards = Array.from(track.querySelectorAll('.carousel-card'));
    if (!cards.length) return;

    let current = 0;
    let autoTimer = null;
    let isPaused = false;
    let isDragging = false;
    let dragStartX = 0;
    let dragDelta = 0;

    const isMobile = () => window.innerWidth <= 768;
    const perView = () => isMobile() ? 1 : 2;
    const totalSlides = () => Math.ceil(cards.length / perView());

    function getCardWidth() {
      return cards[0].getBoundingClientRect().width;
    }

    function updateTrack(animate = true) {
      if (!animate) track.style.transition = 'none';
      else track.style.transition = 'transform 0.65s cubic-bezier(0.25,0.46,0.45,0.94)';
      const offset = current * perView() * (getCardWidth() + 24);
      track.style.transform = `translateX(-${offset}px)`;
      if (!animate) track.offsetHeight; // force reflow
    }

    function updateUI() {
      const total = totalSlides();

      // Progress bar
      if (progressFill) {
        const pct = total <= 1 ? 100 : (current / (total - 1)) * 100;
        progressFill.style.width = pct + '%';
      }

      // Counter
      if (counterEl) {
        counterEl.innerHTML = `<span>${String(current + 1).padStart(2, '0')}</span> / ${String(total).padStart(2, '0')}`;
      }

      // Arrow states
      if (prevBtn) prevBtn.disabled = current === 0;
      if (nextBtn) nextBtn.disabled = current >= total - 1;
    }

    function goTo(index, animate = true) {
      const total = totalSlides();
      current = Math.max(0, Math.min(index, total - 1));
      updateTrack(animate);
      updateUI();
    }

    function startAuto() {
      clearInterval(autoTimer);
      if (!isPaused) {
        autoTimer = setInterval(() => {
          if (!isPaused) {
            const next = current + 1;
            if (next >= totalSlides()) goTo(0);
            else goTo(next);
          }
        }, 6000);
      }
    }

    // Pause on hover
    viewport.addEventListener('mouseenter', () => { isPaused = true; clearInterval(autoTimer); });
    viewport.addEventListener('mouseleave', () => { isPaused = false; startAuto(); });

    // Arrow buttons
    prevBtn && prevBtn.addEventListener('click', () => { goTo(current - 1); startAuto(); });
    nextBtn && nextBtn.addEventListener('click', () => { goTo(current + 1); startAuto(); });

    // Touch / drag
    function onDragStart(x) { isDragging = true; dragStartX = x; dragDelta = 0; track.style.transition = 'none'; }
    function onDragMove(x) {
      if (!isDragging) return;
      dragDelta = x - dragStartX;
      const base = current * perView() * (getCardWidth() + 24);
      track.style.transform = `translateX(${-base + dragDelta}px)`;
    }
    function onDragEnd() {
      if (!isDragging) return;
      isDragging = false;
      if (dragDelta < -60) goTo(current + 1);
      else if (dragDelta > 60) goTo(current - 1);
      else goTo(current);
      startAuto();
    }

    viewport.addEventListener('mousedown', e => { e.preventDefault(); onDragStart(e.clientX); });
    window.addEventListener('mousemove', e => { if (isDragging) onDragMove(e.clientX); });
    window.addEventListener('mouseup', onDragEnd);
    viewport.addEventListener('touchstart', e => onDragStart(e.touches[0].clientX), { passive: true });
    viewport.addEventListener('touchmove', e => onDragMove(e.touches[0].clientX), { passive: true });
    viewport.addEventListener('touchend', onDragEnd);

    // Resize reset
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => { current = 0; updateTrack(false); updateUI(); }, 150);
    });

    // Init
    updateUI();
    startAuto();
  })();

  // ─── VIDEO HERO: autoplay muted ────────────────
  const heroVideo = document.getElementById('heroVideo');
  if (heroVideo) {
    heroVideo.play().catch(() => {
      // Autoplay blocked — video stays paused (poster shown)
    });
  }

});
