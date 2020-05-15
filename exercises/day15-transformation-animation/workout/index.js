'use script';

const padlockElm = document.querySelector('#padlock');

const display = () => {
  const textElm  = document.querySelector('#message');

  textElm.className = 'display';
}

const nodisplay = () => {
  const textElm  = document.querySelector('#message');

  textElm.className = 'nodisplay';
}

padlockElm.addEventListener('mouseenter', display);
padlockElm.addEventListener('mouseleave', nodisplay);