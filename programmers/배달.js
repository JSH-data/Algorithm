function queueMaker(graph) {
    const queue = [];
    
    for(let i = 2; i < graph[1].length; i += 1) {
        if(graph[1][i] !== 10001) {
            queue.push({ town: i, weight: graph[1][i] });
        }
    }
    
    return queue;
}

function getNextTowns(town, weight, graph) {
    const nextTowns = [];
    
    for(let i = 1; i < graph[town].length; i += 1) {        
        if(graph[town][i] + weight < graph[1][i]) {
            nextTowns.push({ town: i, weight: graph[town][i] + weight });
        }
    }
    
    return nextTowns;
}

function solution(n, road, k) {
    const graph = Array.from({length: n + 1}, () => Array(n + 1).fill(500001));
    
    for(const [x, y, w] of road) {
        if(graph[x][y] > w) {
            graph[x][y] = w;
            graph[y][x] = w;
        }
        
        graph[x][x] = 0;
        graph[y][y] = 0;
    }
    
    const queue = queueMaker(graph);
    
    while(queue.length) {
        const { town, weight } = queue.shift();
        
        if(graph[1][town] > weight) {
            graph[1][town] = weight;
        }
        
        const nextTowns = getNextTowns(town, weight, graph);
        
        queue.push(...nextTowns);
    }
    
    return graph[1].filter(v => v <= k).length;
}