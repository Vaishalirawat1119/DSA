function linearSearch(arr, target){
    for(let i=0; i<arr.length; i++){
        if(arr[i] === target) return i;
    }
    return -1;
}
let arr = [3,2,5,1,6,8];
console.log(linearSearch(arr, 3));
