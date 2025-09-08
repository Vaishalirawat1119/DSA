function trappedWater(arr){
    let n = arr.length;

    //maximum left

    //calculating maxL and maxR using a single loop
    let maxL = [];
    maxL[0] = arr[0];
    let maxR = [];
    maxR[n-1] = arr[n-1];
    for(let i=1; i<n; i++){
        maxL[i] = Math.max(maxL[i-1], arr[i]);
        maxR[n-1-i] = Math.max(maxR[n-i], arr[n-1-i]);
    }

    //maximum right
    // let maxR = [];
    // maxR[n-1] = arr[n-1];
    // for(let i=n-2; i>=0; i--){
    //     maxR[i] = Math.max(maxR[i+1], arr[i]);
    // }

    let ans = 0;
    for(let i=0; i<n; i++){
        let waterTrapped = (Math.min(maxL[i], maxR[i]) - arr[i]);
        ans = ans + Math.max(waterTrapped, 0)
        // ans = ans + (waterTrapped < 0 ? 0 : waterTrapped);
    }

    return ans;
}
let arr = [0,1,0,2,1,0,1,3,2,1,2,1];
// let arr = [4,2,0,3,2,5];
console.log(trappedWater(arr));