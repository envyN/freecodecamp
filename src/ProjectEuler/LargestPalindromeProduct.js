// https://learn.freecodecamp.org/coding-interview-prep/project-euler/problem-4-largest-palindrome-product

// Project Euler: Problem 4: Largest palindrome product
// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
//
// Find the largest palindrome made from the product of two n-digit numbers.
//
// largestPalindromeProduct(2) should return 9009.
// largestPalindromeProduct(3) should return 906609.

function Logger(number, result) {
    console.log(`#${number} : ${JSON.stringify(result)}`);
}

function isPalindrome(n) {
    return '' + n === ('' + n).split('').reverse().join('');
}

function largestPalindromeProduct(n) {
    let lowest        = 10 ** (n - 1);
    let highest       = 10 ** n - 1;
    let n1            = highest;
    const palindromes = [];
    let count         = 0;
    while (n1 >= lowest) {
        let n2 = n1;
        while (n2 >= lowest) {
            ++count;
            const p = n1 * n2;
            if (isPalindrome(p)) {
                lowest = n2;
                palindromes.push(p);
            }
            --n2;
        }
        --n1;
    }
    return palindromes.sort()[palindromes.length - 1] || 0;
}

Logger(1, largestPalindromeProduct(2));
Logger(2, largestPalindromeProduct(3));
