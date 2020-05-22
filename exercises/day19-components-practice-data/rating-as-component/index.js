'use strict';

const app = document.querySelector('#app');

const rating1 = new Rating(0);
rating1.mount(app);

const rating2 = new Rating(5);
rating2.mount(app);

const rating3 = new Rating(3);
rating3.mount(app);