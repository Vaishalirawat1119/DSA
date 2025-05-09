let a,b,c;

// solution using built-in methods
function quadraticEquationRoot(a,b,c){
    const D = b * b - 4 * a * c;

    if(D < 0){
        console.log("Imaginary roots");
    }

    const sqrtD = Math.sqrt(D);

    let root1 = Math.floor((-b + sqrtD) / (2* a));
    let root2 = Math.floor((-b - sqrtD) / (2* a));

    return root1 >= root2 ? [root1,root2] : [root2,root1];
};

console.log(quadraticEquationRoot(1,-2,1));
console.log(quadraticEquationRoot(1,-7,12));
