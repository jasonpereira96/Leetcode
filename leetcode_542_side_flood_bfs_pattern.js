Array.prototype.isEmpty = function () { return this.length === 0; };
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */

//used the idea from Leetcode's Pacfic Atlantic water flow
//of doing the flooding BFS from the sides

var updateMatrix = function (matrix) {
    const ROWS = matrix.length, COLS = matrix[0].length;
    var grid = new Array(ROWS);
    for (var row = 0; row < ROWS; row++) {
        grid[row] = new Array(COLS).fill(-1);
    }

    var queue = [];
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    for (var row = 0; row < grid.length; row++) {
        for (var col = 0; col < grid[0].length; col++) {
            if (matrix[row][col] === 0) {
                grid[row][col] = 0;
                queue.push({
                    row, col
                });
            }
        }
    }
    var distance = 1;

    while (!queue.isEmpty()) {
        var tempQueue = [];

        for (var node of queue) {
            var { row, col } = node;

            for (var direction of directions) {
                var neighbourRow = row + direction[0], neighbourCol = col + direction[1];

                if (isValid(neighbourRow, neighbourCol) && grid[neighbourRow][neighbourCol] === -1) {
                    grid[neighbourRow][neighbourCol] = distance;
                    tempQueue.push({
                        row: neighbourRow, col: neighbourCol
                    });
                }
            }
        }
        queue = tempQueue;
        distance++;
    }

    return grid;

    function isValid(row, col) {
        return 0 <= row && row < ROWS && 0 <= col && col < COLS;
    }

};