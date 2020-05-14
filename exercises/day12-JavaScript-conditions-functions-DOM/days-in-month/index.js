'use script';

const month = Number(prompt('Insert number of the month:'));
let days = 31;

if (month === 2) {
    days = 28;
}   else {

    if (month === 4 || month === 6 || month === 9 || month === 11) {
        days = 30;
    }     
}

document.write('Month ' + month + ' has ' + days + ' days.');