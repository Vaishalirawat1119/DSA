function singleNumber(a){
    //using hashed map

    // let hash = {};
    // for(let i=0; i<a.length; i++){
    //     if(!hash[a[i]]){
    //         hash[a[i]] = 1;
    //     }
    //     else{
    //         hash[a[i]]++;
    //     }
    // }
    // for(let i=0; i<a.length; i++){
    //     if(hash[a[i]] === 1){
    //         return a[i]
    //     }
    // }

    //using XOR
    let xor=0;
    for(let i=0; i<a.length; i++){
        xor = xor^a[i];
    }
    return xor
}
let a = [4,4,3,6,3,2,1,1,2];
console.log(singleNumber(a));
