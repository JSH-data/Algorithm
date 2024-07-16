function solution(edges) {
    const answer = [0, 0, 0, 0];
    const hash = {};
    
    for(let i = 0; i < edges.length; i += 1) {
        const [s, e] = edges[i];
        
        if(!hash[s]) {
            hash[s] = {
                in: 0,
                out: 0,
            }
        }
        
        if(!hash[e]) {
            hash[e] = {
                in: 0,
                out: 0,
            }
        }
        
        hash[e].in += 1;
        hash[s].out += 1;
    }
    
    for(let v in hash) {
        if(hash[v].in >= 2 && hash[v].out >= 2) {
            answer[3] += 1;
        }
        
        if(hash[v].in === 0 && hash[v].out >= 2) {
            answer[0] = (+v);
        }
        
        if(hash[v].in > 0 && hash[v].out === 0) {
            answer[2] += 1;
        }
    }
    
    answer[1] = (hash[answer[0]].out - (answer[3] + answer[2]))
    
    return answer;
}