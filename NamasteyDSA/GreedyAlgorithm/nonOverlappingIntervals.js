function eraseOverlappingInterval(arr){
    arr.sort((a, b) => (a[1] - b[1]));
    let removeCount = 0;
    let k = -Infinity;
    for(let i=0; i<arr.length; i++){
        if(arr[i][0] < k){
            ++removeCount;
        }
        else{
            k = arr[i][1];
        }
    }
    return removeCount;
}

console.log(eraseOverlappingInterval([[1,2],[2,3],[3,4],[1,3]]));
console.log(eraseOverlappingInterval([[1,2],[1,2],[1,2]]));