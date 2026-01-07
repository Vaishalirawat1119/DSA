function printAToZ(){
    let letter = [];
    for(let code = 65; code <= 90; code++){
        letter.push(String.fromCharCode(code));
    }
    return letter;
}
console.log(printAToZ());