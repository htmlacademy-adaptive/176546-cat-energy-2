const mainNavList = document.querySelector('.main-nav__list');
const mainHeader = document.querySelector('.main-header');
const mainHeaderContainer = document.querySelector('.main-header__container');
const mainNav = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
const address = document.querySelector('.address');

mainNavList.classList.remove('main-nav-list--nojs');
mainHeader.classList.remove('main-header--nojs');
mainHeaderContainer.classList.remove('container--nojs');
mainNav.classList.remove('main-nav--nojs');
address.classList.remove('address--nojs');

navToggle.addEventListener('click', () => {
  if (mainNavList.classList.contains('main-nav-list--closed')) {
    mainNavList.classList.remove('main-nav-list--closed');

    navToggle.classList.add('main-nav__toggle--close');
  } else {
    mainNavList.classList.add('main-nav-list--closed');
    navToggle.classList.remove('main-nav__toggle--close');
  }
});
