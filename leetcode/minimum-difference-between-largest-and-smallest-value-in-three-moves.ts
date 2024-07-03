function minDifference(nums: number[]): number {
    if(nums.length < 5) {
        return 0;
    }

    nums.sort((a, b) => a - b);

    let e = nums.length - 1;

    const candidates = [];

    for(let i = 0; i <= 3; i += 1) {
        candidates.push(nums[e - i] - nums[3 - i]);
    }

    candidates.sort((a, b) => a - b);
    
    return candidates[0];
};