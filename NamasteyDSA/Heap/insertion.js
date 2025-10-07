//creating Min Heap

class MinHeap{
    constructor(){
        this.heap = [5, 10, 20, 30];
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
}

let heap = new MinHeap();
console.log(heap);

heap.insert(1);
heap.insert(4);

console.log(heap);