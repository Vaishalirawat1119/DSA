function removeDuplicates(arr){
    let j=0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] > arr[j]){
            j++;
            arr[j] = arr[i];
        }
    }
    return j+1;
}
let arr = [0,0,1,1,1,2,3,3,3,3,3,4,4,5,6,6,6,6];
console.log(removeDuplicates(arr));
