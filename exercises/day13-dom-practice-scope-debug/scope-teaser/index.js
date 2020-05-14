'use script';

function run() {
    // "run" function scope
    const two = 2;
    let count = 0;
    function run2() {}
  
    console.log(two);   // 2
    console.log(count); // 0
    console.log(run2);  // function
  }