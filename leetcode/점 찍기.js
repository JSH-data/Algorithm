function solution(k, d) {
    let answer = 0;
    
    const max = Math.floor(d / k);
    const distance = d**2;
    
    for(let a = 0; a <= max; a += 1) {
        const y = distance - (a * k)**2;
        
        answer += (Math.floor(Math.sqrt(y) / k) + 1);
    }
    
    return answer;
}