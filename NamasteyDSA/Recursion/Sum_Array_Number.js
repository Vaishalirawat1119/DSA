//arr = [2,0,4,3,1,5];  // output -> 15
let num = [2,0,4,3,1,5];
function sum(n){
    if(n === 0) return num[n];
    return num[n] + sum(n-1);
}
console.log(sum(num.length-1));