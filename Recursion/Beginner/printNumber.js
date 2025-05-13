// 1 -> n
// 1 is my current number and n is the last number

function printNumber(current, n){
    if(current > n) return; //Base case

    console.log(current);
    printNumber(current+1, n); //Recursive call
};
console.log(printNumber(1,10));
console.log(printNumber(8,4));
