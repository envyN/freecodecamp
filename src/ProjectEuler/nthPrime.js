// https://learn.freecodecamp.org/coding-interview-prep/project-euler/problem-7-10001st-prime
//
// Project Euler: Problem 7: 10001st prime
// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
//
// What is the nth prime number?

// nthPrime(6) should return 13.
// nthPrime(10) should return 29.
// nthPrime(100) should return 541.
// nthPrime(1000) should return 7919.
// nthPrime(10001) should return 104743.

function Logger(number, result) {
    console.log(`#${number} : ${JSON.stringify(result)}`);
}


function nthPrime(n) {
    function isPrime(n) {
        const myPrimes = [];
        let f          = 2;
        while (f < n) {
            if (n % f === 0) {
                return false;
            }
            ++f;
        }
        if (myPrimes.indexOf(n) === -1) {
            myPrimes.push(n);
        }
        return true;
    }

    let primeIndex = 1;
    let num        = 3;
    if (n === 1) {
        return 2;
    }
    while (primeIndex !== n) {
        if (isPrime(num)) {
            primeIndex++;
        }
        num += 2;
    }
    return num - 2;
}


Logger(1, nthPrime(6));
Logger(2, nthPrime(10));
Logger(3, nthPrime(100));
Logger(4, nthPrime(1000));
Logger(5, nthPrime(10001));