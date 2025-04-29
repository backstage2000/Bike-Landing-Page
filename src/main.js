'use strict';

const burger = document.querySelector('.icon--menu');
const handClose = document.querySelector('.icon--close');
const menu = document.querySelector('.menu');

burger.addEventListener('click', () => {
  menu.classList.add('active');
  document.body.classList.add('disable-scroll');
});

handClose.addEventListener('click', () => {
  menu.classList.remove('active');
  document.body.classList.remove('disable-scroll');
});

document
  .querySelector('.contact__form')
  .addEventListener('submit', function(e) {
    if (!this.checkValidity()) {
      return;
    }

    e.preventDefault();

    alert('Form successfully submitted!');

    this.reset();
  });
