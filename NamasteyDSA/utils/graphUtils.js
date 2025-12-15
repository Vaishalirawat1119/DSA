// Node definition
class Node {
    constructor(val, neighbors = []) {
        this.val = val;
        this.neighbors = neighbors;
    }
}

// Convert adjList → Graph
function buildGraph(adjList) {
    if (!adjList || adjList.length === 0) return null;

    const nodes = adjList.map((_, i) => new Node(i + 1));

    for (let i = 0; i < adjList.length; i++) {
        for (let nei of adjList[i]) {
            nodes[i].neighbors.push(nodes[nei - 1]);
        }
    }
    return nodes[0]; // root node
}

// Convert Graph → adjList (for checking output)
function graphToAdjList(node) {
    const map = new Map();
    const q = [node];
    map.set(node, 1);
    let idx = 2;

    while (q.length) {
        const curr = q.shift();
        for (let nei of curr.neighbors) {
            if (!map.has(nei)) {
                map.set(nei, idx++);
                q.push(nei);
            }
        }
    }

    const res = Array(map.size).fill(0).map(() => []);
    for (let [node, i] of map.entries()) {
        for (let nei of node.neighbors) {
            res[i - 1].push(map.get(nei));
        }
    }
    return res;
}

module.exports = { Node, buildGraph, graphToAdjList };