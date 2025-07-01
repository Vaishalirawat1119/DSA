// Write a program that returns the smallest number in an array

function smallestNum(arr){
    let max_num = Infinity;
    for(let i=0; i<arr.length; i++){
        if(arr[i] < max_num){
            max_num = arr[i];
        }
    }
    return max_num;
}

let arr = [2,45,12,96,8,3,70];
let arr2 = [-2, 0, -5];
let arr3 = [-50,-99,-11]
console.log(smallestNum(arr2))