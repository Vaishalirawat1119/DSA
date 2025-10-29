function assignCookies(g,s){
    //Sorted both greed (g) and size (s) arrays

    g.sort((a,b) => (a-b));
    // console.log(g); 
    s.sort((a,b) => (a-b));
    // console.log(s);

    //Used two-pointer approach to assign cookies efficiently
    let i = 0;
    let j = 0;
    while(j < s.length){
        if(s[j] >= g[i]){
            ++i;
        }
        ++j;
    }
    //Returns the maximum number of children that can be content
    return i;
}

// let g = [1,2,3], s = [1,1];
// let g = [1,2], s = [1,2,3];
let g = [10,8,7,9], s = [6,5,8,7];
console.log(assignCookies(g,s));