// Write a program which retruns the second largest number from the array.
// Corner case:  What if, array is empty? has only one element? has duplicates? 

function secondlargestNumber(arr){
    if(arr.length < 2){
        return null;
    }
    let largest = -Infinity;
    let second = -Infinity;
    for(let i=0; i<arr.length; i++){
        if(arr[i] > largest){
            second = largest;
            largest = arr[i];
        }
        else if(arr[i] > second && arr[i] !== largest){
            second = arr[i];
        }
    }
    return second;
}
let arr = [3,5,1,2,7,5];
console.log(secondlargestNumber(arr));