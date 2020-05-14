const buttonClick = () => {
    const myInputElm =document.querySelector('#my-input');
    const titleElm = document.querySelector('.title');
    titleElm.textContent = myInputElm.value;
}