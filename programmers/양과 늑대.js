function solution(info, edges) {
    let answer = 0;
    
    const len = info.length;
    const rel = Array.from({length: len}, () => []);
    
    for(const [s, e] of edges) {
        rel[s].push(e);
    }
    
    function dfs(arr, sheep, wolf, target) {
        const idx = arr.indexOf(target);
        const sCount = info[target] ? sheep : sheep + 1;
        const wCount = info[target] ? wolf + 1 : wolf;
        
        if(sCount <= wCount) {
            return;
        }
        
        if(answer < sCount) {
            answer = sCount;
        }
        
        arr.splice(idx, 1);        
        arr.push(...rel[target]);        
        
        for(let i = 0; i < arr.length; i += 1) {
            dfs([...arr], sCount, wCount, arr[i]);
        }
    }
    
    dfs([0], 0, 0, 0)
    
    return answer;
} 