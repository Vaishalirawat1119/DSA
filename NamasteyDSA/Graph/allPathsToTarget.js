function allPathsFromSourceToTarget(graph){
    let start = 0;
    let end = graph.length-1;
    let allPaths = [];
    let dfs = (curr, path) => {
        if(curr === end){
            allPaths.push([...path]);
            return;
        }
        for(let neighbors of graph[curr]){
            path.push(neighbors);
            dfs(neighbors, path);
            path.pop();
        }
    }
    dfs(0, [0]);
    return allPaths;
}
console.log(allPathsFromSourceToTarget([[1,2],[3],[3],[]]));
console.log(allPathsFromSourceToTarget([[4,3,1],[3,2,4],[3],[4],[]]));