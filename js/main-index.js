var menuButton = document.querySelector('.burger');
var mobileMenu = document.querySelector('.main-nav');
var pageHeader = document.querySelector('.page-header');
var pageHeaderNav = document.querySelector('.page-header__navigation');
var indexPromo = document.querySelector('.promo__image--index');
var downlBlock = document.querySelector('.download-block');

mobileMenu.classList.remove('main-nav--no-js');
pageHeader.classList.remove('page-header--no-js');
pageHeaderNav.classList.remove('page-header__navigation--no-js');
indexPromo.classList.remove('promo__image--index-no-js');
downlBlock.classList.remove('download-block--no-js');

var toggleMenu = function() {
  if( mobileMenu.classList.contains('main-nav--close')) {
    mobileMenu.classList.remove('main-nav--close');
    mobileMenu.classList.add('main-nav--open');
    menuButton.classList.add('burger--cross');
    pageHeader.classList.add('page-header--open');
    indexPromo.classList.remove('promo__image--index-js');
    indexPromo.classList.add('promo__image--index-no-js');
    downlBlock.classList.remove('download-block--js');
    downlBlock.classList.add('download-block--no-js');
  } else {
    mobileMenu.classList.remove('main-nav--open');
    mobileMenu.classList.add('main-nav--close');
    menuButton.classList.remove('burger--cross');
    pageHeader.classList.remove('page-header--open');
    indexPromo.classList.remove('promo__image--index-no-js');
    indexPromo.classList.add('promo__image--index-js');
    downlBlock.classList.remove('download-block--no-js');
    downlBlock.classList.add('download-block--js');
  }
}

menuButton.addEventListener('click', toggleMenu);
