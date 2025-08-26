function guess(n){
    let pick = Math.floor(Math.random() * n) + 1; 

    let l = 1;
    let r = n;
    while(l <= r){
        let m = l + Math.floor((r-l)/2);
        if(pick === m){
            return m;
        }
        else if(pick < m){
            r = m-1;
        }
        else{
            l = m+1;
        }
    }
    return -1;
}
let n = 20;
console.log(guess(n));
