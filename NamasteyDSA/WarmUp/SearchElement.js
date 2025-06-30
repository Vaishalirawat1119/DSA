//Write a progeram that searches for an element in an array and returns its index if found, or -1 if not found.

function searchElement(arr, element){
    for(let i=0; i<arr.length; i++){
        if(arr[i] === element){
            return i; // Return the index if the element is found
        }
    }
    return -1
}

let arr = [3,5,1,6,9];
console.log(searchElement(arr,10));
console.log(searchElement(arr,6));
console.log(searchElement(arr,2));
console.log(searchElement(arr,1));
console.log(searchElement(arr,3));