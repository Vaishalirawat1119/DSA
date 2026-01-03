function topoSort(n, graph){
    let indegree = new Array(n).fill(0);
    for(let i=0; i<n; i++){
        for(let node of graph[i]){
            indegree[node]++;
        }
    }
    let queue = [];
    let ans = [];
    for(let i=0; i<n; i++){
        if(indegree[i] === 0){
            queue.push(i);
        }
    }
    while(queue.length){
        let curr = queue.shift();
        ans.push(curr);
        for(let neighbors of graph[curr]){
            indegree[neighbors]--;
            if(indegree[neighbors] === 0){
                queue.push(neighbors);
            }
        }
    }
    if(ans.length !== n){
        console.log("Graph has a cycle");
    }
    return ans;
}

let n = 6;
let adj = [
    [],
    [],
    [3],
    [1],
    [0,1],
    [0,2]
];
// let adj = [
//     [],
//     [],
//     [3],
//     [1,5],
//     [0,1],
//     [0,2]
// ];
console.log(topoSort(n, adj));