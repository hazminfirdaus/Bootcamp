'use script';

// salary function
// const salary = (pay, hours, days) => {
//     return pay * hours * days;
// };

// const taxed_salary = (salary, tax) => {
//     return (salary * (1-(tax/100)));
// };


// maximum from 3 values 
// const max3 = (a, b, c) => {
//     if (a > b && a > c) {
//         return a;
//     } else if (b > a && b > c) {
//         return b;
//     } else {
//         return c;
//     }
// }

// maximum from 3 values - better way
const max3 = (a, b, c) => {
    const biggest = Math.max(a, b, c);
    return biggest;
}

// Spread of 3 values
// const spread3 = (a, b, c) => {
//     const biggest = Math.max(a, b, c);
//     const smallest = Math.min(a, b, c);
//     const result = biggest - smallest;
//     return result;
// }