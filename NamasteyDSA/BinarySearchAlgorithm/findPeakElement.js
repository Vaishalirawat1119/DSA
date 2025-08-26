function peakElement(arr){
    let l = 0;
    let r = arr.length-1;

    while(l<r){
        let m = l + Math.floor((r-l)/2);
        if(arr[m] < arr[m+1]){
            l = m+1;
        }
        else{
            r = m;
        }
    }
    return  arr[r];
}
// let arr = [1,2,3,1];
let arr = [1,2,1,4,5,6,4]
console.log(peakElement(arr));