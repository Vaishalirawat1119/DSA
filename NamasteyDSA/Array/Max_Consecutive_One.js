function maxOne(a){
    let currCount = 0;
    let maxCountOne = 0;

    for(let i=0; i<a.length; i++){
        if(a[i] === 1){
            currCount++;
        }
        else if(currCount > maxCountOne) {
            maxCountOne = currCount;
            currCount = 0;
        }
    }
    return maxCountOne;
}
let a = [1,1,1,0,0,0,1,1,0,0,0];
console.log(maxOne(a));