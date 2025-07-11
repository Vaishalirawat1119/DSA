let arr = [2,1,5,4,3,1] // -> 9

// function sumOdd(n){
//     let isOdd = arr[n] % 2 !== 0;
//     if(n === 0) {
//         if(isOdd){
//            return arr[n];
//         }
//         return 0;
//     }

//     if(isOdd){
//         return arr[n] + sumOdd(n-1);
//     }
//     return 0 + sumOdd(n-1);
// }
// console.log(sumOdd(arr.length-1));


//using ternary operator

function sumOdd(n){
    let isOdd = arr[n] % 2 !== 0;
    if(n === 0) return isOdd ? arr[n] : 0;
    return (isOdd ? arr[n] : 0) + sumOdd(n-1);
}
console.log(sumOdd(arr.length-1));