function badVersion(n){
    let bad = Math.floor(Math.random() * n.length + 1);

    let l = 1;
    let r = n.length;

    while(l < r){
        let m = l + Math.floor((r-l)/2);
        if(m < bad){
            l = m+1;
        }
        else{
            r = m;
        }
    }
    console.log("Bad version generated:", bad);
    return r;
}
let n = [1,2,3,4,5,6,7,8,9,10];
console.log("First bad version found:", badVersion(n));