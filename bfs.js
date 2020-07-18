/**
 * 
 * MY first successful BFS by myself
 * yaaaaaaaaaaaaaaay
 * Solution of https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */
var distanceK = function (root, target, K) {
    var adjList = new Array(501);
    var result = [];
    var nodeCount = 0;

    for (var i = 0; i < adjList.length; i++) {
        adjList[i] = new Array();
    }

    inorder(root); //build adj list

    function inorder(root) {
        if (!root) {
            return;
        }
        inorder(root.left, root);
        nodeCount++;
        if (root.left) {
            adjList[root.val].push(root.left.val);
            adjList[root.left.val].push(root.val);
        }
        if (root.right) {
            adjList[root.val].push(root.right.val);
            adjList[root.right.val].push(root.val);
        }
        inorder(root.right, root);
    }
    bfs(target.val);

    function bfs(start) {
        var queue = [];
        var visited = new Array(501).fill(false);

        queue.push({
            value: start,
            distanceFromTarget: 0
        });

        while (queue.length > 0) {
            var nodeObj = queue.shift();

            if (nodeObj.distanceFromTarget === K) {
                result.push(nodeObj.value);
            }
            visited[nodeObj.value] = true;

            adjList[nodeObj.value].forEach(value => {
                if (visited[value] === false) {
                    queue.push({
                        value,
                        distanceFromTarget: nodeObj.distanceFromTarget + 1
                    });
                }
            });
        }
    }
    return result;
};

var _0 = new TreeNode(0);
var _1 = new TreeNode(1);
var _2 = new TreeNode(2);
var _3 = new TreeNode(3);
var _4 = new TreeNode(4);
var _5 = new TreeNode(5);
var _6 = new TreeNode(6);
var _7 = new TreeNode(7);
var _8 = new TreeNode(8);


_3.left = _5;
_3.right = _1;
_5.left = _6;
_5.right = _2;
_1.left = _0;
_1.right = _8;
_2.left = _7;
_2.right = _4;


distanceK(_3, _5, 2);

