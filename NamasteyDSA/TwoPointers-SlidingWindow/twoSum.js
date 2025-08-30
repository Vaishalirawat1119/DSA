//brute force approach

// function twoSum(arr, target){
//     // let n = arr.length;
//     for(let i=0; i<arr.length-1; i++){
//         for(let j=i+1; j<arr.length; j++){
//             let sum = arr[i] + arr[j];
//             if(sum === target){
//                 return [i, j];
//             }
//         }
//     }
// }



//optimised solution

function twoSum(arr, target){
    let map = {};
    for(let i=0; i<arr.length; i++){
        map[arr[i]] = i;
    }

    for(let i=0; i<arr.length; i++){
        let pairToFind = target - arr[i];
        if(map[pairToFind] && map[pairToFind] !== i){
            return [i, map[pairToFind]];
        }
    }
}

// let arr = [2, 7, 11, 15];
let arr = [3,2,4];
// let arr = [3,3];
console.log(twoSum(arr, 6));