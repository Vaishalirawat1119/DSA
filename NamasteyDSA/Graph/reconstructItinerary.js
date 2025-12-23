function findItinerary(tickets){
    let graph = {};
    for(let [from, to] of tickets){
        if(!graph[from]) graph[from] = [];
        graph[from].push(to);
    }
    for(let node in graph){
        graph[node].sort();
    }
    let path = [];
    let dfs = (curr) => {
        let destinations = graph[curr] || [];
        while(destinations.length){
            let neighbor = destinations.shift();
            dfs(neighbor);
        }
        // path.push(curr);
        path.unshift(curr);
    }
    dfs("JFK");
    // return path.reverse();
    return path;
}
console.log(findItinerary(tickets = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]));
console.log(findItinerary(tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]));