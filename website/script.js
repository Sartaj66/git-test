// script.js
function setActiveLink() {
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('[data-nav]').forEach(a => {
    const page = a.getAttribute('href');
    if ((path === '' && page === 'index.html') || page === path) {
      a.classList.add('active');
    }
  });
}

function setupMobileMenu() {
  const btn = document.querySelector('[data-menu-btn]');
  const mobile = document.querySelector('[data-mobile-nav]');
  if (!btn || !mobile) return;
  btn.addEventListener('click', () => mobile.classList.toggle('open'));
}

document.addEventListener('DOMContentLoaded', () => {
  setActiveLink();
  setupMobileMenu();
});