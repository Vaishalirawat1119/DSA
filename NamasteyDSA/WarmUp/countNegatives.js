// Write a program that returns the number of negative number in an array

function countNegatives(arr){
    let count = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] < 0){
           count++;
        }
    }
    return count;
}
let arr = [2, -5, 7, 19, -33, 10, -1, -45];
let arr2 = [2, 7, 19, 33, 10];
console.log(countNegatives(arr2));