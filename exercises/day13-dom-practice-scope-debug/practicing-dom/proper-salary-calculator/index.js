'use script';

const buttonClick = () => {
    const title = document.querySelector('#title');
    const pay = document.querySelector('#pay');
    const hours = document.querySelector('#hours');
    const days = document.querySelector('#days');

    const salary = (pay.value * hours.value * days.value);
    title.textContent = 'CZK ' + salary;
}