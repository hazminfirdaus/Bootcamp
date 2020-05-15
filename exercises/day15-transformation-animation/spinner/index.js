'use script';

const containerElm = document.querySelector('#container')
const imgElm = document.querySelector('#img');
// const spinner =document.querySelector('#animation');

containerElm.addEventListener('mouseenter', () => {

  setTimeout(() => {
    imgElm.className = 'petals';
    imgElm.classList.remove('animation');
  }, 4000);
});

