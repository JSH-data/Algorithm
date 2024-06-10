function solution(r1, r2) {
    let answer = 0;
    
    const r1Square = r1**2;
    const r2Square = r2**2;
    
    for(let x = 1; x <= r2; x += 1) {
        const y1 = r1Square - x**2 > 0 ? Math.ceil(Math.sqrt(r1Square - x**2)) : 0
        const y2 = r2Square - x**2 > 0 ? Math.floor(Math.sqrt(r2Square - x**2)) : 0
        
        answer += (y2 - y1 + 1);
    }
    
    return answer * 4;
}