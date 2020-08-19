/*
For array questions like these which reqiure a constant space, O(n) solution, this is a rather common pattern to follow.
Usually, these kind of problem will have some constraint/will reduce to the constraint that the values will range 
from 1 to N.
Then only can this form of hashing be implemented.

The idea is based on using the original array as a hashmap/hashtable

Since we have to use constant space, we cannot use any other array/hashmap to store auxilliary information
The only option remaining is to store auxilliary data in the original array itself.

Obviously, we cannot overwrite the orginal values of the array itself, because doing so will result in 
loss of important information.

We have 2 options to store the auxillary data: 

1. Either change the sign of the data at the index of value itself.
AND/OR
2. Change the magnitude to some value that we can recover the original data from.

Ex. of 1. -  here we mark the valueAtIndex as -ve to mark that we have seen this number once.
Ex. of 2. - in function 1, we add a fixed constant (N + 1) to the data to mark that we have seen it twice.
We can recover the original data by doing %(N+1)

Using these rules we can mark the value at index to whatever its current state should be.


        |        +      |  -
---------------------------------------
  <N+1  | never seen    | seen once
---------------------------------------
  >N+1  | seen twice    |


Note: Also see https://leetcode.com/problems/first-missing-positive/
*/ 

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
    const N = nums.length;
    for (var index = 0; index < nums.length; index++) {
        var number = Math.abs(nums[index]) % (N + 1);
        var valueAtIndex = nums[number - 1];

        var sign = valueAtIndex > 0;
        var mag = Math.abs(valueAtIndex) > N;

        var neverSeen = sign && mag < N;
        var seenOnce = !sign && mag < N;
        var seenTwice = sign && mag > N;

        if (neverSeen) {
            nums[number - 1] = -nums[number - 1];
        } else if (seenOnce) {
            nums[number - 1] = -nums[number - 1];
            nums[number - 1] += N + 1;
        }
    }
    var result = [];

    for (var index = 0; index < nums.length; index++) {
        var valueAtIndex = nums[index];
        var sign = valueAtIndex > 0;
        var mag = Math.abs(valueAtIndex);
        var seenTwice = sign && mag > N + 1;

        if (seenTwice) {
            result.push(index + 1);
        }
    }

    return result;
};

/*
Here, three states are actually unnecessary if we add the number immediately to the result
as soon as it we've seen it twice.

Thus, we can get by with only 2 states.

IF we only use 2 states, then we don't need to worry about changing the magnitude
*/ 


//better version
var findDuplicates = function (nums) {
    var result = [];

    for (var index = 0; index < nums.length; index++) {
        var number = Math.abs(nums[index]);
        var valueAtIndex = nums[number - 1];

        var neverSeen = valueAtIndex > 0;

        if (neverSeen) {
            nums[number - 1] = -nums[number - 1];
        } else {
           result.push(number);
        }
    }

    return result;
};

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));

