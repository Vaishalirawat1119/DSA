function candyOnePass(arr){
    let n = arr.length;
    let ans = n;
    let i = 1;
    while(i < n){
        if(arr[i] === arr[i-1]){
            ++i;
            continue;
        }
        let up = 0;
        while(i < n && arr[i] > arr[i-1]){
            ++up;
            ans += up;
            ++i;
        }
        let down = 0;
        while(i < n && arr[i] < arr[i-1]){
            ++down;
            ans += down;
            ++i;
        }
        //removing lesser values from the peak
        ans = ans - Math.min(up, down);
    }
    return ans;
}

console.log(candyOnePass([1,2,3,4,5,3,2,1,2,6,5,4,3,3,2,1,1,3,3,3,4,2]));
