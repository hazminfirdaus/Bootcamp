'use script';

const age = Number(prompt('Enter your age: '));

const checkAge = (age) => {
    const age = 5;
    if (age >= 18) {
        const adulthood = age - 18;

        if (adulthood > 12) {
        console.log(adulthood);
        console.log(age);
        }
    }
}

console.log(adulthood);