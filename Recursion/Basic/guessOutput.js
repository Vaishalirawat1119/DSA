function fun(n){
    if(n === 0) return;
    console.log(n);
    fun(n-1);
    console.log(n);
};
console.log(fun(3));