function topological(n, graph){
    let visited = new Set();
    let ans = [];
    let dfs = (curr) => {
        visited.add(curr);
        for(let neighbors of graph[curr]){
            if(!visited.has(neighbors)){
                dfs(neighbors);
            }
        }
        ans.push(curr);
    }

    for(let i=0; i<n; i++){
        if(!visited.has(i)){
            dfs(i);
        }
    }
    return ans.reverse();
}

// let n = 6;
// let adj = [
//     [],
//     [],
//     [3],
//     [1],
//     [0,1],
//     [0,2]
// ];

let n = 8;
let adj = [
    [],
    [0],
    [1],
    [1],
    [],
    [2,4],
    [3,4],
    [5,6]
];

console.log(topological(n, adj));