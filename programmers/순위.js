function solution(n, results) {
    // [[winSet, loseSet]]
    const result = Array.from({length: n + 1}, () => [new Set(), new Set()]);
    
    for(const [a, b] of results) {
        result[a][0].add(b);
        result[b][1].add(a);
    }
    
    for(let i = 1; i <= n; i += 1) {
        const winners = result[i][1]; // 이긴 사람들
        const loosers = result[i][0]; // 진 사람들
        
        for(const win of winners) {
            for(const loose of loosers) {
                result[win][0].add(loose);
            }
        }
        
        for(const lose of loosers) {
            for(const win of winners) {
                result[lose][1].add(win);
            }
        }
    }
    
    let answer = 0;
    
    for(let i = 1; i <= n; i += 1) {
        if(result[i][0].size + result[i][1].size === n - 1) {
            answer += 1;
        }
    }
    
    return answer;
}