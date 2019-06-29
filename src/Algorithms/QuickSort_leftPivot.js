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
// Instructions: Write a function quickSort which takes an array of integers as input
// and returns an array of these integers in sorted order from least to greatest.
// While the choice of the pivot value is important,
// any pivot will do for our purposes here.
// For simplicity, the first or last element could be used.

// Best youtube link to explain process: https://www.youtube.com/watch?v=COk73cpQbFQ


function Logger(number, result) {
    console.log(`#${number} : ${JSON.stringify(result)}`);
}

function swap(arr, x, y) {
    [arr[x], arr[y]] = [arr[y], arr[x]];
}

function partitionWithLeftPivot(array, startIndex, endIndex) {
    // console.log([].concat(array).slice(startIndex, endIndex + 1));
    // for simplicity take left most as pivotValue which needs to get the correct position in sub-arr
    const pivot = array[startIndex];
    // console.log('pivot', pivot);
    // start with assuming startIndex+1 is pivotPosition assuming all elements to right in sub-arr are greater than pivot
    let pivotIndex = endIndex;
    for (let i = endIndex; i > startIndex; i--) {
        // for every element in arr, if val is less than pivot, push to left of pivotIndex and then
        // increment pivotIndex to maintain that all els to left of pivotIndex are <=pivot
        if (array[i] > pivot) {
            swap(array, i, pivotIndex);
            --pivotIndex;
        }
    }
    // at end of loop, pivotIndex would be pointing to element in arr which is the least val greater than pivot
    // so swap that with endIndex to bring pivot to correct position and push the element at pivotindex to end
    swap(array, pivotIndex, startIndex);
    // console.log('pivotIndex', pivotIndex);
    // console.log([].concat(array).slice(startIndex, endIndex + 1));
    // console.log('------------');
    return pivotIndex;
}

function quickSort(array, start, end) {
    //  For starters, assign start to 0 if not passed
    start = (start !== undefined) ? start : 0;
    //  For starters, assign end to length-1 if not passed
    end   = (end !== undefined) ? end : array.length - 1;
    // the recursion breaker condition start should be less than end.
    // if start ==end, means one element in sub-arr, or
    // if start>end, there are no elements in sub-arr
    if (start < end) {
        let pivotIndex = partitionWithLeftPivot(array, start, end);
        // quicksort left sub-arr
        quickSort(array, start, pivotIndex - 1);
        // quickSort right sub-arr
        quickSort(array, pivotIndex + 1, end);
    }
    return array;
}

// test array:
Logger(1, quickSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));
Logger(2, quickSort([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
Logger(3, quickSort([1, 2, 3, 4, 5, 6, 7, 8, 9]));
Logger(4, quickSort([9, 8, 7, 6, 5, 4, 3, 2, 1]));
Logger(5, quickSort([9, 3, 7, 6, 9, 4, 3, 7, 1]));