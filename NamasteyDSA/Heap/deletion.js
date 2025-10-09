class MinHeap{
    constructor(){
        this.heap = [];
    }

    getLeftChildIndex(i){
        return (2 * i) + 1;
    }

    getRightChildIndex(i){
        return (2 * i) + 2;
    }

    getParentIndex(i){
        return Math.floor((i-1)/2);
    }

    //insertion
    insert(val){
        this.heap.push(val);
        let lastIndex = this.heap.length-1;
        this.heapifyUp(lastIndex);
    }

    heapifyUp(i){
        while(i > 0){
            let parentIndex = this.getParentIndex(i);
            if(this.heap[i] < this.heap[parentIndex]){
                [this.heap[i], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[i]];
                i = parentIndex;
            }
            else{
                break;
            }
        }
    }
    
    //deletion
    extract(){
        if(this.heap.length < 1) return null;
        let min = this.heap[0];
        let lastIndex = this.heap.length-1;
        [this.heap[0], this.heap[lastIndex]] = [this.heap[lastIndex], this.heap[0]];
        this.heap.pop();
        this.heapifyDown(0);
        return min;
    }

    heapifyDown(i){
        let left = this.getLeftChildIndex(i);
        let right = this.getRightChildIndex(i);
        let n = this.heap.length;
        let smallest = i;
        if(left < n && this.heap[left] < this.heap[smallest]){
            smallest = left;
        }
        if(right < n && this.heap[right] < this.heap[smallest]){
            smallest = right;
        }
        if(smallest !== i){
            [this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]];
            this.heapifyDown(smallest);
        }
    }

    //peek the element
    peek(){
        if(!this.heap.length) return null;
        return this.heap[0];
    }
}

let heap = new MinHeap();
console.log(heap);
console.log("--------------------");
heap.insert(5);
heap.insert(4);
heap.insert(20);
heap.insert(10);
heap.insert(1);
heap.insert(0);
console.log(heap);
console.log("--------------------");
console.log("Extracted Elements: ");
console.log(heap.extract());
console.log(heap.extract());
console.log("--------------------");
console.log("peek");
console.log(heap.peek());
console.log("--------------------");
console.log(heap);