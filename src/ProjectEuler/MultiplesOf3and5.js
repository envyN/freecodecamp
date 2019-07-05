// https://learn.freecodecamp.org/coding-interview-prep/project-euler/problem-1-multiples-of-3-and-5/
//
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Find the sum of all the multiples of 3 or 5 below the provided parameter value number.

// multiplesOf3and5(1000) should return 233168.
// multiplesOf3and5(49) should return 543.
// multiplesOf3and5(19564) should return 89301183.

function Logger(number, result) {
    console.log(`#${number} : ${JSON.stringify(result)}`);
}

function multiplesOf3and5(n) {
    // Good luck!
    let sumOfMultiples = 0;
    while (n > 0) {
        n--;
        if (n % 3 === 0 || n % 5 === 0) {
            sumOfMultiples += n;
        }
    }
    return sumOfMultiples;
}


Logger(1, multiplesOf3and5(1000));
Logger(2, multiplesOf3and5(49));
Logger(3, multiplesOf3and5(19564));