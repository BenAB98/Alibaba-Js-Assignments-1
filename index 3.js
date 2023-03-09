"use strict"

function firstLetterToUpperCase(input) {
    let upper = "";
    let ascii = input.charCodeAt(0);
    const array = input.split("");
    if (ascii >= 97 && ascii <= 122) {
        ascii -= 32;
        upper = String.fromCharCode(ascii);
        array.shift();
        array.unshift(upper);
    }
    return array.join("");
}

console.log(firstLetterToUpperCase("ali"));