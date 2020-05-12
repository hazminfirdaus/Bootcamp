'use script';

let seatNumber = Number(prompt('Insert your seat number here:'));
const seatCol = seatNumber % 10;
const seatRow = Math.floor(seatNumber / 10);
const seatId = String.fromCharCode(65 + seatRow) + seatCol;
document.write('Your seat: ' + seatId);