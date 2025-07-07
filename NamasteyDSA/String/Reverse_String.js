function reverseString(str){
    let strlen = str.length;
    let halfLen = strlen/2;

    for(let i=0; i<halfLen; i++){
        let temp = str[i];
        str[i] = str[strlen-1-i];
        str[strlen-1-i] = temp;
    }
    return str;
}
let str = ["h","e","l","l","o"];
console.log(reverseString(str));