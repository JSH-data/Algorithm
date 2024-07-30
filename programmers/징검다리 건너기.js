function solution(stones, k) {
    const len = stones.length;
    
    let s = 0;
    let e = 200000000;
    
    while(s <= e) {
        const mid = Math.floor((s + e) / 2);
        
        let count = 0;
        
        for(let i = 0; i < len; i += 1) {
            if(stones[i] - mid <= 0) {
                count += 1;
            } else {
                count = 0;
            }
            
            if(count >= k) {
                break;
            }
        }
        
        if(count >= k) {
            e = mid - 1;
        } else {
            s = mid + 1;
        }
    }
    
    return s
}