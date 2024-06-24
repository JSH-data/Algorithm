function minKBitFlips(nums: number[], k: number): number {
    let currentFlips: number = 0;
    let totalFlips: number = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i >= k && nums[i - k] === 2) {
            currentFlips -= 1;
        } 
        
        if ((currentFlips % 2) === nums[i]) {
            if (i + k > nums.length) {
                return -1;
            } 
            
            nums[i] = 2;
            
            currentFlips += 1
            totalFlips += 1; 
        }
    }

    return totalFlips;
};