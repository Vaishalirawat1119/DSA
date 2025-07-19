function binarySearch(arr, target){
    let s = 0;
    let e = arr.length-1;

    while(e>=s){
        let mid = Math.floor((s + e) / 2);

        if(arr[mid] === target) return mid;
        if(arr[mid] < target){
            s = mid + 1;
        }
        else{
            e = mid - 1;
        }
    }
    return  -1;
}

let arr = [1,4,6,9,10,12,34];
console.log(binarySearch(arr, 10));
console.log(binarySearch(arr, 1));
console.log(binarySearch(arr, 19));