// Implementing Queue Using Stack

let s1 = [];
let s2 = [];

//push
function push(x){
    s1.push(x);
    return `Pushed: ${x}`;
}

//pop
function pop(){
    if(s2.length === 0){
        while(s1.length){
            s2.push(s1.pop())
        }
    }
    return s2.pop()
}

//peek
function peek(){
    if(s2.length === 0){
        while(s1.length){
            s2.push(s1.pop())
        }
    }
    return s2[s2.length-1];
}

//empty
function empty(){
    return s1.length === 0 && s2.length === 0;
}

console.log(push(1));
console.log(push(2));
console.log(push(3));
console.log(push(4));
console.log(`Stack 1 Element : ${s1}`);
console.log("---------------");

console.log(`Popped: ${pop()}`);
console.log(`Popped: ${pop()}`);
console.log(`Stack 1 Element : ${s1}`);
console.log(`Stack 2 Element : ${s2}`);
console.log("---------------");

console.log(push(5));
console.log(push(6));
console.log(`Stack 1 Element : ${s1}`);
console.log(`Stack 2 Element : ${s2}`);
console.log("---------------");

console.log(`Top Element: ${peek()}`);
console.log(`Popped: ${pop()}`);
console.log(`Popped: ${pop()}`);
console.log(`Stack 2 Element : ${s2}`);
console.log(`Stack 1 Element : ${s1}`);
console.log(`Popped: ${pop()}`);
console.log(`Popped: ${pop()}`);
console.log("---------------");

console.log(`Stack 2 Element : ${s2}`);
console.log(`Stack 1 Element : ${s1}`);
console.log(`Empty: ${empty()}`);