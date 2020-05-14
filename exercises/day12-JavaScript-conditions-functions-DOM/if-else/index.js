'use script';

const age = Number(prompt('Insert your age: '));

if (age >= 18) {
  document.write('Welcome');
} else {
  const remains = 18 -age;

    if (remains <= 3) {
    document.write('Almost there');
  } else if (remains <=6) {
    document.write('Wait for awhile'); 
  } else {
    document.write ('Run to your mama');
  }
}