function intToRoman(num){
    let val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let sym = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

    let roman = [];

    for(let i=0; i<val.length; i++){
        while(num >= val[i]){
            roman += sym[i];
            num -= val[i];
        }
    }
    return roman;
}
console.log(intToRoman(3526));
console.log(intToRoman(19));
console.log(intToRoman(11));