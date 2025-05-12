let num;

function fact(num){
    if(num < 0){
        return "Factorial of negative number is not possinle";
    }
    if(num === 0 || num === 1){
        return 1;
    }
    
    let res = 1;
    for(let i=1; i<=num; i++){
        res *= i;
    }
    return res;
}

function countDigitsInFactorial(num){
    let factNum = fact(num);
    let count = 0;

    while(factNum > 0){
        factNum = Math.floor(factNum / 10); // Divide the factorial by 10 and take the floor value
        count++;
    }
    return count;
};

console.log(countDigitsInFactorial(5));
console.log(countDigitsInFactorial(120));
console.log(countDigitsInFactorial(100));