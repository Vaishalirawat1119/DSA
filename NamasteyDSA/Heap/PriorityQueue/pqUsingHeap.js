class MaxPriorityQueue{
    constructor(){
        this.heap = [];
    }

    enqueue(value, priority){
        this.heap.push({value, priority});
        this.heapifyUp();
    }

    heapifyUp(){
        let index = this.heap.length-1;
        while(index > 0){
            let parent = Math.floor((index-1)/2);
            if(this.heap[index].priority <= this.heap[parent].priority) break;
            this.swap(index, parent);
            index = parent;
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
        let index = 0;
        let length = this.heap.length;
        while(true){
            let left = (2 * index) + 1;
            let right = (2 * index) + 2;
            let largest = index;
            if(left < length && this.heap[left].priority > this.heap[largest].priority){
                largest = left;
            }
            if(right < length && this.heap[right].priority > this.heap[largest].priority){
                largest = right;
            }
            if(largest === index) break;
            this.swap(index, largest);
            index = largest;
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

let pq = new MaxPriorityQueue();
pq.enqueue("Fever", 4);
pq.enqueue("Headache", 3);
pq.enqueue("Accident", 11);
pq.enqueue("Cough", 1);
pq.enqueue("Cancer", 7);
pq.enqueue("Injury", 9);
pq.enqueue("Flu", 5);
console.log(pq);

console.log("Dequeue: ");
console.log(pq.dequeue());

console.log("Front: ");
console.log(pq.front());
console.log(`size: ${pq.size()}`);
console.log(`Empty: ${pq.isEmpty()}`);