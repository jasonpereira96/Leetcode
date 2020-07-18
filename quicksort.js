/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    quicksort(nums);
    return nums;
};

function quicksort(array, low, high) {
    if (low === undefined && high === undefined) {
        quicksort(array, 0, array.length - 1);
    }
    if (low < high) {
        var pivotIndex = partition(array, low, high);
        quicksort(array, low, pivotIndex - 1);
        quicksort(array, pivotIndex + 1, high);
    }
}

function partition(array, low, high) {
    var pivot = array[low];
    var pivotIndex = low;
    var lowPointer = low;
    var highPointer = high;
    while (lowPointer < highPointer) {
        while (array[lowPointer] <= pivot) {
            lowPointer++;
        }
        while (array[highPointer] > pivot) {
            highPointer--;
        }
        if (lowPointer < highPointer) {
            var temp = array[lowPointer];
            array[lowPointer] = array[highPointer];
            array[highPointer] = temp;
        }

    }
    var temp = array[low];
    array[low] = array[highPointer];
    array[highPointer] = temp;

    return highPointer;
}

console.log(sortArray([5, 2, 3, 1]))