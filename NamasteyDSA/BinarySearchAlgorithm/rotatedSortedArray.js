function rotatedArray(a, t){
    let l = 0;
    let r = a.length-1;
    while(l <= r){
        let m = l + Math.floor((r-l)/2);
        if(t === a[m]) return m;
        if(a[l] <= a[m]){
            if(t < a[m] && t >= a[l]){
                r = m-1;
            }
            else{
                l = m+1;
            }
        }
        else{
            if(t > a[m] && t <= a[r]){
                l = m+1;
            }
            else{
                r = m-1;
            }
        }
    }
    return -1;
}
let a = [4,5,6,7,8,0,1,2];
console.log(rotatedArray(a,3));