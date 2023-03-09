"use strict"

function averageCalculator(...args) {
    const marks = args;
    let sum = 0;
    args.forEach((index) => {
        sum += index;
    })
    return sum / marks.length;
}

console.log(averageCalculator(18, 12, 15, 19, 11, 6, 8, 7.75, 4.25, 13.75));