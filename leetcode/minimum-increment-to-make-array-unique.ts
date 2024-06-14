function minIncrementForUnique(nums: number[]): number {
    let answer = 0;
    
    const unique = {};
    
    nums.sort((a, b) => a - b);

    for(let i = 0; i < nums.length; i += 1) {
        let index = 0;

        while(true) {
            if(!unique[nums[i] + index]) {
                unique[nums[i] + index] = true

                break;
            }

            index += 1;
        }

        answer += index;
    }

    return answer;
};