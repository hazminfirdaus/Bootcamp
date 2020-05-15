'use script';

const padlockElm = document.querySelector('#padlock');
const textElm  = document.querySelector('#message');

// const display = () => {

//   textElm.className = 'display';
// }

// const nodisplay = () => {

//   textElm.className = 'nodisplay';
// }

// padlockElm.addEventListener('mouseenter', display);
// padlockElm.addEventListener('mouseleave', nodisplay);



padlockElm.addEventListener('mouseenter', () => {
  textElm.className = 'display';
});


padlockElm.addEventListener('mouseleave', () => {
  textElm.className = 'nodisplay';
});