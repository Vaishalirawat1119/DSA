//Priority Queue using sorting - but this is not the most efficient way to handling priority queue.

class PriorityQueue{
    constructor(){
        this.queue = [];
    }

    enqueue(value, priority){
        this.queue.push({value, priority});
        this.queue.sort((a,b) => b.priority - a.priority);
    }

    dequeue(){
        return this.queue.shift();
    }

    peek(){
        return this.queue[0];
    }

    isEmpty(){
        return this.queue.length === 0;
    }
}

//Demo
const pq = new PriorityQueue();
pq.enqueue("Fever", 4);
pq.enqueue("Headache", 3);
pq.enqueue("Accident", 11);
pq.enqueue("Cough", 1);
pq.enqueue("Cancer", 7);
console.log(pq);

console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq);