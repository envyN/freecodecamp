// https://learn.freecodecamp.org/coding-interview-prep/project-euler/problem-6-sum-square-difference/
//
// Project Euler: Problem 6: Sum square difference
// The sum of the squares of the first ten natural numbers is,
//
// 12 + 22 + ... + 102 = 385
//
// The square of the sum of the first ten natural numbers is,
//
// (1 + 2 + ... + 10)2 = 552 = 3025
//
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
//
// Find the difference between the sum of the squares of the first n natural numbers and the square of the sum.

// sumSquareDifference(10) should return 2640.
// sumSquareDifference(20) should return 41230.
// sumSquareDifference(100) should return 25164150.

function Logger(number, result) {
    console.log(`#${number} : ${JSON.stringify(result)}`);
}

function sumSquareDifference(n) {
    // Good luck!
    let sumSquare = 0;
    let squareSum = 0;
    while (n > 0) {
        squareSum += n ** 2;
        sumSquare += n;
        n--;
    }
    sumSquare = sumSquare ** 2;
    return Math.abs(sumSquare - squareSum);
}


Logger(1, sumSquareDifference(10));
Logger(2, sumSquareDifference(20));
Logger(3, sumSquareDifference(100));