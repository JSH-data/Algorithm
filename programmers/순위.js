function solution(n, results) {
    const records = Array.from({length: n + 1}, () => [new Set(), new Set()]);
    
    for(const [a, b] of results) {
        records[a][0].add(b);
        records[b][1].add(a);
    }
    
    for(let i = 1; i <= n; i += 1) {
        const loosers = records[i][0]; // i가 이긴 사람들
        const winners = records[i][1]; // i를 이긴 사람들
        
        for(const win of winners) {
            for(let loose of loosers) {
                records[win][0].add(loose);
                records[loose][1].add(win);
            }
        }
    }
    
    let answer = 0;
    
    for(let i = 1; i <= n; i += 1) {
        if(records[i][0].size + records[i][1].size === n - 1) {
            answer += 1;
        }
    }
    
    return answer;
}