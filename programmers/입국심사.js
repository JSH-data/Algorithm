function solution(n, times) {
    times.sort((a, b) => a - b);
    
    const max = times.at(-1);
    const len = times.length;
    
    let left = 1;
    let right = max * n;
    
    while(left < right) {
        const mid = parseInt((left + right) / 2);

        let acc = 0;
        
        for(let i = 0; i < len; i += 1) {
            acc += parseInt(mid / times[i]);
        }
        
        if(acc >= n) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    
    return left;
}