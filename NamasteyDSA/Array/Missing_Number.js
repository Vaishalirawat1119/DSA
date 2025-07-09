let arr = [3,5,1,4,0,2,7,9,8];
let n = arr.length;
let totalSum = n * (n+1) / 2;
let arrSum = 0;

for(let i=0; i<n; i++){
    arrSum = arrSum + arr[i];
}
console.log(totalSum-arrSum);