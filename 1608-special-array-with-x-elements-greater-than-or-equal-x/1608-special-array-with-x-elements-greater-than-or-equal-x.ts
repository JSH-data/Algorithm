function specialArray(nums: number[]): number {
    const len = nums.length;
    
    nums.sort((a, b) => a - b);

    for(let i = 0; i < nums.length; i += 1) {
        const leftNums = len - i;
        const currentNum = nums[i];

        if(leftNums <= currentNum && (leftNums > nums[i - 1] || nums[i - 1] === undefined)) return leftNums;
    }

    return -1;
};