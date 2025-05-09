let num = 1256710;

let countDigits = (num) => {
    let count = 0; //Initialize count to 0 and it stores the number of digits
    while(num > 0){ //check if num is greater than 0. If yes, then enter the loop
        num = Math.floor(num/10); //In every iteration, we divide num by 10 and take the floor value
        count++; //and increment count by 1
    }
    return count; 
}

console.log(countDigits(num));


// num = 1256710
// count = 0
//math.floor(1256710/10) = 125671.0, 0 -> 1 = stores in count

//math.floor(125671/10) = 12567.1, 1 -> 2 = stores in count and so on till num becomes 0
// 0 -> 7 = stores in count
