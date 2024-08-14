function solution(n, roads, sources, destination) {
    const answer = [];
    const paths = Array.from({length: n + 1}, () => []);
    
    for(let [left, right] of roads) {
        paths[left].push(right);
        paths[right].push(left);
    }
    
    const visited = Array.from({length: n + 1}, () => -1);
    const queue = [destination];
    
    visited[destination] = 0;
    
    while(queue.length) {
        const next = queue.shift();
        
        for(let candidate of paths[next]) {
            if(visited[candidate] === -1) {
                visited[candidate] = visited[next] + 1;
                
                queue.push(candidate);
            }
        }
    }
    
    for(let source of sources) {
        answer.push(visited[source]);
    }
    
    return answer;
}

// O(NlogN)