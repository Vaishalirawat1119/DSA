function partition(s){
    let ans = [];
    let first = Array(26).fill(-1);
    let last = Array(26).fill(-1);
    for(let i=0; i<s.length; i++){
        let curr = s.charCodeAt(i)-97;
        if(first[curr] < 0){
            first[curr] = i;
        }
        last[curr] = i;
    }
    let start = end = 0;
    for(let i=0; i<s.length; i++){
        let curr = s.charCodeAt(i)-97;
        if(end < first[curr]){
            ans.push(end - start + 1);
            start = end = i;
        }
        end = Math.max(end, last[curr]);
    }
    if(end - start + 1 > 0){
        ans.push(end - start + 1);
    }
    return ans;
}

console.log(partition("ababcbacadefegdehijhklij"));
// console.log(partition("eccbbbbdec"));