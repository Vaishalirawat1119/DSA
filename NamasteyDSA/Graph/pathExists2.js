function pathExistsInGraphByDFS(n, edges, source, destination){
    let map = {};
    for(let [x, y] of edges){
        if(!map[x]) map[x] = [];
        if(!map[y]) map[y] = [];
        map[x].push(y);
        map[y].push(x);
    }
    let visited = new Set();
    let dfs = (curr) => {
        if(curr === destination) return true;
        visited.add(curr);
        for(let neighbors of map[curr]){
            if(!visited.has(neighbors)){
                if(dfs(neighbors)) return true;
            }
        }
        return false;
    }
    return dfs(source);
}
console.log(pathExistsInGraphByDFS(n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2));
console.log(pathExistsInGraphByDFS(n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], source = 0, destination = 5));