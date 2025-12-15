const { Node, buildGraph, graphToAdjList } = require("../utils/graphUtils");

function cloneGraph(root){
    let q = [root];
    let visited = new Map();
    let cloneRoot = new Node(root.val);
    visited.set(root, cloneRoot);
    while(q.length){
        let curr = q.shift();
        for(let n of curr.neighbors){
            if(!visited.has(n)){
                q.push(n);
                visited.set(n, new Node(n.val));
            }
            let cloneCurr = visited.get(curr);
            cloneCurr.neighbors.push(visited.get(n));
        }
    }
    return cloneRoot;
}
const adjList =  [[2,4],[1,3],[2,4],[1,3]]
const root = buildGraph(adjList);
let cloned = cloneGraph(root);
console.log(graphToAdjList(cloned));