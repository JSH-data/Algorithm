function solution(n, roads, sources, destination) {
    const rel = Array.from({length: n + 1}, (_, i) => []);
    
    for(const [s, e] of roads) {
        rel[s].push(e);
        rel[e].push(s);
    }
    
    const queue = [destination];
    const visited = Array.from({length: n + 1}, () => -1);    
    
    visited[destination] = 0
    
    while(queue.length) {
        const road = queue.shift();
        
        for(const nextStep of rel[road]) {
            if(visited[nextStep] === -1) {
                visited[nextStep] = visited[road] + 1;
                
                queue.push(nextStep);
            }
        }
    }
    
    const answer = [];
    
    for(const source of sources) {
        answer.push(visited[source]);
    }
    
    return answer;
}

