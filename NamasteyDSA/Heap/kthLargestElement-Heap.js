class MinPriorityQueue{
    constructor(){
        this.heap = [];
    }

    equeue(value, priority){
        this.heap.push({value, priority});
        this.heapifyUp();
    }

    heapifyUp(){
        let index = this.heap.length-1;
        while(index > 0){
            let parent = Math.floor((index - 1) / 2);
            //For MIN QUEUE -> if child < parent, swap
            if(this.heap[index].priority >= this.heap[parent].priority) break;
            this.swap(index, parent);
            index = parent;
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
        let index = 0;
        let length = this.heap.length;
        while(true){
            let left = (2 * index) + 1;
            let right = (2 * index) + 2;
            let smallest = index;
            //find smallest child
            if(left < length && this.heap[left].priority < this.heap[smallest].priority){
                smallest = left;
            }
            if(right < length && this.heap[right].priority < this.heap[smallest].priority){
                smallest = right;
            }
            if(smallest === index) break;
            this.swap(index, smallest);
            index = smallest;
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
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }
}

function kthLargestElement(arr, k){
    let pq = new MinPriorityQueue();
    for(let i=0; i<arr.length; i++){
        pq.equeue(arr[i], arr[i]);
        if(pq.size() > k){
            pq.dequeue();
        }
    }
    return pq.front().value;
}

// let arr = [3,2,1,5,6,4];
// console.log(kthLargestElement(arr, 2));

let arr = [3,2,3,1,2,4,5,5,6];
console.log(kthLargestElement(arr, 4));