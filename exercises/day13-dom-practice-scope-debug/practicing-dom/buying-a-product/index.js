'use script';

const buttonClick = () => {
    const buttonElm = document.querySelector('#button');
    const formElm = document.querySelector('#quantity');
    // document.write('Product added to cart');
    buttonElm.textContent = formElm.value + ' in cart.';   
    buttonElm.className = "afterclick";
}