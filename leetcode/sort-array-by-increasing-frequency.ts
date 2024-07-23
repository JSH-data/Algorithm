function frequencySort(nums: number[]): number[] {
    const hash = {};
    
    for(let i = 0; i < nums.length; i += 1) {
        if(!hash[nums[i]]) {
            hash[nums[i]] = 0;
        }

        hash[nums[i]] += 1;
    }

    return nums.sort((a, b) => {
        if(hash[a] === hash[b]) {
            return b - a
        }

        return hash[a] - hash[b]
    })
};