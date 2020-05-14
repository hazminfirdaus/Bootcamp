'use script';

// const greet = () => {
//   console.log('bedonkadonk')
// };

// setTimeout(greet, 5000);

// let count = 0;

// const timerId = setInterval( () => {
//   count += 1;
//   console.log(count + ': bedonkadonk');
// }, 2000);

// const stop = () => {
//   clearInterval(timerId);
// };



const handleClick = () => {
  console.log('squigglywiggly');
}

const btnElm = document.querySelector('#button');
btnElm.addEventListener('click', (e) => {

  console.log('squigglywiggly');
});


// document.addEventListener('keyup', (e) => {
//    if (e.code === 'Space') {
//     console.log('space');
//    }
// });

const handleKeyUp = (e) => {
  if (e.code === 'Space') {
   console.log('space');
  }
};


// console.log = 'it works';

// const greet = (name) => {
//   return 'Hello ' + name;
// };

// const apply = (fn, x) => {
//   return fn(x);
// }; 

// console.log(
//   apply(greet, 'Sue')
// );



// const func = (x) => x * x;

// const bar = (fn) => {
//   return fn(6);
// };

// console.log(
//   bar(func)
// );

// console.log(
//   bar((bedonkadonk) => bedonkadonk / 2)
// );

// const bar = (fn, s) => {
//   return fn(s) + fn(s * 2);
// };

// console.log(
//   bar((squiggly) => squiggly + 3, 5)
// );



