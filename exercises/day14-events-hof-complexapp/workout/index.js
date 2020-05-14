'use script';

const buttonClick = () => {
  const input = document.querySelector('#input');
  const result = document.querySelector('#result');
  
  result.textContent = input.value;

  if (input != 0) {
    input.textContent = 0;
  }
}