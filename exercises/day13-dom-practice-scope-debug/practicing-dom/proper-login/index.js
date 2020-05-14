'use script';


const buttonClick = () => {
    // const userName = document.querySelector('#username');
    const password = document.querySelector('#password');
    const enteredPassword = password.value;
    const savedPassword = 'petalsforarmor'

    if (enteredPassword === savedPassword) {
        alert('Welcome to your page *wink*');
    }   else {
        alert('Fuck off!');
    }
}