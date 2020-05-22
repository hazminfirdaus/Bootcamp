'use strict';

const app = document.querySelector('#app');

const bar1 = new ProgressBar(0, 17, 'red');
bar1.mount(app);

const bar2 = new ProgressBar(0, 17, 'green');
bar2.mount(app);

const bar3 = new ProgressBar(0, 17, 'blue');
bar3.mount(app);

const mixBtn = document.querySelector('.button__mix');
mixBtn.addEventListener('click', () => {
  const color = `rgb(${bar1.value * 15},${bar2.value * 15},${bar3.value * 15})`;
  mixBtn.style.backgroundColor = color;
})