function maxProduct(arr){
    let maxProdSoFar = minProdSoFar = totalMax = arr[0];
    for(let i=1; i<arr.length; i++){
        let maxCopy = maxProdSoFar;
        maxProdSoFar = Math.max(arr[i], maxProdSoFar * arr[i], minProdSoFar * arr[i]);
        minProdSoFar = Math.min(arr[i], maxCopy * arr[i], minProdSoFar * arr[i]);
        totalMax = Math.max(totalMax, maxProdSoFar);
    }
    return  totalMax;
}

console.log(maxProduct([2,3,-2,4]));
console.log(maxProduct([-2,0,-1]));
console.log(maxProduct([2,-5,3,1,-4,0,-10,2,8]));
console.log(maxProduct([2,-5,3,1,-4,0,-10,2,-8]));