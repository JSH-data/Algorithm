function solution(n) {
    let sum = 0;
    
    for(let i = 1; i <= Math.sqrt(n); i += 1) {
        if(n % i === 0) {
            if(n / i === i) {
                sum += i;
                
                continue;
            }
            
            sum += i;
            sum += n / i;
        }
    }
    
    return sum
}