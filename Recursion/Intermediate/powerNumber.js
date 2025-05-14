// Given a number n, find the value of n raised to the power of its own reverse.

function reverseNumber(n){
    let rev = 0;

    while( n !== 0){
        let digit = n%10;
        rev = rev * 10 + digit;
        n = Math.floor(n/10);
    };
    return rev;
};

function powerNumber(a,b){
    if(b === 0) return 1;

    let halfPower = powerNumber(a, Math.floor(b/2));

    if(b%2 === 0){
        return halfPower * halfPower;
    }
    else{
        return a * halfPower * halfPower;
    }
}

let n = 3;
rev = reverseNumber(n);
let result = powerNumber(n, rev);
console.log(result);