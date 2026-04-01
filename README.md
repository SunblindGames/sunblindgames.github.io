<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>FKC! Fighting Krazy Chickens! | Sunblind Games</title>
  <meta name="description" content="FKC! Fighting Krazy Chickens! — A comedic bullet-heaven action game where enemies are your ammunition. Grab, throw, and cause physics-based chaos. By Sunblind Games.">
  <meta property="og:title" content="FKC! Fighting Krazy Chickens!">
  <meta property="og:description" content="A comedic bullet-heaven where enemies are your ammunition. Grab. Throw. Chaos.">
  <meta property="og:image" content="poster feria.png">
  <meta property="og:type" content="website">
  <meta name="theme-color" content="#D96A30">

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&family=Outfit:wght@300;400;700&display=swap" rel="stylesheet">

  <!-- Styles -->
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- TOP BAR -->
  <nav class="top-bar" id="topBar">
    <img src="logosSunblind.png" alt="Sunblind Games" class="top-bar-logo">
    <span class="top-bar-studio-name">Sunblind Games</span>
  </nav>

  <!-- HERO -->
  <section class="hero" id="hero">
    <div class="feather"></div>
    <div class="feather"></div>
    <div class="feather"></div>
    <div class="feather"></div>

    <h1 class="hero-title">
      <span class="hero-title-fkc">FKC!</span>
      <span class="hero-title-sub">Fighting Krazy Chickens!</span>
    </h1>

    <img src="poster feria.png" alt="FKC! Fighting Krazy Chickens poster" class="hero-poster">

    <div class="hero-scroll-indicator" aria-hidden="true">
      <span>Scroll</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 5v14M19 12l-7 7-7-7"/>
      </svg>
    </div>
  </section>

  <!-- GAMEPLAY VIDEO -->
  <section class="gameplay" id="gameplay">
    <div class="gameplay-inner reveal">
      <div class="gameplay-label">
        <span>&#9654; Gameplay Preview</span>
      </div>
      <div class="video-wrapper">
        <video autoplay muted loop playsinline>
          <source src="gameplay.mp4" type="video/mp4">
          Your browser does not support video playback.
        </video>
      </div>
    </div>
  </section>

  <!-- ABOUT -->
  <section class="about" id="about">
    <div class="about-grid">
      <div class="about-text reveal">
        <h2>Enemies Are Your Ammunition</h2>
        <p>
          <strong>FKC!</strong> is a <strong>comedic bullet-heaven action game</strong> that turns the genre on its head. 
          Forget auto-fire — here you <strong>grab enemies and hurl them</strong> back into the chaos.
        </p>
      </div>
      <div class="about-visual reveal reveal-delay-2">
        <img src="bomba.png" alt="Bomba chicken character — a bomb-shaped chicken with a skull emblem">
      </div>
    </div>
  </section>

  <!-- GAME MODES -->
  <section class="modes" id="modes">
    <div class="section-header reveal">
      <h2>Three Ways to Play</h2>
      <p>Whether you want a solo adventure, cooperative madness, or competitive chaos — FKC! has you covered.</p>
    </div>

    <div class="modes-grid">
      <div class="mode-card reveal reveal-delay-1">
        <div class="mode-icon">⚔️</div>
        <h3>Adventure</h3>
      </div>

      <div class="mode-card reveal reveal-delay-2">
        <div class="mode-icon">🤝</div>
        <h3>Co-op</h3>
      </div>

      <div class="mode-card reveal reveal-delay-3">
        <div class="mode-icon">👑</div>
        <h3>King of the Ring</h3>
      </div>
    </div>
  </section>

  <!-- GALLERY -->
  <section class="gallery" id="gallery">
    <div class="section-header reveal">
      <h2>Meet the Chickens</h2>
    </div>

    <div class="gallery-grid">
      <div class="gallery-item reveal">
        <img src="big_characterSheet.png" alt="Big Chicken character sheet">
      </div>

      <div class="gallery-item reveal reveal-delay-1">
        <img src="fast_characterSheet.png" alt="Fast Chicken character sheet">
      </div>

      <div class="gallery-item reveal reveal-delay-2">
        <img src="bomba_character_sheet.png" alt="Bomba Chicken character sheet">
      </div>

      <div class="gallery-item reveal reveal-delay-3">
        <img src="bomba_draft.png" alt="Bomba Chicken concept art">
      </div>

      <div class="gallery-item reveal reveal-delay-4">
        <img src="poster feria.png" alt="FKC! official poster artwork">
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="cta reveal">
    <div class="cta-card">
      <h2>Hope you are excited!</h2>
      <p>FKC! is currently in development. Stay tuned for the playable demo and release date.</p>
    </div>
  </section>

  <!-- CONTACT -->
  <section class="contact" id="contact">
    <h2>Contact Us</h2>
    <p>We're an indie studio based in Madrid, Spain. Got questions, feedback, or press inquiries?</p>
    <a href="mailto:contact@sunblindgames.com" class="contact-email">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
      contact@sunblindgames.com
    </a>
  </section>

  <!-- FOOTER -->
  <footer class="site-footer">
    <img src="logosSunblind.png" alt="Sunblind Games" class="site-footer-logo">
    <p>&copy; 2026 Sunblind Games · Madrid, Spain</p>
    <p>Made with 🐔 and a lot of chaos</p>
  </footer>

  <!-- SCRIPTS -->
  <script>
    // Scroll Reveal
    (function() {
      const reveals = document.querySelectorAll('.reveal');
      if (!reveals.length) return;
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
      reveals.forEach(el => observer.observe(el));
    })();

    // Top bar: hide on scroll down, show on scroll up
    (function() {
      const topBar = document.getElementById('topBar');
      let lastScroll = 0;
      let ticking = false;
      window.addEventListener('scroll', () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            const currentScroll = window.pageYOffset;
            if (currentScroll <= 80) {
              topBar.classList.remove('hidden');
            } else if (currentScroll > lastScroll) {
              topBar.classList.add('hidden');
            } else {
              topBar.classList.remove('hidden');
            }
            lastScroll = currentScroll;
            ticking = false;
          });
          ticking = true;
        }
      });
    })();
  </script>

</body>
</html>