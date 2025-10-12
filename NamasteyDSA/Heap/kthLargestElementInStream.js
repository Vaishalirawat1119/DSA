class MinHeap{
    constructor(){
        this.heap = [];
    }

    enqueue(value, priority){
        this.heap.push({value, priority});
        this.heapifyUp();
    }

    heapifyUp(){
        let i = this.heap.length-1;
        while(i > 0){
            let parent = Math.floor((i - 1) / 2);
            if(this.heap[parent].priority <= this.heap[i].priority) break;
            this.swap(i, parent);
            i = parent;
        }
    }

    dequeue(){
        if(this.heap.length === 0) return null;
        const min = this.heap[0];
        const end = this.heap.pop();
        if(this.heap.length > 0){
            this.heap[0] = end;
            this.heapifyDown();
        }
        return min;
    }

    heapifyDown(){
        let i = 0;
        let length = this.heap.length;
        while(true){
            let left = (2 * i) + 1;
            let right = (2 * i) + 2;
            let smallest = i;
            if(left < length && this.heap[left].priority < this.heap[smallest].priority){
                smallest = left;
            }
            if(right < length && this.heap[right].priority < this.heap[smallest].priority){
                smallest = right;
            }
            if(smallest === i) break; 
            this.swap(i, smallest);
            i = smallest;
        }
    }

    front(){
        return this.heap.length > 0 ? this.heap[0] : null;
    }

    size(){
        return this.heap.length;
    }

    isEmpty(){
        return this.heap.length === 0;
    }

    swap(i, j){
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
}

function kthLargestElement(k, arr){
    this.heap = new MinHeap();
    this.k = k;
    for(let i=0; i<arr.length; i++){
        this.add(arr[i]);
    }
    return null;
}

kthLargestElement.prototype.add = function(val){
    this.heap.enqueue(val, val);
    if(this.heap.size() > this.k){
        this.heap.dequeue();
    }
    return this.heap.front();
}

let kth = new kthLargestElement(3, [4,5,8,2]);
console.log(kth.add(3));
console.log(kth.add(5));
console.log(kth.add(10));
console.log(kth.add(9));
console.log(kth.add(4));