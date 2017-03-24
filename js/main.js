var menuButton = document.querySelector('.burger');
var mobileMenu = document.querySelector('.main-nav');
var pageHeader = document.querySelector('.page-header');
var pageHeaderNav = document.querySelector('.page-header__navigation');
var promoPhoto = document.querySelector('.promo__image-inner');

mobileMenu.classList.remove('main-nav--no-js');
pageHeader.classList.remove('page-header--no-js');
pageHeaderNav.classList.remove('page-header__navigation--no-js');

promoPhoto.classList.remove('promo__image-inner--no-js');
promoPhoto.classList.add('promo__image-inner--js');

var toggleMenu = function() {
  if( mobileMenu.classList.contains('main-nav--close')) {
    mobileMenu.classList.remove('main-nav--close');
    mobileMenu.classList.add('main-nav--open');
    menuButton.classList.add('burger--cross');
    pageHeader.classList.add('page-header--open');
    promoPhoto.classList.remove('promo__image-inner--js');
    promoPhoto.classList.add('promo__image-inner--no-js');
  } else {
    mobileMenu.classList.remove('main-nav--open');
    mobileMenu.classList.add('main-nav--close');
    menuButton.classList.remove('burger--cross');
    pageHeader.classList.remove('page-header--open');
    promoPhoto.classList.remove('promo__image-inner--no-js');
    promoPhoto.classList.add('promo__image-inner--js');
  }
}

menuButton.addEventListener('click', toggleMenu);
