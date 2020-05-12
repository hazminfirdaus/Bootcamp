'use script';

let temp = (prompt('Insert temperature in Fahrenheit here:'));
insertedTemp = Number(temp.replace(',','.'));  // use .replace to replace , to . //
const celcius = Math.round((insertedTemp - 32) * 5 / 9);
alert('Temperature in Celcius: ' + celcius);