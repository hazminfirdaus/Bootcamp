'use script';

const text = String(prompt('Insert your text here:'));
const sms = text.substr(0, 160);    // .substract 0 - start, 160 - length //
document.write(sms);