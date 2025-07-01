// Write a program that returns the largest number in an array

function largestNum(arr){
    let min_num = -Infinity;
    for(let i=0; i<arr.length; i++){
        if(arr[i] > min_num){
            min_num = arr[i];
        }
    }
    return min_num;
}

let arr = [2,45,12,96,8,3,70];
let arr2 = [-2, 0, -5];
let arr3 = [-50,-99,-11]
console.log(largestNum(arr3))