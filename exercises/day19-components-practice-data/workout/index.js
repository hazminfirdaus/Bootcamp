'use strict';

let value = 3;

const ratingValue = document.querySelector('.rating__value');
const ratingElm = document.querySelector('.rating');
const star = document.querySelectorAll('.rating__star')
const starClick = () => {
  star.classList.add("rating__star--on");
};
 
ratingElm.addEventListener('click', () => {
    if (value < 5) {
      value += 1;
      ratingValue.textContent = value;
    }
});

star.forEach((star) => {
  star.addEventListener('click', starClick);
  });