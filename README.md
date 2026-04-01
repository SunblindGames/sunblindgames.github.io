<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>FKC: Fighting Krazy Chickens! | Sunblind Games</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&family=Outfit:wght@300;700&display=swap" rel="stylesheet">
<style>
:root{--primary:#FFCC00;--accent:#FF4D4D;--dark:#0F0F0F;--card-bg:#1A1A1A;--text:#FFFFFF;}
*{box-sizing:border-box;margin:0;padding:0;}
body{background-color:var(--dark);color:var(--text);font-family:'Outfit',sans-serif;line-height:1.6;overflow-x:hidden;}
body::before{content:"";position:fixed;top:0;left:0;width:100%;height:100%;background:radial-gradient(circle at 50% 50%,#222 0%,#0f0f0f 100%);z-index:-1;}
header{text-align:center;padding:60px 20px;}
.chicken-icon{font-size:5rem;display:inline-block;animation:float 3s ease-in-out infinite;filter:drop-shadow(0 10px 20px rgba(255,204,0,0.4));}
h1{font-family:'Luckiest Guy',cursive;font-size:clamp(2.5rem,8vw,4.5rem);color:var(--primary);text-transform:uppercase;letter-spacing:2px;text-shadow:5px 5px 0px var(--accent);margin-top:10px;}
.studio-badge{display:inline-block;background:var(--accent);padding:5px 15px;border-radius:50px;font-weight:700;font-size:0.8rem;letter-spacing:2px;margin-top:10px;}
.hero{max-width:1100px;margin:0 auto 80px;padding:0 20px;}
.video-container{position:relative;border:8px solid #fff;border-radius:30px;overflow:hidden;box-shadow:0 30px 60px rgba(0,0,0,0.8);background:#000;aspect-ratio:16/9;}
video{width:100%;height:100%;object-fit:cover;}
.container{max-width:900px;margin:0 auto;padding:0 20px;}
.pitch-box{background:var(--card-bg);padding:40px;border-radius:25px;border-bottom:6px solid var(--primary);margin-bottom:60px;font-size:1.25rem;text-align:center;}
.pitch-box strong{color:var(--primary);font-weight:700;}
.features{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:25px;}
.feat-card{background:rgba(255,255,255,0.03);padding:30px;border-radius:20px;border:1px solid rgba(255,255,255,0.1);transition:all 0.3s ease;text-align:center;}
.feat-card:hover{transform:translateY(-10px);background:rgba(255,77,77,0.1);border-color:var(--accent);}
.feat-card h3{font-family:'Luckiest Guy',cursive;color:var(--primary);margin-bottom:15px;font-size:1.6rem;}
.event-cta{background:var(--primary);color:var(--dark);padding:60px 40px;border-radius:30px;text-align:center;margin:80px 0;}
.event-cta h2{font-family:'Luckiest Guy',cursive;font-size:2.5rem;margin-bottom:10px;}
.btn{display:inline-block;background:var(--dark);color:#fff;padding:20px 40px;border-radius:50px;text-decoration:none;font-weight:700;text-transform:uppercase;margin-top:30px;transition:0.3s;box-shadow:0 10px 20px rgba(0,0,0,0.2);}
.btn:hover{background:var(--accent);transform:scale(1.05);}
footer{padding:60px 20px;text-align:center;opacity:0.5;font-size:0.9rem;border-top:1px solid rgba(255,255,255,0.1);}
@keyframes float{0%,100%{transform:translateY(0) rotate(0deg);}50%{transform:translateY(-20px) rotate(5deg);}}
@media (max-width:600px){h1{font-size:2.5rem;}.pitch-box{padding:25px;font-size:1.1rem;}}
</style>
</head>
<body>
<header>
<div class="chicken-icon">🐔</div>
<div class="studio-badge">SUNBLIND GAMES PRESENTS</div>
<h1>Fighting Krazy Chickens!</h1>
</header>
<section class="hero">
<div class="video-container">
<video autoplay muted loop playsinline>
<source src="gameplay.mp4" type="video/mp4">
Tu navegador no soporta video.
</video>
</div>
</section>
<main class="container">
<div class="pitch-box">
Hi! We're <strong>Sunblind Games</strong>, a Madrid-based studio.<br><br>
<strong>FKC</strong> is a comedic, bullet-heaven action game where <strong>enemies are your ammunition</strong>. 
We swap standard auto-fire for physics-based chaos and hilarious upgrades.
</div>
<div class="features">
<div class="feat-card">
<h3>Grab & Throw</h3>
<p>Pick up enemies and hurl them back as weapons. Physics-based destruction at its best.</p>
</div>
<div class="feat-card">
<h3>Bullet-Heaven</h3>
<p>Survive dense waves of enemies with a comedic twist and addictive gameplay loops.</p>
</div>
<div class="feat-card">
<h3>Playable Demo</h3>
<p>We are currently in mid-development with a demo ready for you to test.</p>
</div>
</div>
<section class="event-cta">
<h2>See you at MAD Games Show?</h2>
<p>We'd love to connect and show you the chaos in person.</p>
<a href="#" class="btn">View Teaser & Press Kit</a>
</section>
</main>
<footer>
&copy; 2026 Sunblind Games | Madrid, Spain <br>
Built for <strong>Fighting Krazy Chickens!</strong> 🥚
</footer>
</body>
</html>