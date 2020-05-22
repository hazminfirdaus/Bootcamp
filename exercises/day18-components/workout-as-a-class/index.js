'use strict';

let value = 4;
let max = 20;

const update = () => {
  const counterElm = document.querySelector('#counter');
  counterElm.textContent = value;
  const maxElm = document.querySelector('#maximum');
  maxElm.textContent = max;

  const step = 100 / max;
  const knobElm = document.querySelector('#knob');
  knobElm.style.width = `${value * step}%`;
  // console.log(counterElm.textContent)
};

const plusBtn = document.querySelector('#plus');
plusBtn.addEventListener('click', () => {
  if (value < 20) {
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

