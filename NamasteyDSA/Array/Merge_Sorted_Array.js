//brute force approach
let a = [1, 2, 3, 0, 0, 0];
let b = [2, 5, 6];
let m = 3;
let n = 3;

// for (let i = 0; i < n; i++) {
//   a[m + i] = b[i];
// }
// console.log(a);
// a.sort();
// console.log(a);

//Aproach 2
// let a2 = a.slice(0,m);
// let p1 = 0;
// let p2 = 0;
// for(let i=0; i<m+n; i++){
//     if(p2 >= n || (a2[p1] < b[p2] && p1 < m)){
//         a[i] = a2[p1];
//         p1++;
//     }
//     else{
//         a[i] = b[p2];
//         p2++;
//     }
// }
// console.log(a);

//Approach 3
let p1 = m-1;
let p2 = n-1;

for(let i = m+n-1; i>=0; i--){
    if(p2 < 0) break;

    if(a[p1] > b[p2] && p1 >= 0){
        a[i] = a[p1];
        p1--;
    }
    else{
        a[i] = b[p2];
        p2--;
    }
}
console.log(a);