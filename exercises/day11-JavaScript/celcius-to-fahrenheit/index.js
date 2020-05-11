'use script';

const temp = (prompt('Insert temperature in F here:'));
const insertedTemp = Number(temp.replace(',','.'));  // use .replace to replace , to . //
const celcius = (insertedTemp - 32) * 5 / 9;
alert(Math.round(celcius));