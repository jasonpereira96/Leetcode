class DisjointSet {
    constructor(n) {
        this.parents = new Array(n).fill(-1);
    }
    /**
     * Returns the representative value of the set which x belongs to
     * @param {number} x 
     */
    find(x) {
        //the parent value is negative, so it itself must be the representative
        if (this.parents[x] < 0) {
            return x;
        }
        var representative = this.find(this.parents[x]);
        this.parents[x] = representative;
        return representative;
    }
    /**
     * Performs union of the sets of x and y
     * @param {number} x 
     * @param {number} y 
     */
    union(x, y) {
        var xRoot = this.find(x);
        var yRoot = this.find(y);
        if (xRoot === yRoot) {
            return;
        }                //1                   7
        if (this.parents[xRoot] < this.parents[yRoot]) {
            var temp = this.parents[yRoot]; //temp = -2
            this.parents[yRoot] = xRoot; //parents[7] = 1
            this.parents[xRoot] += temp;
        } else {
            var temp = this.parents[xRoot]; //temp = -2
            this.parents[xRoot] = yRoot; //parents[7] = 1
            this.parents[yRoot] += temp;
        }
    }
    /**
     * Returns whether the x and y are in the same set
     * @param {number} x 
     * @param {number} y 
     * @returns {boolean}
     */
    isConnected(x, y) {
        return this.find(x) === this.find(y);
    }
    count() {
        return this.parents.reduce((acc, val) => {
            return (val < 0) ? acc + 1 : acc;
        }, 0);
    }
}

/**
 * This is an efficient way to find which are the INDIVIDUAL NODES IN EACH CONNECTED COMPONENT of the Union-Find
 * data structure. (DSU)
 * The logic is such that once all nodes are added to the DSU and no more union() operations will be performed, then
 * the representative of each element is now fixed. Since only the union() operation changes the representative (union by weight)
 * 
 * So now we can maintain as HashMap of representative -> List of nodes
 * 
 * Call the find() operation for each node, and get the representative of it.
 * Add it to its respective list in the hashmap. (If there is no list of this representative, make a new list) 
 */

const NUM_NODES = 10;
var disjointSet = new DisjointSet(NUM_NODES);

var edges = [
    [0, 1],
    [1, 2],
    [4, 5],
    [6, 7],
    [8, 9],
    [0, 9]
];

for (var edge of edges) {
    var [node1, node2] = edge;
    disjointSet.union(node1, node2);
}

var connectedComponents = {};
for (var node = 0; node < NUM_NODES; node++) {
    var representative = disjointSet.find(node);
    if (connectedComponents[representative] === undefined) {
        connectedComponents[representative] = [];
    }
    connectedComponents[representative].push(node);
}

console.log(connectedComponents);

/*
Output: 
{
    1: [0, 1, 2, 8, 9]
    3: [3]
    5: [4, 5]
    7: [6, 7]
}
*/