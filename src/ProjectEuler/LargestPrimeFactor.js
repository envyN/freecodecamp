// https://learn.freecodecamp.org/coding-interview-prep/project-euler/problem-3-largest-prime-factor

// Project Euler: Problem 3: Largest prime factor
// The prime factors of 13195 are 5, 7, 13 and 29.
//
// What is the largest prime factor of the given number?
// largestPrimeFactor(2) should return 2.
// largestPrimeFactor(3) should return 3.
// largestPrimeFactor(5) should return 5.
// largestPrimeFactor(7) should return 7.
// largestPrimeFactor(13195) should return 29.
// largestPrimeFactor(600851475143) should return 6857.

function Logger(number, result) {
    console.log(`#${number} : ${JSON.stringify(result)}`);
}

const myPrimes = [];

function isPrime(n) {
    let f = 2;
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

function largestPrimeFactor(n) {
    // Good luck!
    if (n < 1) {
        return 0;
    }
    const sr               = Math.ceil(Math.sqrt(n));
    let f                  = myPrimes[myPrimes.length - 1] || 1;
    let largestPrimeFactor = 1;
    myPrimes.forEach(prime => {
        if (n % prime === 0) {
            largestPrimeFactor = prime;
        }
    });
    while (f <= sr) {
        if (n % f === 0 && isPrime(f)) {
            largestPrimeFactor = f;
        }
        ++f;
    }

    return largestPrimeFactor === 1 ? n : largestPrimeFactor;
}

Logger(1, largestPrimeFactor(2));
Logger(2, largestPrimeFactor(3));
Logger(3, largestPrimeFactor(5));
Logger(4, largestPrimeFactor(7));
Logger(5, largestPrimeFactor(13195));
Logger(6, largestPrimeFactor(600851475143));