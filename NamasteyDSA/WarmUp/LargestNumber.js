// Write a program that returns the largest number in an array

function largestNum(arr){
    let max_num = -1;
    for(let i=0; i<arr.length; i++){
        if(arr[i] > max_num){
            max_num = arr[i];
        }
    }
    return max_num;
}

let arr = [2,45,12,96,8,3,70];
let arr2 = [-2, 0, -5];
console.log(largestNum(arr))