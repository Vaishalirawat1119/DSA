let s = [];

function push(x){
    if (s.length === 0) {
        s.push([x, x])
    } else {
        let minVal = Math.min(x, s[s.length - 1][1]);
        s.push([x, minVal]);
    }
    return `Pushed: ${x}`;
}

function pop(){
    return s.pop();
}

function top(){
    return s[s.length-1][0];
}

function getMin(){
    return s[s.length-1][1];
}

push(8);
push(5);
push(7);
push(4);
push(1);
console.log(`PUSHED : ${s}`);

console.log(`POPPED : ${pop()}`);
console.log(`PUSHED : ${s}`);

console.log(`PEEK : ${top()}`);
console.log(`MIN VAL : ${getMin()}`);
