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
}

var disjointSet = new DisjointSet(8);
console.log(disjointSet.find(2));
console.log(disjointSet.isConnected(2,3));
console.log(disjointSet.isConnected(3,3));
console.log(disjointSet.isConnected(5,3));
disjointSet.union(0,1);
disjointSet.union(0,1);
disjointSet.union(2,1);
disjointSet.union(3,1);
disjointSet.union(2,3);

console.log(disjointSet.isConnected(0,1));
console.log(disjointSet.isConnected(1,1));
console.log(disjointSet.isConnected(5,1));
console.log(disjointSet.isConnected(6,1));
console.log(disjointSet.isConnected(3,2));



