// https://learn.freecodecamp.org/coding-interview-prep/algorithms/pairwise

// Algorithms: Pairwise
// Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.
//
// You may use multiple pairs that have the same numeric elements but different indices.
// Each pair should use the lowest possible available indices.
// Once an element has been used it cannot be reused to pair with another element.
// For instance, pairwise([1, 1, 2], 3) creates a pair [2, 1] using the 1 at indice 0 rather than the 1 at indice 1, because 0+2 < 1+2.
//
// For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11].
// We can then write out the array with their indices and values.
//
//     Index	0	1	2	3	4
//     Value	7	9	11	13	15
//
// Below we'll take their corresponding indices and add them.
//
// 7 + 13 = 20 → Indices 0 + 3 = 3
// 9 + 11 = 20 → Indices 1 + 2 = 3
// 3 + 3 = 6 → Return 6

// pairwise([1, 4, 2, 3, 0, 5], 7) should return 11.
// pairwise([1, 3, 2, 4], 4) should return 1.
// pairwise([1, 1, 1], 2) should return 1.
// pairwise([0, 0, 0, 0, 1, 1], 1) should return 10.
// pairwise([], 100) should return 0.

function Logger(number, result) {
    console.log(`#${number} : ${JSON.stringify(result)}`);
}

function pairwise(arr, arg) {
    const valMap = {};
    arr.forEach((val, index) => {
        const indicesArr = valMap[val];
        if (!indicesArr) {
            valMap[val] = [index];
        } else {
            valMap[val].push(index);
        }
    });
    let resultSum = 0;
    arr.forEach((val, index) => {
        const indicesArr     = valMap[val];
        const comp           = arg - val;
        const compIndicesArr = valMap[comp];
        if (compIndicesArr && compIndicesArr.length && indicesArr.length && compIndicesArr[0] !== index) {
            resultSum += index + compIndicesArr[0];
            indicesArr.shift();
            compIndicesArr.shift();
        }
    });
    return resultSum;
}

Logger(1, pairwise([1, 4, 2, 3, 0, 5], 7));
Logger(1, pairwise([1, 3, 2, 4], 4));
Logger(1, pairwise([1, 1, 1], 2));
Logger(1, pairwise([0, 0, 0, 0, 1, 1], 1));
Logger(1, pairwise([], 100));