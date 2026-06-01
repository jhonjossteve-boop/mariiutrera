/* ===== AGE GATE ===== */
(function () {
  const gate = document.getElementById('age-gate');
  const site = document.getElementById('site');
  const verified = localStorage.getItem('mariiutrera_age_verified') === 'true';

  if (verified) {
    gate.style.display = 'none';
    site.style.display = 'block';
  } else {
    document.body.style.overflow = 'hidden';
  }

  window.enterSite = function () {
    localStorage.setItem('mariiutrera_age_verified', 'true');
    gate.style.opacity = '0';
    gate.style.transition = 'opacity 0.5s';
    setTimeout(() => {
      gate.style.display = 'none';
      site.style.display = 'block';
      document.body.style.overflow = '';
      initAnimations();
    }, 500);
  };

  window.exitSite = function () {
    window.location.href = 'https://www.google.com';
  };
})();

/* ===== NAVIGATION ===== */
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById(pageId);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  document.querySelectorAll('.nav-links a, #mobile-menu a').forEach(a => {
    a.classList.toggle('active', a.dataset.page === pageId);
  });
  closeMobileMenu();
  setTimeout(initAnimations, 100);
}

window.showPage = showPage;

/* ===== HAMBURGER ===== */
window.toggleMenu = function () {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('open');
};
window.closeMobileMenu = function () {
  document.getElementById('mobile-menu').classList.remove('open');
};

/* ===== SMOOTH SCROLL TO SECTION ===== */
window.scrollToSection = function (id) {
  showPage('page-home');
  setTimeout(() => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 100);
};

/* ===== COPY TO CLIPBOARD ===== */
window.copyText = function (text, btn) {
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = 'Copied!';
    btn.classList.add('copied');
    showToast('Address copied to clipboard!');
    setTimeout(() => {
      btn.textContent = 'Copy';
      btn.classList.remove('copied');
    }, 2500);
  }).catch(() => {
    const el = document.createElement('textarea');
    el.value = text; el.style.position = 'fixed'; el.style.opacity = '0';
    document.body.appendChild(el); el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    btn.textContent = 'Copied!';
    btn.classList.add('copied');
    showToast('Address copied to clipboard!');
    setTimeout(() => { btn.textContent = 'Copy'; btn.classList.remove('copied'); }, 2500);
  });
};

/* ===== TOAST ===== */
function showToast(msg) {
  const t = document.getElementById('toast');
  t.querySelector('span').textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

/* ===== COUNTER ANIMATION ===== */
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const suffix = el.dataset.suffix || '';
  const prefix = el.dataset.prefix || '';
  const duration = 1800;
  const start = performance.now();
  function step(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = prefix + Math.floor(ease * target).toLocaleString() + suffix;
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

/* ===== INTERSECTION OBSERVER ANIMATIONS ===== */
function initAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        if (entry.target.classList.contains('stat-num') && !entry.target.dataset.animated) {
          entry.target.dataset.animated = 'true';
          animateCounter(entry.target);
        }
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.fade-up, .stat-num').forEach(el => observer.observe(el));
}

/* ===== GOOGLE TRANSLATE ===== */
window.googleTranslateElementInit = function () {
  new google.translate.TranslateElement(
    { pageLanguage: 'en', autoDisplay: true, layout: google.translate.TranslateElement.InlineLayout.SIMPLE },
    'google_translate_element'
  );
};

window.openTranslate = function () {
  const el = document.querySelector('#google_translate_element select');
  if (el) { el.style.display = 'block'; el.focus(); el.click(); }
  else {
    const div = document.getElementById('google_translate_element');
    div.style.display = 'block';
    setTimeout(() => {
      const sel = div.querySelector('select');
      if (sel) sel.click();
    }, 300);
  }
};

/* ===== INIT ON LOAD ===== */
document.addEventListener('DOMContentLoaded', function () {
  if (localStorage.getItem('mariiutrera_age_verified') === 'true') {
    initAnimations();
  }
  showPage('page-home');

  // Load Google Translate
  const s = document.createElement('script');
  s.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  s.async = true;
  document.head.appendChild(s);
});
