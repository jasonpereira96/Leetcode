// https://leetcode.com/problems/subsets/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    var vector = new Array(nums.length).fill(undefined);
    var vectors = new Array(2 ** nums.length);
    var resultPointer = 0;
    var subsets = new Array(2 ** nums.length);
    backtrack(vector, 0);
    var k=0;
    for (let vector of vectors) {
        var subset = [];
        for (var i=0;i<vector.length;i++) {
            if (vector[i] === 1) {
                subset.push(nums[i])
            }
        }
        subsets[k++] = subset;
    }
    return subsets;

    function backtrack(vector, k) {
        if (k === nums.length) {
            vectors[resultPointer++] = vector.slice();
        } else {
            vector[k] = 0;
            backtrack(vector, k + 1);
            //unmakeMove()
            vector[k] = 1;
            backtrack(vector, k + 1);
            //unmakeMove()            
        }
    }
};

subsets([1,2,3])