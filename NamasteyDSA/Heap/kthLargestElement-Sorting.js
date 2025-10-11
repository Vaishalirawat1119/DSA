function kthLargestElemnt(arr, k){
    return arr.sort((a,b) => b-a)[k-1];
}

let arr = [5,2,8,1,9,4,7,3,2];
console.log(kthLargestElemnt(arr, 4));