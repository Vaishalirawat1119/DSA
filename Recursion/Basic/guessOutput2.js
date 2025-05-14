function fun2(m){
    if(m === 0) return;
    fun2(m-1);
    console.log(m);
    fun2(m-1);
};
console.log(fun2(3));