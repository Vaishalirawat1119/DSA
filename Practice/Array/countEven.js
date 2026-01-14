function countEvenNumber(arr){
    if (!Array.isArray(arr) || !arr.every(item => typeof item === 'number' && Number.isFinite(item))) {
    return false;
    }
    let count = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] % 2 == 0){
            ++count;
        }
    }
    return count;
}
console.log(countEvenNumber([1,2,3,4]));
console.log(countEvenNumber([-2,1,-7]));
console.log(countEvenNumber([0,2,3]))
console.log(countEvenNumber([]));