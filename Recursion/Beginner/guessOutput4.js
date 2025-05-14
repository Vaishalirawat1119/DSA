function fun(n){
    if(n === 0) return;
    fun(Math.floor(n/2));
    console.log(n%2);
};
console.log(fun(7));