'use strict';

const numbers = [18, 8, -24, 28, -17, 14, -10, 24, 12, -31, 19, 32, -14, -10, 13, 8, -15, -2, 17];

// BASIC ARRAY MANIPULATION
// 1.
// console.log(numbers.length);

// 2.
// console.log(numbers[13]);

// 3.
// let middle = numbers[Math.floor(numbers.length / 2)];
// console.log(middle);


// BASIC LOOPING
// 1.
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }



// 2.
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i] ** 2);
// }

// 3.
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] < 0) {
//     console.log(numbers[i]);
//   }
// }

// 4.
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] < 0) {
//     console.log(-numbers[i]);
//   } else {
//     console.log(numbers[i]);
//   }
// }

// 5.
// for (let i = 0; i < numbers.length; i +=1) {
//   if (numbers[i] === -10) {
//     console.log(i);
//   }
// }

// 6.
// for (let i = 0; i < numbers.length; i +=1) {
//   if ((numbers[i] % 3) === 0) {
//     console.log(numbers[i]);
//   }
// }

// 7.
// for (let i = 0; i < numbers.length; i +=1) {
//   if ((numbers[i] % 2) === 0) {
//     console.log(numbers[i]);
//   }
// }

// 8.
// for (let i = 0; i < numbers.length; i +=1) {
//     console.log(5 - numbers[i]);
// }

// 9.
// for (let i = 0; i < numbers.length; i +=1) {
//     console.log((5 - numbers[i]) ** 2);
// }

// 10. 
// let negCount = 0;
// for (let i = 0; i < numbers.length; i +=1) {
//     if (numbers[i] < 0) {
//       negCount += 1;
//     }
// }

// console.log(negCount);

// 11.
// let sum = 0;
// for (let i = 0; i < numbers.length; i +=1) {
//     sum += numbers[i];
// }

// console.log(sum / numbers.length);

// 12.
// let sum = 0;
// for (let i = 0; i < numbers.length; i +=1) {
//     if (numbers[i] > 0) {
//       sum += numbers[i];
//     }
// }

// console.log(sum);


// INTERMEDIATE LEVEL 
// 1. 
// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] > numbers[i-1]) {
//     console.log(numbers[i]);
//   }
// }

// 2. 
// for (let i = 1; i < numbers.length; i +=1) {
//   if (numbers[i] > numbers[i-1] && numbers[i] < numbers[i+1]) {
//     console.log(numbers[i]);
//   }
// }

// 3.
// let sum= 0;

// for( let i=0; i<numbers.length; i++) {
//   sum += numbers[i];
// }

// let avg = sum/numbers.length;
// console.log(avg);
// document.write( "<br>");

// let sumSqDiff = 0;

// for( let i=0; i<numbers.length; i++) {
//   sumSqDiff += (numbers[i] - avg)**2;
// }

// console.log(sumSqDiff);

// 4.
// let sum= 0;

// for( let i=0; i<numbers.length; i++) {
//   sum += numbers[i];
// }

// let avg = sum/numbers.length;
// console.log(avg);
// document.write( "<br>");

// let sumSqDiff = 0;

// for( let i=0; i<numbers.length; i++) {
//   sumSqDiff += (numbers[i] - avg)**2;
// }

// console.log(sumSqDiff);

// const variance = sumSqDiff / numbers.length;
// console.log(variance);


// ADVANCE LEVEL
// 1.
// let currentChunkLength= 1;
// let longestChunkSoFar= 1;

// for (let i = 1; i < numbers.length; i++)
// {
//   if (numbers[i] > numbers[i - 1])
//   {
//     currentChunkLength++; //4
//   }
//   else
//   {
//     if (currentChunkLength>longestChunkSoFar)
//     {
//       longestChunkSoFar = currentChunkLength;
//     }
//     currentChunkLength = 1;
//   }
// }
// if( currentChunkLength>longestChunkSoFar)
// {
//   longestChunkSoFar= currentChunkLength;
// }

// console.log(longestChunkSoFar);
