const navMain = document.querySelector('.main-nav__list');
const navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav-list--nojs');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('main-nav-list--closed')) {
    navMain.classList.remove('main-nav-list--closed');

    navToggle.classList.add('main-nav__toggle--close');
  } else {
    navMain.classList.add('main-nav-list--closed');
    navToggle.classList.remove('main-nav__toggle--close');
  }
});
