function addBinary(a, b){
    let i = a.length-1;
    let j = b.length-1;
    let carry = 0;
    let result = '';

    while(i >= 0 || j >= 0 || carry > 0){
        let sum = carry;

        if(i >= 0) sum += parseInt(a[i--]);
        if(j >= 0) sum += parseInt(b[j--]);

        result = (sum % 2) + result;
        carry = Math.floor(sum / 2);
    }
    return result;
}
console.log(addBinary("11", "1"));
console.log(addBinary("1010", "1011"));