function solution(targets) {
    let lastBomb = 0;
    let answer = 0;
    targets.sort((a, b) => a[1] - b[1]);
    
    for(let i = 0; i < targets.length; i += 1) {
        const [s, e] = targets[i];
        
        if(s < lastBomb) {
            continue;
        }
     
        lastBomb = e - 0.5;
        answer += 1;
    }
    
    return answer;
}