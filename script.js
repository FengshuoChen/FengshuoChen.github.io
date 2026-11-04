const menuButton = document.querySelector('.hamburger');
const nav = document.querySelector('.header-nav');
const header = document.querySelector('.header-wrapper');
const filter = document.querySelector('#paper-filter');

menuButton.addEventListener('click', () => {
  const open = header.classList.toggle('menu-open');
  nav.classList.toggle('show', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});

nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  header.classList.remove('menu-open');
  nav.classList.remove('show');
  menuButton.setAttribute('aria-expanded', 'false');
}));

filter.addEventListener('change', () => {
  document.querySelectorAll('.publication-card').forEach((paper) => {
    paper.hidden = filter.value !== 'all' && paper.dataset.status !== filter.value;
  });
});
