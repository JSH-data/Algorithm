function singleNumber(nums: number[]): number[] {
    const hash = {};

    for(let i = 0; i < nums.length; i += 1) {
        if(hash[nums[i]]) {
            delete hash[nums[i]];
        } else {
            hash[nums[i]] = true;
        }
    }

    return Object.keys(hash).map(v => Number(v))
};