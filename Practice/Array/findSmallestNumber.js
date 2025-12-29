//Approach 1 using built in function

// function smallest(number){
//     if(number.length === 0) return null;
//     return Math.min(...number);
// }
// // let n = [3,1,2];
// let n = [-2,5,1,-9];
// console.log(smallest(n));

//Approach 2

function smallest(arr){
    if(arr.length === 0) return null;
    let min = arr[0];
    for(let i=0; i<arr.length; i++){
        if(min > arr[i]){
            min = arr[i];
        }
    }
    return min;
}
console.log(smallest([3,1,2]));
console.log(smallest([-2,5,1,-9]));