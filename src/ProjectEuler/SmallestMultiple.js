// https://learn.freecodecamp.org/coding-interview-prep/project-euler/problem-5-smallest-multiple
//
// Project Euler: Problem 5: Smallest multiple
// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
//
//     What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?

// smallestMult(5) should return 60.
// smallestMult(7) should return 420.
// smallestMult(10) should return 2520.
// smallestMult(13) should return 360360.
// smallestMult(20) should return 232792560.

function Logger(number, result) {
    console.log(`#${number} : ${JSON.stringify(result)}`);
}

function primeMapper(n) {
    const map   = {};
    let divisor = 2;
    while (n && n > 1) {
        if (n % divisor === 0) {
            map[divisor] = map[divisor] ? map[divisor] + 1 : 1;
            n            = n / divisor;
        } else {
            ++divisor;
        }
    }
    return map;
}

function smallestMult(n) {
    const primeFactorsMap = {};
    let smallestMultiple  = 1;
    if (n == 1) {
        return 1;
    }
    while (n > 1) {
        const primeN = primeMapper(n);
        Object.keys(primeN).forEach(prime => {
            const factor = primeN[prime];
            if (!primeFactorsMap[prime] || primeFactorsMap[prime] < factor) {
                primeFactorsMap[prime] = factor;
            }
        });
        --n;
    }
    Object.keys(primeFactorsMap).forEach(prime => {
        const factor = primeFactorsMap[prime];
        smallestMultiple *= (prime ** factor);
    });
    return smallestMultiple;
}


Logger(1, smallestMult(5));
Logger(2, smallestMult(7));
Logger(3, smallestMult(10));
Logger(4, smallestMult(13));
Logger(5, smallestMult(20));