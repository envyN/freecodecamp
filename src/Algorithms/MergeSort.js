// https://learn.freecodecamp.org/coding-interview-prep/algorithms/implement-quick-sort

// Algorithms: Implement Quick Sort
// Here we will move on to an intermediate sorting algorithm: quick sort.
// Quick sort is an efficient, recursive divide-and-conquer approach to sorting an array.
// In this method, a pivot value is chosen in the original array.
// The array is then partitioned into two subarrays of values less than and greater than the pivot value.
// We then combine the result of recursively calling the quick sort algorithm on both sub-arrays.
// This continues until the base case of an empty or single-item array is reached, which we return.
// The unwinding of the recursive calls return us the sorted array.
//
// Quick sort is a very efficient sorting method, providing O(nlog(n)) performance on average.
// It is also relatively easy to implement.
// These attributes make it a popular and useful sorting method.
//
// Instructions: Write a function mergeSort which takes an array of integers as input
// and returns an array of these integers in sorted order from least to greatest.
// While the choice of the pivot value is important,
// any pivot will do for our purposes here.
// For simplicity, the first or last element could be used.

// Best youtube link to explain process: https://www.youtube.com/watch?v=COk73cpQbFQ


function Logger(number, result) {
    console.log(`#${number} : ${JSON.stringify(result)}`);
}

function merge(leftArr, rightArr) {
    const mergedArr = [];
    let l           = 0;
    let r           = 0;
    while (l < leftArr.length && r < rightArr.length) {
        // while one of the pointers reaches the end
        // push the lower element to merged and increment pointer
        if (leftArr[l] < rightArr[r]) {
            mergedArr.push(leftArr[l]);
            l++;
        } else if (leftArr[l] > rightArr[r]) {
            mergedArr.push(rightArr[r]);
            r++;
        } else {
            // if both are same, push both and increment both
            mergedArr.push(leftArr[l]);
            mergedArr.push(rightArr[r]);
            l++;
            r++;
        }
    }
    // if left has elements remaining push all to merged since right must have finished
    if (l < leftArr.length) {
        mergedArr.push(...leftArr.slice(l));
    }
    // if right has elements remaining push all to merged since left must have finished
    if (r < rightArr.length) {
        mergedArr.push(...rightArr.slice(r));
    }
    // return merged array
    return mergedArr;
}

function mergeSort(array, start, end) {
    //  For starters, assign start to 0 if not passed
    start = (start !== undefined) ? start : 0;
    //  For starters, assign end to length-1 if not passed
    end   = (end !== undefined) ? end : array.length - 1;
    // the recursion breaker condition start should be less than end.
    // if start ==end, means one element in sub-arr, or
    // if start>end, there are no elements in sub-arr
    if (start < end) {
        const midIndex = start + Math.floor((end - start) / 2);
        // mergeSort left sub-arr
        const leftArr  = mergeSort(array, start, midIndex);
        // mergeSort right sub-arr
        const rightArr = mergeSort(array, midIndex + 1, end);
        return merge(leftArr, rightArr);
    }
    return [array[start]];
}

// test array:
Logger(1, mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));
Logger(2, mergeSort([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
Logger(3, mergeSort([1, 2, 3, 4, 5, 6, 7, 8, 9]));
Logger(4, mergeSort([9, 8, 7, 6, 5, 4, 3, 2, 1]));
Logger(5, mergeSort([9, 3, 7, 6, 9, 4, 3, 7, 1]));