function pathExistsInGraph(n, edges, source, destination){
    let map = {};
    for(let [x, y] of edges){
        if(!map[x]) map[x] = [];
        if(!map[y]) map[y] = [];
        map[x].push(y);
        map[y].push(x);
    }
    let q = [source];
    let visited = new Set();
    visited.add(source);
    while(q.length){
        let curr = q.shift();
        if(curr === destination) return  true;
        for(let neighbors of map[curr]){
            if(!visited.has(neighbors)){
                q.push(neighbors);
                visited.add(neighbors);
            }
        }
    }
    return false;
}
console.log(pathExistsInGraph(n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2));
console.log(pathExistsInGraph(n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], source = 0, destination = 5));