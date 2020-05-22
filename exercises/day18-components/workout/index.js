'use strict';

let value = 4;

const update = () => {
  const counterElm = document.querySelector('#counter');
  counterElm.textContent = value;
  const knobElm = document.querySelector('#knob');
  knobElm.style.width = `${value * 10}%`;
  // console.log(counterElm.textContent)
};

const plusBtn = document.querySelector('#plus');
plusBtn.addEventListener('click', () => {
  if (value < 10) {
  value += 1;
  }

  update ();
});

const minusBtn = document.querySelector('#minus');
minusBtn.addEventListener('click', () => {
  if (value > 0) {
  value -= 1;
  }

  update ();
});

