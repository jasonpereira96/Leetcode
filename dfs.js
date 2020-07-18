//

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {

    var nodesDiscovered = new Array(numCourses).fill(false);
    var visited = new Array(numCourses).fill(false);
    var adjList = new Array(numCourses);
    var backEdge = false;

    for (var i = 0; i < adjList.length; i++) {
        adjList[i] = [];
    }

    for (var edge of prerequisites) {
        var from = edge[0], to = edge[1];
        adjList[from].push(to);
    }
    var stack = [];
    for (var i = 0; i < nodesDiscovered.length; i++) {
        var node = nodesDiscovered[i];
        if (node === false) {
            visited.fill(false);
            dfs(i);
        }
    }
    function dfs(node) {
        stack.push(node);
        for (var adjNode of adjList[node]) {
            if (!visited[adjNode]) {
                nodesDiscovered[adjNode] = true;
                visited[adjNode] = true;
                dfs(adjNode);
            } else {
                if (stack.includes(adjNode));
                backEdge = true;
            }
        }
        stack.pop(node);
    }

    return !backEdge;
};

canFinish(3, [[0,1],[0,2],[1,2]])