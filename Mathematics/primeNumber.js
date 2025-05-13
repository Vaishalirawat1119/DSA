let n;

// function to check if the number is prime or not?
function isPrimeOrNot(n){

    // 1. check if n is less than equal to 1
    if(n <= 1){
        return false; //1 is not a prime number, because 1 has only one factor, itself.
    }

    // 2. loop from 2 to square root of n
    for(let i=2; i*i<= n; i++){
        // 3. check if n is divible by i
        if(n % i === 0){
            return false;
        }
    }
    return true;
}

// let's print all the prime number from the given range

function printAllPrimeNumbers(start,end){
    for(let num=start; num<=end; num++){
        if(isPrimeOrNot(num)){
        console.log(num);
        }
    }
}

console.log(isPrimeOrNot(1));
console.log(isPrimeOrNot(5));
console.log(isPrimeOrNot(16));

console.log(printAllPrimeNumbers(2,20));