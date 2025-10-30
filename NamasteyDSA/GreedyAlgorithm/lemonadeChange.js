function lemonadeChange(bills){
    let wallet = [0, 0];
    for(let i=0; i<bills.length; i++){
        if(bills[i] === 5){
            ++wallet[0];
        }
        else if(bills[i] === 10){
            ++wallet[1];
            --wallet[0];
        }
        else{
            if(wallet[1]){
                --wallet[1];
                --wallet[0];
            }
            else{
                wallet[0] = wallet[0] - 3;
            }
        }
        if(wallet[0] < 0) return false;
    }
    return true;
}

console.log(lemonadeChange([5,5,5,10,20]));
console.log(lemonadeChange([5,5,10,10,20]));