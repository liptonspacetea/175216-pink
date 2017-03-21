var menuButton = document.querySelector('.burger');
var mobileMenu = document.querySelector('.main-nav');

mobileMenu.classList.remove('main-nav--no-js');

var toggleMenu = function() {
  if( mobileMenu.classList.contains('main-nav--close')) {
    mobileMenu.classList.remove('main-nav--close');
    mobileMenu.classList.add('main-nav--open');
    menuButton.classList.add('burger--cross');
  } else {
    mobileMenu.classList.remove('main-nav--open');
    mobileMenu.classList.add('main-nav--close');
    menuButton.classList.remove('burger--cross');
  }
}

menuButton.addEventListener('click', toggleMenu);
