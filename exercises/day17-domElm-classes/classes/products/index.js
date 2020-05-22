'use strict';

class Product {
  constructor (name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  sell () {
    if (this.quantity > 0) {
    this.quantity -= 1;
    }
  }

  store(count) {
    this.quantity += count;
  } 
};

const products = [
  new Product ('bread', 10, 20),
  new Product ('milk', 20, 30),
  new Product ('chocolate', 15, 50),
  new Product ('egg', 5, 100),
  new Product ('flour', 8, 25),
  new Product ('chicken', 25, 30),
  new Product ('tissue', 5, 100),
];

const productListElm = document.querySelector('.product__list');

products.forEach((product) => {
  const productElm = document.createElement('div');
  productElm.className = 'product';
  productElm.innerHTML = `
    <div class="product__name">${product.name}</div>
    <div class="product__price">${product.price} CZK</div>
    <div class="product__quantity">${product.quantity} in stock</div>
    <button class="btn">Buy</button> 
  `;

  const buyBtn = productElm.querySelector('.btn');
  const quantityElm = productElm.querySelector('.product__quantity');

  buyBtn.addEventListener('click', () => {
    product.sell();
    quantityElm.textContent = product.quantity + ' in stock';
  });

  productListElm.appendChild(productElm);
});

