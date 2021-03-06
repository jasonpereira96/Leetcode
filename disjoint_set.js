class DisjointSet {
    /**
     * 
     * @param {number} n Number of nodes
     */
    constructor(n) {
        this.parents = new Array(n).fill(-1);
    }

    /**
     * Returns the representative value of the set which x belongs to
     * @param {number} x 
     * @returns {number}
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
     * Returns whether the elements x and y are in the same set
     * @param {number} x 
     * @param {number} y 
     * @returns {boolean} Returns whether the elements x and y are in the same set
     */
    isConnected(x, y) {
        return this.find(x) === this.find(y);
    }

    /**
     * Returns the number of individual disjoint sets (connected components)
     * @returns {number}
     */
    count() {
        return this.parents.reduce((acc, val) => {
            return (val < 0) ? acc + 1 : acc;
        }, 0);
    }
}

/**
 * Implementation based on Abdul Bari's video. (https://www.youtube.com/watch?v=wU6udHRIkcc)
 * He used union by weight and path compression to improve find()/union() efficiency
 */

var disjointSet = new DisjointSet(8);
console.log(disjointSet.find(2));
console.log(disjointSet.isConnected(2, 3));
console.log(disjointSet.isConnected(3, 3));
console.log(disjointSet.isConnected(5, 3));
disjointSet.union(0, 1);
disjointSet.union(0, 1);
disjointSet.union(2, 1);
disjointSet.union(3, 1);
disjointSet.union(2, 3);

console.log(disjointSet.isConnected(0, 1));
console.log(disjointSet.isConnected(1, 1));
console.log(disjointSet.isConnected(5, 1));
console.log(disjointSet.isConnected(6, 1));
console.log(disjointSet.isConnected(3, 2));



