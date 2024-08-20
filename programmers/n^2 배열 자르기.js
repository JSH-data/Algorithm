function solution(n, left, right) {
    const answer = [];
    
    for(let i = left; i <= right; i += 1) {
        const q = parseInt(i / n);
        const r = i % n;
        const max = q > r ? q : r;
        
        answer.push(max + 1);
    }
        
    return answer;
}