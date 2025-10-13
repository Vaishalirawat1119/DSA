class MinPriorityQueue {
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

function topKElement(arr, k){
    let map = {};
    for(let i=0; i<arr.length; i++){
        if(!map[arr[i]]) map[arr[i]] = 0;
        ++map[arr[i]];
    }

    let pq = new MinPriorityQueue(x => x.freq);
    for(key in map){
        pq.enqueue({val : key, freq : map[key]});
        if(pq.size() > k){
            pq.dequeue();
        }
    } 
    return pq.toArray().map(x => Number(x.val));
}

let arr = [1,1,1,2,2,3];
console.log(topKElement(arr, 2));