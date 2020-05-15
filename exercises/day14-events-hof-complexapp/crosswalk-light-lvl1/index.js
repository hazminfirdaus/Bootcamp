'use script';


const pressButton = () => {
  const stoplight = document.querySelector('#stoplight');
  const walklight = document.querySelector('#walklight');
  
  stoplight.className = 'stoplightoff';
  walklight.className = 'walklighton';

  setTimeout(() => {
    stoplight.className = 'stoplighton';
  walklight.className = 'walklightoff';
  }, 5000);
}

const btn = document.querySelector('#btn');
btn.addEventListener('click', pressButton);
