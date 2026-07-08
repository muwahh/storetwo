// Reloop — site interactions

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initScrollReveal();
  initContactForm();
});

/**
 * Mobile nav: toggles a dropdown panel of links on small screens
 * and closes it automatically when a link is tapped.
 */
function initMobileNav() {
  const header = document.querySelector('header');
  const toggle = document.querySelector('.nav-toggle');
  const panel = document.querySelector('.mobile-panel');

  if (!header || !toggle || !panel) return;

  toggle.addEventListener('click', () => {
    const isOpen = header.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  panel.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      header.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/**
 * Scroll reveal: fades/slides sections into view as they enter the
 * viewport. Tailored exclusively to the remaining active site elements.
 */
function initScrollReveal() {
  // Updated targets list: removed deleted section components and added the contact form
  const targets = document.querySelectorAll(
    '.cat-card, .test-card, .contact-form, .section-head'
  );

  if (!targets.length) return;

  targets.forEach((el) => el.classList.add('reveal'));

  if (!('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -20px 0px' }
  );

  targets.forEach((el) => observer.observe(el));
}

/**
 * Contact Form: Intercepts submission to show a futuristic
 * terminal logging success state without reloading.
 */
function initContactForm() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const submitBtn = form.querySelector('button[type="submit"]');
    const nameVal = document.getElementById('name').value;
    
    // Change button text to mimic a cyber handshake sequence
    submitBtn.disabled = true;
    submitBtn.innerText = 'ENCRYPTING PAYLOAD...';
    submitBtn.style.borderColor = 'var(--muted)';
    submitBtn.style.color = 'var(--muted)';
    submitBtn.style.boxShadow = 'none';

    setTimeout(() => {
      // Replace form contents with a clean success printout
      form.innerHTML = `
        <div style="text-align: center; padding: 20px 0; font-family: 'IBM Plex Mono', monospace;">
          <div style="font-size: 32px; color: var(--green); margin-bottom: 16px;">✓</div>
          <h3 style="color: var(--white); font-size: 18px; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 0.05em;">Transmission Success</h3>
          <p style="color: var(--text); font-size: 14px; opacity: 0.8; line-height: 1.6; max-width: 300px; margin: 0 auto;">
            Secure link established. Asset log updated for user <span style="color: var(--green);">${nameVal}</span>. Our terminal will route a response down your comms line shortly.
          </p>
        </div>
      `;
    }, 1200);
  });
}