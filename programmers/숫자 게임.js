function solution(A, B) {
    let answer = 0;
    
    A.sort((a, b) => b - a);
    B.sort((a, b) => b - a);
    
    const len = A.length;
    
    let aIdx = 0;
    let bIdx = 0;
    
    while(aIdx !== len && bIdx !== len) {
        if(A[aIdx] < B[bIdx]) {
            answer += 1;
            
            aIdx += 1;
            bIdx += 1;
            
            continue;
        }
        
        while(A[aIdx] && A[aIdx] >= B[bIdx]) {
            aIdx += 1;
        }
    }
    
    return answer;
}