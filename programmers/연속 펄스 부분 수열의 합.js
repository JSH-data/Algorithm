function solution(sequence) {
    let max = -Infinity;
    let min = Infinity;
    let sum = 0;
    
    for(let i = 0; i < sequence.length; i += 1) {
        const cur = i % 2 ? -sequence[i] : sequence[i];
        
        sum += cur;
        
        if(max < sum) {
            max = sum
        }
        
        if(min > sum) {
            min = sum
        }  
    }
    
    if(max > 0 && min > 0) {
        return max;
    }
    
    if(max < 0 && min < 0) {
        return -min;
    }
    
    if(max > 0 && min < 0) {
        return max - min;
    }
    
    return 0
}