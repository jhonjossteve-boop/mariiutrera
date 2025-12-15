<?php
// index.php - SEO-optimized homepage with working contact form that POSTS to send.php
?><!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">

  <title>Marii Utrera — Exclusive 18+</title>
  <meta name="description" content="Marii Utrera — Exclusive 18+ professional portfolio and booking. Available in Austin, Texas (78701) and surrounding ZIPs. Professional enquiries only.">
  <meta name="keywords" content="Marii Utrera, Austin, model, performer, booking, 18+, portfolio">
  <link rel="canonical" href="https://mariiutrera.my/">
  <meta name="robots" content="index, follow">

  <!-- Open Graph / Social -->
  <meta property="og:site_name" content="Marii Utrera">
  <meta property="og:title" content="Marii Utrera — Exclusive 18+">
  <meta property="og:description" content="Exclusive 18+ professional portfolio and booking. Available in Austin, Texas (78701) and surrounding ZIPs.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://mariiutrera.my/">
  <meta property="og:image" content="https://mariiutrera.my/assets/og-image.jpg">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Marii Utrera — Exclusive 18+">
  <meta name="twitter:description" content="Exclusive 18+ professional portfolio and booking. Available in Austin, Texas (78701) and surrounding ZIPs.">
  <meta name="twitter:image" content="https://mariiutrera.my/assets/og-image.jpg">

  <!-- Structured Data (JSON-LD) -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://mariiutrera.my/#person",
        "name": "Marii Utrera",
        "url": "https://mariiutrera.my/",
        "sameAs": [
          "https://x.com/mariiutrera_01",
          "https://www.instagram.com/mariiutrera_01",
          "https://onlyfans.com/mariiutrera"
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://mariiutrera.my/#localbusiness",
        "name": "Marii Utrera",
        "url": "https://mariiutrera.my/",
        "telephone": "",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "",
          "addressLocality": "Austin",
          "addressRegion": "TX",
          "postalCode": "78701",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 30.2711,
          "longitude": -97.7437
        },
        "sameAs": [
          "https://x.com/mariiutrera_01",
          "https://www.instagram.com/mariiutrera_01"
        ],
        "description": "Exclusive 18+ portfolio and professional booking available in Austin, Texas (78701) and surrounding areas."
      },
      {
        "@type": "WebSite",
        "@id": "https://mariiutrera.my/#website",
        "url": "https://mariiutrera.my/",
        "name": "Marii Utrera",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://mariiutrera.my/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ]
  }
  </script>

  <!-- Fonts & CSS -->
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

  <style>
    :root{--primary-gold:#D4AF37;--deep-black:#0A0A0A;--pearl-white:#FAF7F2;--soft-black:#1A1A1A}
    *{box-sizing:border-box}
    body{font-family:'Montserrat',sans-serif;background:var(--deep-black);color:var(--pearl-white);margin:0;line-height:1.6}
    h1,h2,h3{font-family:'Playfair Display',serif}
    .luxury-navbar{position:fixed;top:0;width:100%;background:linear-gradient(135deg,rgba(10,10,10,.95),rgba(26,26,26,.95));backdrop-filter:blur(20px);border-bottom:1px solid var(--primary-gold);z-index:1000;padding:1rem}
    .brand-logo{font-size:1.6rem;color:var(--primary-gold);text-decoration:none;font-weight:700}
    .nav-links{display:flex;gap:1rem}
    .hero-section{min-height:80vh;display:flex;align-items:center;position:relative;padding-top:80px}
    .background-slide{position:absolute;inset:0;background-size:cover;background-position:center;opacity:0;transition:opacity 2s}
    .background-slide.active{opacity:1}
    .hero-overlay{position:absolute;inset:0;background:linear-gradient(135deg,rgba(10,10,10,.7),rgba(26,26,26,.7))}
    .hero-content{position:relative;z-index:2;text-align:center;padding:4rem 1rem}
    .hero-title{font-size:3rem;color:var(--primary-gold);margin-bottom:.5rem}
    .hero-subtitle{font-size:1.05rem;margin-bottom:1.25rem;color:var(--pearl-white)}
    .luxury-btn{padding:.85rem 1.6rem;border:2px solid var(--primary-gold);background:transparent;color:var(--primary-gold);text-decoration:none;border-radius:6px}
    .luxury-btn-filled{background:linear-gradient(90deg,var(--primary-gold),#E8B4CB);color:#0A0A0A;border:none}
    .about-section{padding:3rem 0;background:linear-gradient(135deg,var(--soft-black),#2C2C2C)}
    .section-title{font-size:1.6rem;color:var(--primary-gold);text-align:center;margin-bottom:1rem}
    .portfolio-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1rem}
    .portfolio-item{position:relative;overflow:hidden;border-radius:8px}
    .portfolio-item img{width:100%;height:280px;object-fit:cover;display:block;transition:transform .3s}
    .portfolio-overlay{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;opacity:0;background:linear-gradient(135deg,rgba(212,175,55,.85),rgba(232,180,203,.85));transition:opacity .25s}
    .portfolio-item:hover img{transform:scale(1.05)}
    .portfolio-item:hover .portfolio-overlay{opacity:1}
    .contact-section{padding:3rem 0}
    .contact-form{max-width:700px;margin:0 auto;padding:1.5rem;border-radius:8px;background:rgba(255,255,255,.02);border:1px solid rgba(212,175,55,.06)}
    .social-links a{display:inline-flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:50%;border:2px solid var(--primary-gold);color:var(--primary-gold);text-decoration:none;margin-right:.5rem}
    .footer{padding:1.25rem 0;text-align:center;border-top:1px solid var(--primary-gold);background:var(--soft-black)}
    .age-modal{position:fixed;inset:0;background:rgba(0,0,0,.85);display:flex;align-items:center;justify-content:center;z-index:4000}
    .age-card{background:#0f0f0f;padding:2rem;border-radius:8px;border:1px solid rgba(212,175,55,.12);max-width:420px;text-align:center}
    .age-card h3{color:var(--primary-gold);margin-bottom:.5rem}
    .age-card p{color:#ddd;margin-bottom:1rem}
    .age-cta{display:flex;gap:.75rem;justify-content:center}
    .message-display{display:none;margin-bottom:1rem;padding:1rem;border-radius:6px}
    @media (max-width:768px){.hero-title{font-size:2rem}.nav-links{display:none}}
  </style>
</head>
<body>
  <!-- Age verification modal (blocks content until accepted) -->
  <div id="ageModal" class="age-modal" role="dialog" aria-modal="true" aria-labelledby="ageModalTitle">
    <div class="age-card">
      <h3 id="ageModalTitle">This site is for adults 18+ only</h3>
      <p>By clicking "I am 18+" you confirm you are of legal age in your jurisdiction. This site contains professional 18+ services and portfolio material.</p>
      <div class="age-cta">
        <button id="declineBtn" class="luxury-btn" aria-label="Leave site">Leave</button>
        <button id="acceptBtn" class="luxury-btn luxury-btn-filled" aria-label="I am 18+">I am 18+</button>
      </div>
    </div>
  </div>

  <!-- Navigation -->
  <nav class="luxury-navbar" aria-label="Primary navigation">
    <div class="container d-flex justify-content-between align-items-center">
      <a class="brand-logo" href="/">MARIIUTRERA</a>
      <div class="nav-links">
        <a class="nav-link" href="#home">Home</a>
        <a class="nav-link" href="#about">About</a>
        <a class="nav-link" href="#portfolio">Portfolio</a>
        <a class="nav-link" href="#contact">Contact</a>
      </div>
    </div>
  </nav>

  <!-- Hero -->
  <section id="home" class="hero-section">
    <div class="background-slide active" style="background-image:url('/SaveClip.App_521213232_18025118804710883_7245356167100004397_n.jpg')"></div>
    <div class="background-slide" style="background-image:url('/chiyud.jpg')"></div>
    <div class="background-slide" style="background-image:url('/SaveClip.App_477282699_18007041434710883_457989024059242917_n.jpg')"></div>
    <div class="background-slide" style="background-image:url('/chyyufrk.jpg')"></div>
    <div class="hero-overlay"></div>
    <div class="container">
      <div class="hero-content">
        <h1 class="hero-title">Marii Utrera — Exclusive 18+</h1>
        <p class="hero-subtitle"></p>
        <div class="d-flex justify-content-center" style="gap:12px">
          <a class="luxury-btn" href="#portfolio">View Portfolio</a>
          <a class="luxury-btn luxury-btn-filled" href="#contact">Book Session</a>
        </div>
      </div>
    </div>
  </section>

  <!-- About -->
  <section id="about" class="about-section">
    <div class="container">
      <h2 class="section-title">About</h2>
      <div class="about-content text-center mx-auto" style="max-width:900px;color:#eee">
        <p>Welcome to the professional 18+ portfolio of Marii Utrera. I offer exclusive, professional bookings and creative collaborations — available in Austin, Texas (Downtown 78701) and nearby neighborhoods. For professionalism and compliance, all bookings are handled via official email and vetted management.</p>
      </div>

      <div class="row mt-4">
        <div class="col-md-4">
          <div class="p-3 mb-3" style="border:1px solid rgba(212,175,55,.06);border-radius:8px">
            <i class="fas fa-crown" style="color:var(--primary-gold);font-size:1.25rem"></i>
            <h4 style="color:var(--primary-gold)">Premium Experience</h4>
            <p style="color:#ddd">Years of professional work across photography and production with vetted teams.</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="p-3 mb-3" style="border:1px solid rgba(212,175,55,.06);border-radius:8px">
            <i class="fas fa-camera-retro" style="color:var(--primary-gold);font-size:1.25rem"></i>
            <h4 style="color:var(--primary-gold)">Artistic Standards</h4>
            <p style="color:#ddd">High-quality editorial and creative sessions conducted professionally.</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="p-3 mb-3" style="border:1px solid rgba(212,175,55,.06);border-radius:8px">
            <i class="fas fa-shield-alt" style="color:var(--primary-gold);font-size:1.25rem"></i>
            <h4 style="color:var(--primary-gold)">Safety & Compliance</h4>
            <p style="color:#ddd">All bookings follow professional guidelines; ID verification and contracts applied where required.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Portfolio -->
  <section id="portfolio" class="portfolio-section">
    <div class="container">
      <h2 class="section-title">Portfolio</h2>
      <div class="portfolio-grid mt-3">
        <div class="portfolio-item" onclick="openModal('/chiurru4.jpg','Elegance Portrait')">
          <img src="/chiurru4.jpg" alt="Elegance Portrait by Marii Utrera">
          <div class="portfolio-overlay"><i class="fas fa-expand-alt" style="font-size:2rem;color:#000"></i></div>
        </div>
        <div class="portfolio-item" onclick="openModal('/chiurru2.jpg','Glamour Studio')">
          <img src="/chiurru2.jpg" alt="Glamour Studio by Marii Utrera">
          <div class="portfolio-overlay"><i class="fas fa-expand-alt" style="font-size:2rem;color:#000"></i></div>
        </div>
           </div>
        <div class="portfolio-item" onclick="openModal('/chiurru6.jpg','Glamour Studio')">
          <img src="/chiurru6.jpg" alt="Glamour Studio by Marii Utrera">
          <div class="portfolio-overlay"><i class="fas fa-expand-alt" style="font-size:2rem;color:#000"></i></div>
        </div>
        <div class="portfolio-item" onclick="openModal('/chiurru3.jpg','Fashion Editorial')">
          <img src="/chiurru3.jpg" alt="Fashion Editorial by Marii Utrera">
          <div class="portfolio-overlay"><i class="fas fa-expand-alt" style="font-size:2rem;color:#000"></i></div>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact -->
  <section id="contact" class="contact-section">
    <div class="container">
      <h2 class="section-title">Book a Private Session</h2>

      <div class="row contact-info mb-4 text-center">
        <div class="col-md-4">
          <i class="fas fa-envelope" style="color:var(--primary-gold)"></i>
          <h5 style="color:var(--primary-gold)">Email</h5>
          <p>booking@mariiutrera.my</p>
        </div>
        <div class="col-md-4">
          <i class="fas fa-info-circle" style="color:var(--primary-gold)"></i>
          <h5 style="color:var(--primary-gold)">Booking</h5>
          <p>Professional inquiries only — management will respond with availability.</p>
        </div>
        <div class="col-md-4">
          <i class="fas fa-map-marker-alt" style="color:var(--primary-gold)"></i>
         
        </div>
      </div>

      <div id="messageDisplay" class="message-display" role="status" aria-live="polite"></div>

      <form id="contactForm" class="contact-form" method="post" action="send.php">
        <div class="mb-3">
          <label for="name" class="form-label" style="color:var(--primary-gold)">Full Name</label>
          <input type="text" id="name" name="name" class="form-control" placeholder="Your full name" required>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label" style="color:var(--primary-gold)">Email Address</label>
          <input type="email" id="email" name="email" class="form-control" placeholder="your.email@example.com" required>
        </div>
        <div class="mb-3">
          <label for="subject" class="form-label" style="color:var(--primary-gold)">Subject</label>
          <input type="text" id="subject" name="subject" class="form-control" placeholder="Booking inquiry, collaboration, etc." required>
        </div>
        <div class="mb-3">
          <label for="message" class="form-label" style="color:var(--primary-gold)">Message</label>
          <textarea id="message" name="message" class="form-control" rows="6" placeholder="Please provide details about your inquiry..." required></textarea>
        </div>
        <div class="text-center">
          <button type="submit" id="submitBtn" class="luxury-btn luxury-btn-filled">Send Message</button>
        </div>
      </form>

    </div>
  </section>

  <!-- Social -->
  <section class="social-section">
    <div class="container text-center">
      <h3 style="color:var(--primary-gold)">Follow</h3>
      <div class="d-flex justify-content-center mt-3" style="gap:.5rem">
        <a href="https://www.instagram.com/mariiutrera_01" aria-label="Instagram" class="social-links"><i class="fab fa-instagram"></i></a>
        <a href="https://x.com/mariiutrera_01" aria-label="X" class="social-links"><i class="fab fa-twitter"></i></a>
        <a href="https://onlyfans.com/mariiutrera" aria-label="OnlyFans" class="social-links"><i class="fab fa-onlyfans"></i></a>
      </div>
    </div>
  </section>

  <footer class="footer">
    <div class="container">
      <p>&copy; 2025 Marii Utrera. All rights reserved.</p>
    </div>
  </footer>

  <!-- Modal for portfolio -->
  <div id="portfolioModal" style="display:none;position:fixed;inset:0;background:rgba(0,0,0,.9);z-index:3000;align-items:center;justify-content:center;">
    <div style="max-width:90%;max-height:90%;margin:auto;"><img id="modalImage" style="width:100%;height:auto;display:block;object-fit:contain"></div>
    <button aria-label="Close" onclick="closeModal()" style="position:absolute;top:18px;right:24px;background:none;border:none;color:var(--primary-gold);font-size:2rem">&times;</button>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  <script>
    // Age modal handling
    (function(){
      const ageModal = document.getElementById('ageModal');
      const acceptBtn = document.getElementById('acceptBtn');
      const declineBtn = document.getElementById('declineBtn');
      const accepted = localStorage.getItem('marii_age_verified');
      if(accepted==='true'){ ageModal.style.display='none'; } else { ageModal.style.display='flex'; }

      acceptBtn.addEventListener('click', function(){
        localStorage.setItem('marii_age_verified','true');
        ageModal.style.display='none';
      });
      declineBtn.addEventListener('click', function(){
        window.location.href = 'https://www.google.com/';
      });

      // Prevent focus behind modal
      document.addEventListener('focus', function(e){ if(ageModal.style.display!=='none' && !ageModal.contains(e.target)) e.stopPropagation(); }, true);
    })();

    // Slideshow
    (function(){
      const slides = document.querySelectorAll('.background-slide');
      let idx = 0;
      function next(){ slides[idx].classList.remove('active'); idx=(idx+1)%slides.length; slides[idx].classList.add('active'); }
      if(slides.length>1) setInterval(next,4000);
    })();

    // Modal functions for portfolio
    function openModal(src, alt){ const modal=document.getElementById('portfolioModal'); const img=document.getElementById('modalImage'); img.src=src; img.alt=alt||''; modal.style.display='flex'; }
    function closeModal(){ document.getElementById('portfolioModal').style.display='none'; }

    // Contact form: submit to send.php via fetch and display server response inline
    (function(){
      const form = document.getElementById('contactForm');
      const messageBox = document.getElementById('messageDisplay');
      const submitBtn = document.getElementById('submitBtn');

      if(!form) return;

      form.addEventListener('submit', function(e){
        e.preventDefault();

        // simple client-side validation (already enforced by required fields)
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';

        const fd = new FormData(form);

        fetch(form.action, {
          method: 'POST',
          body: fd
        })
        .then(response => response.text())
        .then(text => {
          // Server (send.php) returns HTML (success box or error text). Insert into messageBox.
          messageBox.style.display = 'block';
          messageBox.innerHTML = text;

          // If the response contains a success indicator, clear the form.
          // Your send.php echoes a green box that includes "✅ Message sent successfully!".
          if (text.toLowerCase().includes('message sent')) {
            form.reset();
          }

          // restore button
          submitBtn.disabled = false;
          submitBtn.textContent = 'Send Message';

          // Scroll to message box for visibility (mobile friendly)
          messageBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
        })
        .catch(err => {
          messageBox.style.display = 'block';
          messageBox.style.background = 'linear-gradient(135deg,rgba(220,53,69,.1),rgba(220,53,69,.15))';
          messageBox.style.border = '1px solid #dc3545';
          messageBox.style.color = '#f8d7da';
          messageBox.textContent = '❌ Error sending message. Please try again later.';
          submitBtn.disabled = false;
          submitBtn.textContent = 'Send Message';
          messageBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
      });
    })();

    // Close portfolio modal with Esc
    document.addEventListener('keydown', function(e){ if(e.key==='Escape') closeModal(); });
  </script>
</body>
</html>
