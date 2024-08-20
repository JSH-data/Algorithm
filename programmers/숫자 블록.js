function makeAcc(num) {
    if(num === 1) {
        return 0;
    }
    
    if(num === 2) {
        return 1;
    }
    
    const sqrt = parseInt(Math.sqrt(num));
    
    for(let i = 2; i <= sqrt; i += 1) {        
        if(num % i === 0 && num / i <= 1e7) {
            return num / i;
        }
    }
    
    for(let i = sqrt; i >= 2; i -= 1) {        
        if(num % i === 0 && num / i > 1e7) {
            return i;
        }
    }
    
    return 1;
}

function solution(begin, end) {
    const answer = [];
    
    for(let i = begin; i <= end; i += 1) {
        const num = makeAcc(i);
        
        answer.push(num);
    }
    
    return answer;
}