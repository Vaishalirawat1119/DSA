function print(num){
    if(num === 0) return;
    console.log(num);
    num--;
    print(num);
};
print(50);