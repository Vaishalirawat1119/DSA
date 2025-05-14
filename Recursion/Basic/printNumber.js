// 1 -> N

function printNumber(current, n){
    if(current > n) return;
    console.log(current);
    printNumber(current + 1, n);
};
console.log(printNumber(1,7));
console.log(printNumber(10,6));
