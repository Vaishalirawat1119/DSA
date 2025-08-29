function singleElement(arr){
    let l = 0;
    let r = arr.length-1;
    while(l <= r){
        let m = l + Math.floor((r-l)/2);
        if(arr[m] === arr[m-1]){
            let leftCount = m-1-l;
            if(leftCount % 2 === 1){
                r = m-2;
            }
            else{
                l = m+1;
            }
        }
        else if(arr[m] === arr[m+1]){
            leftCount = m-l;
            if(leftCount % 2 === 1){
                r = m-1;
            }
            else{
                l = m+2;
            }
        }
        else{
            return arr[m];
        }
    }
}
// let arr = [1,1,2,3,3,4,4,8,8];
let arr = [3,3,7,7,10,11,11];
console.log(singleElement(arr));