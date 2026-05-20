let navMain = document.querySelector('.main-nav__list');
let navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav-list--nojs');

navToggle.addEventListener('click', function (){
  if (navMain.classList.contains('main-nav-list--closed')) {
    navMain.classList.remove('main-nav-list--closed');
    navMain.classList.add('main-nav-list--opened');
    navToggle.classList.add('main-nav__toggle--close');
  } else {
    navMain.classList.add('main-nav-list--closed');
    navMain.classList.remove('main-nav-list--opened');
    navToggle.classList.remove('main-nav__toggle--close');
  }
});
