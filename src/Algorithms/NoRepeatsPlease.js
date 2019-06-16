// https://learn.freecodecamp.org/coding-interview-prep/algorithms/no-repeats-please

// Algorithms: No Repeats Please
// Return the number of total permutations of the provided string that don't have repeated consecutive letters.
// Assume that all characters in the provided string are each unique.
//
// For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa),
// but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.
//
// permAlone("aab") should return a number.
//     Passed
// permAlone("aab") should return 2.
// Passed
// permAlone("aaa") should return 0.
// Passed
// permAlone("aabb") should return 8.
// Passed
// permAlone("abcdefa") should return 3600.
// Passed
// permAlone("abfdefa") should return 2640.
// Passed
// permAlone("zzzzzzzz") should return 0.
// Passed
// permAlone("a") should return 1.
// Passed
// permAlone("aaab") should return 0.
// Passed
// permAlone("aaabb") should return 12.

function Logger(number, result) {
    console.log(`#${number} : ${JSON.stringify(result)}`);
}

function insertChar(char, arr) {
    const results = [];
    for (let i = 0; i <= arr.length; i++) {
        const copy = arr.slice();
        copy.splice(i, 0, char);
        results.push(copy);
    }
    return results;
}

function permAlone(str) {
    const chars        = str.split('');
    let resultPermsArr = [[]];
    for (let i = 0; i < chars.length; i++) {
        const char          = chars[i];
        let resultPermsArr2 = [];
        resultPermsArr.forEach(rArr => {
            resultPermsArr2 = [...resultPermsArr2, ...insertChar(char, rArr)];
        });
        resultPermsArr = resultPermsArr2;
    }
    const noRepeatResults = [];
    resultPermsArr.forEach(candidate => {
        if (candidate.length > 1) {
            let noRepeat = true;
            for (let i = 0; i < candidate.length; i++) {
                let c1 = candidate[i];
                let c2 = candidate[i + 1];
                if (c1 === c2) {
                    noRepeat = false;
                    break;
                }
            }
            if (noRepeat) {
                noRepeatResults.push(candidate);
            }
        } else {
            noRepeatResults.push(candidate);
        }
    });
    return noRepeatResults.length;

}

Logger(1, permAlone('aab'));
Logger(2, permAlone("aaa"));
Logger(3, permAlone("aabb"));
Logger(4, permAlone('abcdefa'));
Logger(5, permAlone('abfdefa'));
Logger(6, permAlone('zzzzzzzz'));
Logger(7, permAlone('a'));
Logger(8, permAlone('aaab'));
Logger(9, permAlone('aaabb'));