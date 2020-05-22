'use strict';

const app = document.querySelector('#app');

const bulb1 = new LightBulb(true);
bulb1.mount(app);

const bulb2 = new LightBulb(true);
bulb2.mount(app);

const bulb3 = new LightBulb(false);
bulb3.mount(app);

const bulb4 = new LightBulb(true);
bulb4.mount(app);