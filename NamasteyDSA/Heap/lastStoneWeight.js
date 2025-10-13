class MaxPriorityQueue{
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
            let parent = Math.floor((i-1)/2);
            if(this.heap[i].priority <= this.heap[parent].priority) break;
            this.swap(i, parent);
            i = parent; 
        }
    }

    dequeue(){
        if(this.heap.length === 0) return null;
        const max = this.heap[0];
        const end = this.heap.pop();
        if(this.heap.length > 0){
            this.heap[0] = end;
            this.heapifyDown();
        }
        return max;
    }

    heapifyDown(){
        let i = 0;
        let length = this.heap.length;
        while(true){
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let highest = i;
            if(left < length && this.heap[left].priority > this.heap[highest].priority){
                highest = left;
            }
            if(right < length && this.heap[right].priority > this.heap[highest].priority){
                highest = right;
            }
            if(highest === i) break;
            this.swap(i, highest);
            i = highest;
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

function lastStone(stones){
    let pq = new MaxPriorityQueue();
    for(let i=0; i<stones.length; i++){
        pq.enqueue(stones[i], stones[i]);
    }

    while(pq.size() > 1){
        let y = pq.dequeue().value;
        let x = pq.dequeue().value;
        if(y-x > 0){
            pq.enqueue(y-x, y-x);
        }
    }
    return pq.dequeue() || 0;
}

let stones = [2, 7, 4, 1, 8, 1];
console.log(lastStone(stones));