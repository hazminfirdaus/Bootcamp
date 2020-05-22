'use strict';

const items = [
  'apples',
  'bananas',
  'milk',
  'bread'
]

const shoppingListElm = document.querySelector('#list');

items.forEach((item) => {
  shoppingListElm.innerHTML +=`<div>${item}</div>`;
});
