function closestElement(arr, k, x){
    let l = 0;
    let r = arr.length-1;
    while(l < r){
        let m = l + Math.floor((r-l)/2);
        if((arr[m+k] - x) < (x - arr[m])){
            l = m+1;
        }
        else{
            r = m;
        }
    }

    let ans = [];
    for(let i=l; i<l+k; i++){
        ans.push(arr[i])
    }

    return ans;
    // return arr.slice(l, l+k);
}
let arr = [1,1,2,3,4,5];
console.log(closestElement(arr, 4, -1));
