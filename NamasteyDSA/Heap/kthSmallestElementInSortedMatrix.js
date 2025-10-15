class MinHeap{
    constructor(priorityFn = (x) => x.priority) {
        this.heap = [];
        this.priorityFn = priorityFn;
    }

    enqueue(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parent = Math.floor((index - 1) / 2);
            if (this.priorityFn(this.heap[index]) >= this.priorityFn(this.heap[parent])) break;
            this.swap(index, parent);
            index = parent;
        }
    }

    dequeue() {
        if (this.heap.length === 0) return null;
        const min = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.heapifyDown();
        }
        return min;
    }

    heapifyDown() {
        let index = 0;
        let length = this.heap.length;
        while (true) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let smallest = index;

            if (left < length && this.priorityFn(this.heap[left]) < this.priorityFn(this.heap[smallest])) {
                smallest = left;
            }
            if (right < length && this.priorityFn(this.heap[right]) < this.priorityFn(this.heap[smallest])) {
                smallest = right;
            }
            if (smallest === index) break;
            this.swap(index, smallest);
            index = smallest;
        }
    }

    front() {
        return this.heap.length > 0 ? this.heap[0] : null;
    }

    size() {
        return this.heap.length;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    toArray() {
        return [...this.heap];
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
}

function kthSmallestElement(matrix, k){
    let n = matrix[0].length;
    let heap = new MinHeap(x => x.val);
    for(let i=0; i<Math.min(n,k); i++){
        heap.enqueue({val:matrix[i][0], row:i, col:0});
    }

    for(let count=0; count<k-1; count++){
        let {val, row, col} = heap.dequeue();
        if(col+1 < n){
            heap.enqueue({val:matrix[row][col+1], row:row, col:col+1});
        }
    }
    return heap.dequeue().val;
}

// let matrix = [[1,5,9],[10,11,13],[12,13,15]];
// console.log(kthSmallestElement(matrix, 8));
let matrix = [[1,3,7],[5,10,12],[6,12,15]]
console.log(kthSmallestElement(matrix, 4));