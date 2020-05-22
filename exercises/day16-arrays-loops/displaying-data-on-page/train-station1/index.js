'use strict';

const departures = [494, 499, 500, 517, 520, 523, 530, 556, 563, 576, 586, 613, 625];

// for (let i = 0; i < departures.length; i += 1) {

 
//   const times = document.querySelector('.times');
//   times.textContent += ((Math.floor(departures[i] / 60) + ':' + departures[i] % 60));
// }

const times = document.querySelector('.times');

departures.forEach ((item) => {
  times.innerHTML += `<li>${Math.floor(item / 60) + ':' + (item % 60)}</li>`;
})
