function check(x1, y1, cache) {
    let flag = true;

    for(const [x2, y2] of cache) {
        if(y1 === y2) {
            flag = false;
            
            break;
        }
        
        if(Math.abs(x1 - x2) === Math.abs(y1 - y2)) {
            flag = false;
            
            break;
        }
    }
    
    return flag;
}

function solution(n) {
    let answer = 0;
    
    function dfs(height, cache) {
        if(height === n) {
            answer += 1;
            
            return;
        }
        
        for(let i = 1; i <= n; i += 1) {            
            const isValid = check(height + 1, i, cache);
            
            if(isValid) {
                cache.push([height + 1, i]);
                
                dfs(height + 1, cache);
                
                cache.pop();
            }
        }
    }
    
    for(let i = 1; i <= n; i += 1) {
        dfs(1, [[1, i]]);
    }
    
    return answer;
}