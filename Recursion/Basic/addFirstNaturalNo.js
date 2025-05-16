// addign first natural number using recursion

function naturalNumber(n){
    if(n <= 0) return 0;
    return n + naturalNumber(n-1);
}
console.log(naturalNumber(11));
console.log(naturalNumber(19));
console.log(naturalNumber(0));
console.log(naturalNumber(3));