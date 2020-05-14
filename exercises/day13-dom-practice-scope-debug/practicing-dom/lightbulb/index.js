'use script';

const bulbFunction = () => {
    const bulb = document.querySelector('#bulb');

    if (bulb.className === "bulbOff") {
        bulb.className = "bulbOn";
    }   else {
        bulb.className = "bulbOff";
    }
}