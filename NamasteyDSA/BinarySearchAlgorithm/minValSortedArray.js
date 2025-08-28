function minValue(arr){
    let l = 0;
    let r = arr.length-1;

    while(l <= r){
        if(arr[l] <= arr[r]){
            return arr[l];
        }

        let m = l + Math.floor((r-l)/2);

        if(arr[m] < arr[m-1]){
            return m;
        }

        if(arr[l] > arr[m]){
            r = m-1;
        }
        else{
            l = m+1;
        }
    }
}
// let arr = [3,4,5,1,2]
// let arr = [4,5,6,7,0,1,2]
let arr = [11,13,15,17]
// let arr = [1]
// let arr = [1,2,3,4,5,6]
console.log(minValue(arr));