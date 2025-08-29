function mountainArray(arr){
    let l = 0;
    let r = arr.length-1;
    while(l < r){
        let m = l + Math.floor((r-l)/2);
        if(arr[m+1] > arr[m]){
            l = m+1;
        }
        else{
            r = m;
        }
    }
    return r;
}
// let arr = [0,1,2,4,6,1,0];
let arr = [0,1,6,4,3,2,1,0];
// let arr = [0,1,0];
console.log(mountainArray(arr));