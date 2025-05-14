// N -> 1

function print(n){
    if(n === 0) return;
    console.log(n);
    print(n - 1);
};
console.log(print(7));
console.log(print(0));