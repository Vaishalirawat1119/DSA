// Implementing stack using queue

let q = [];

function push(x){
    return q.push(x);
}

function pop(x){
    x = q.length;
    for(let i=0; i<x-1; i++){
        q.push(q.shift())
    }
    return q.shift()
}

function top(x){
    x = q.length;
    for(let i=0; i<x-1; i++){
        q.push(q.shift())
    }
    let frontEle = q[0];
    q.push(q.shift())
    return frontEle;
}

function empty(x){
    return q.length === 0;
}

push(1);
push(2);
push(3);
push(4);
push(5);
console.log(`PUSHED : ${q}`);

console.log(`POPPED : ${pop()}`);
console.log(`POPPED : ${pop()}`);
console.log(`POPPED : ${pop()}`);
console.log(`POPPED : ${pop()}`);
console.log(`POPPED : ${pop()}`);
console.log(q);

console.log(`FRONT : ${top()}`);
console.log(q);

console.log(`EMPTY : ${empty()}`);