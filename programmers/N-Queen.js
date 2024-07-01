function solution(n) {
    let answer = 0;
    
    const check = (x1, y1, x2, y2) => {
        if(y1 === y2) {
            return false;
        }
        
        if(Math.abs(x1 - x2) === Math.abs(y1 - y2)) {
            return false;
        }
        
        return true;
    }
    
    const dfs = (row, selectedIdxs) => {
        if(row === n) {
            answer += 1;
            
            return;
        }
        
        for(let i = 0; i < n; i += 1) {
            let flag = true;
            
            for(let j = 0; j < selectedIdxs.length; j += 1) {
                const [x1, y1] = selectedIdxs[j];
                const pass = check(x1, y1, row, i);
                
                if(!pass) {
                    flag = false;
                }
                
            }
                    
            if(flag) {
                selectedIdxs.push([row, i]);

                dfs(row + 1, selectedIdxs);

                selectedIdxs.pop();
            }
        }
    }
    
    for(let i = 0; i < n; i += 1) {
        dfs(1, [[0, i]]);
    }
    
    return answer
}