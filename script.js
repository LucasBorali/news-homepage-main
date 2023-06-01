'use strict';

const screenWidth = window.screen.width;
const navLinks = document.querySelector('.nav-links');
const navBtn = document.querySelector('.nav-btn');
const closeBtn = document.querySelector('.nav-btn--close');
const bigPanel = document.querySelector('.big-panel')
const mobileNavLinks = document.querySelector('.nav-links--mobile');

const hideNav = function () {
  if (screenWidth <= 375) {
    navLinks.classList.toggle('hidden');
    navBtn.classList.toggle('hidden');
  }
};

const displayMenu = function () {
  const overlay = document.querySelector('.overlay');
  const mobileNavBar = document.querySelector('.navbar--mobile');

  overlay.classList.toggle('hidden');
  mobileNavBar.classList.toggle('hidden');
};

const changeIMG = function() {
    if(screenWidth <= 375) {
        bigPanel.innerHTML = '<img src="assets/images/image-web-3-mobile.jpg" />'
    }
}

changeIMG();
hideNav();

navBtn.addEventListener('click', displayMenu);
closeBtn.addEventListener('click', displayMenu);
mobileNavLinks.addEventListener('click', function(e){
    const clickedLink = e.target
    if(clickedLink){
        displayMenu();
    }
});
