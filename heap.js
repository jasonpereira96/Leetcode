class PriorityQueue {
    constructor() {
        this.heap = [];
        this.count = 0;
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    getLeftChildIndex(index) {
        return 2*index + 1;
    }
    getRightChildIndex(index) {
        return 2*index + 2;
    }
    bubbleUp(index) {
        const { heap } = this;
        let currentIndex = index;
        let parentIndex = this.getParentIndex(currentIndex);
        while (currentIndex > 0 && heap[currentIndex] < heap[parentIndex]) {
            this.swap(heap, currentIndex, parentIndex);
            currentIndex = parentIndex;
            parentIndex = this.getParentIndex(currentIndex);
        }
    }
    bubbleDown(index) {
        const { heap } = this;
        let currentIndex = index;
        let nodeValue = heap[currentIndex];
        let leftChildIndex = this.getLeftChildIndex(currentIndex);
        let rightChildIndex = this.getRightChildIndex(currentIndex);
        
        let leftChild = heap[leftChildIndex];
        let rightChild = heap[rightChildIndex];

        let rightChildIndexValid = rightChildIndex < this.count;
        let leftChildIndexValid = leftChildIndex < this.count;

        if ((leftChildIndexValid && leftChild < nodeValue) &&  (rightChildIndexValid && rightChild < nodeValue)) {
            let smallerIndex = (leftChild < rightChild) ? leftChildIndex : rightChildIndex;
            this.swap(heap, currentIndex, smallerIndex);
            this.bubbleDown(smallerIndex);
            return;
        }
        if (leftChildIndexValid && leftChild < nodeValue) {
            this.swap(heap, currentIndex, leftChildIndex);
            this.bubbleDown(leftChildIndex);
            return;
        }
        if (rightChildIndexValid && rightChild < nodeValue) {
            this.swap(heap, currentIndex, rightChildIndex);
            this.bubbleDown(rightChildIndex);
            return;
        }
    }
    peek() {
        if (this.count === 0) {
            throw new Error("Heap is empty");
        }
        return this.heap[0];
    }
    poll() {
        if (this.count === 0) {
            throw new Error("Heap is empty");
        }
        if (this.count === 1) {
            this.count--;
            return this.heap[0];
        }
        const { heap } = this;
        let rootVal = heap[0];
        let lastNodeIndex = this.count - 1;
        this.swap(this.heap, lastNodeIndex, 0);
        this.count--;
        this.bubbleDown(0);
        return rootVal;
    }
    add(value) {
        if (this.count >= this.heap.length) {
            this.count++;
            this.heap.push(value);
            this.bubbleUp(this.heap.length - 1);
            
        } else {
            this.heap[this.count] = value;
            this.count++;
            this.bubbleUp(this.count - 1);
        }
    }
    isEmpty() {
        return this.count === 0;
    }
    size() {
        return this.count;
    }
    swap(array, i, j) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}


// let array = [3,7,1,2,0,9];
// let array = [7,3, 1];

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    const pq = new PriorityQueue();

    for (let x of nums) {
        pq.add(x);
    }
    let i=0;

    while (!pq.isEmpty()) {
        nums[i] = pq.poll();
        i++;
    }
    return nums;
};