function solution(sticker) {
    const len = sticker.length;
    
    if(len === 1) {
        return sticker[0];
    }
    
    if(len === 2) {
        return Math.max(sticker[0], sticker[1]);
    }
    
    const dp1 = Array.from({length: len}, (_, i) => sticker[i]);
    const dp2 = Array.from({length: len}, (_, i) => sticker[i]);
    
    dp1[1] = 0;
    dp2[0] = 0;
    
    let max1 = 0;

    for(let i = 2; i < len - 1; i += 1) {
        if(i - 3 >= 0) {
            dp1[i] = Math.max(dp1[i] + dp1[i - 2], dp1[i] + dp1[i - 3])
        } else {
            dp1[i] = dp1[i] + dp1[i - 2]
        }
        
        max1 = Math.max(max1, dp1[i])
    }
    
    let max2 = sticker[1];
    
    for(let i = 2; i < len; i += 1) {
        if(i - 3 >= 0) {
            dp2[i] = Math.max(dp2[i] + dp2[i - 2], dp2[i] + dp2[i - 3])
        } else {
            dp2[i] = dp2[i] + dp2[i - 2]
        }
        
        max2 = Math.max(max2, dp2[i])
    }
    
    return Math.max(max1, max2);
}