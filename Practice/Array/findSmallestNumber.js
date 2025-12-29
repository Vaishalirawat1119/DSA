function smallest(number){
    if(number.length === 0) return null;
    return Math.min(...number);
}
// let n = [3,1,2];
let n = [-2,5,1,-9];
console.log(smallest(n));