'use script';

const emailFromLogin = (name) => name + '@codeboot.com';

const loginFromName = (firstName, lastName) => {
    const part1 = lastName.substr(0,5);
    const part2 = firstName.substr(0,3);
    return part1.toLowerCase() + part2.toLowerCase();
}

const emailFromName = (firstName, lastName) => {
    const login = loginFromName (firstName, lastName);
    return emailFromLogin(login);
}