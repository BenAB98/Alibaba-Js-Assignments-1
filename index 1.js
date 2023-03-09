"use strict"

function checkNumber(number) {
    if (typeof number !== "number") throw new Error("Invalid input! Please enter a number");
    if (number % 2 === 0) return "Even";
    else return "Odd";
}
try {
    console.log(checkNumber(244));
} catch (error) {
    console.log(error);
    // alert(error)
}