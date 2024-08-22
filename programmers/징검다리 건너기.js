function solution(stones, k) {
    let mid = 0;
    let left = 0;
    let right = 200000000;
    
    while(left < right) {
        mid = parseInt((left + right) / 2);
        
        let count = 0;
        let max = 0;
        
        for(let stone of stones) {
            if(stone <= mid) {
                count += 1;
            } else {
                count = 0;
            }
            
            if(count >= k) {
                break;
            }
        }
        
        if(count < k) {
            left = mid + 1;   
        } else {
            right = mid;
        }
    }
    
    return left;
}