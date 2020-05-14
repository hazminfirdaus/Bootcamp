'use script';

const angle_1 = Number(prompt('Insert first angle:'));
const angle_2 = Number(prompt('Insert second angle:'));
const angle_3 = Number(prompt('Insert third angle:'));
const triangle = angle_1 + angle_2 + angle_3;

if (triangle === 180) {
    document.write('Your triangle exist.');
}   else {
    document.write('Your triangle does not exist.');
}