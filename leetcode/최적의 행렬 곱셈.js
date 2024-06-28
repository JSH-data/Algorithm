function solution(matrix_sizes) {
    const len = matrix_sizes.length;
    
    const dp = Array.from({length: len}, () => new Array(len));
    
    for(let i = 0; i < matrix_sizes.length; i += 1) {
        dp[i][i] = [...matrix_sizes[i], 0];
    }
    
    // count
    for(let count = 1; count < len; count += 1) {
        for(let sIdx = 0; sIdx < len - count; sIdx += 1) {
            const eIdx = sIdx + count;
            
            for(let i = sIdx; i < eIdx; i += 1) {
                const prev = dp[sIdx][i];
                const after = dp[i + 1][eIdx];                
                const sum = prev[2] + after[2] + (prev[0] * after[0] * after[1]);
                
                if(!dp[sIdx][eIdx]) {
                    dp[sIdx][eIdx] = [prev[0], after[1], sum];
                    
                    continue;
                }
                
                if(dp[sIdx][eIdx][2] > sum) {
                    dp[sIdx][eIdx] = [prev[0], after[1], sum];
                }
            }
        }
    }
    
    return dp[0][len - 1][2];
}