'use strict';

const month = 12;
const day = 15;
 
fetch(`http:/api.abalin.net/namedays?country=cz&month=${month}&day=${day}`)
  .then((resp) => resp.json())
  .then((json) => {
    const title = document.querySelector('h1');
    title.textContent = `On ${day}.${month}. is ${json.data.namedays.cz}'s nameday`;
  });