// Implementing stack using (two) queue

//we are going to use 2 Queues but it should behave like a Stack

let q1 = [];
let q2 = [];

//PUSH OPERATION

function push(x){
    q1.push(x);
    return `Pushed: ${x}`;
}

//POP OPERATION

function pop(x){
    x = q1.length;
    // console.log(`LENGTH: ${x}`);
    for(let i=0; i<x-1; i++){
        q2.push(q1.shift())
    }

    let ans = q1.shift();

    //swapping
    let temp = q1;
    q1 = q2;
    q2 = temp

    return `Popped: ${ans}`;
}

//PEEK OPERATION

function top(x){
    x = q1.length;
    for(let i=0; i<x-1; i++){
        q2.push(q1.shift());
    }
    let frontEle = q1[0];

    q2.push(q1.shift())

    let temp = q1;
    q1 = q2;
    q2 = temp;

    return `Top Element: ${frontEle}`
}

//IS EMPTY OR NOT

function empty(x){
    return q1.length === 0;
}


console.log(push(1));
console.log(push(2));
console.log(push(3));
console.log(push(4));
console.log(push(5));
console.log(push(6));

console.log(pop());
// console.log(pop());
// console.log(pop());
// console.log(pop());
// console.log(pop());

console.log(top());

console.log(empty());