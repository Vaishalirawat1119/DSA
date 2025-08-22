function sqrt(x){
    if(x < 2) return x;
    let l = 2;
    let r = Math.floor(x/2);

    while(l <= r){
        let m = Math.floor((l+r)/2);
        if(x === m**2) return m;
        if(x < m**2){
            r = m-1;
        }
        else{
            l = m+1;
        }
    }
    return r;
}
let x = 20;
// let x = 4;
// let x = 30;
// let x = 140;
console.log(sqrt(x));