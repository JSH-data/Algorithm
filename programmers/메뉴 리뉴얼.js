function combination(str, target) {
    const results = [];
    
    const len = str.length;
    const strArr = str.split("");
    const cases = 1 << len;
    
    for(let i = 1; i < cases; i += 1) {
        let count = 0;
        
        for(let j = 0; j < len; j += 1) {
            if(i & (1 << j)) {
                count += 1;
            }
        }
        
        if(count !== target) {
            continue;
        }
        
        const com = strArr.filter((s, idx) => {
            const binaryIdx = 1 << idx;
            
            return i & binaryIdx;
        }).sort().join("");
        
        results.push(com);
    };
    
    return results;
}

function solution(orders, course) {
    const answer = [];
    
    for(let cNum of course) {
        const hash = {};
        
        for(let order of orders) {
            if(order < cNum) {
                continue;
            }
            
            const combinations = combination(order, cNum);
            console.log(combinations)
            for(const com of combinations) {
                if(!hash[com]) {
                    hash[com] = 0;
                }
                
                hash[com] += 1;
            }
        }
        let max = 2;
        
        for(const key in hash) {
            if(hash[key] >= max) {
                max = hash[key];
            }
        }
        
        for(const key in hash) {
            if(hash[key] === max) {
                answer.push(key);
            }
        }
    }
    
    return answer.sort();
}