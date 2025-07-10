let a = 20;
function printForward(num){
    if(num > a) return;
    console.log(num);
    num++;
    printForward(num);
}
printForward(1)