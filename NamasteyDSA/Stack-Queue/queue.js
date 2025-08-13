// Queue -> FIFO

let q = [];

q.push(1);  //enqueue
q.push(5);
q.push(3);
q.push(8);
q.push(6);

console.log(q);

q.shift();  //dequeue
q.shift();

console.log(q);

console.log(q[0]);   //peek from first