function subsets(nums: number[]): number[][] {
    if(nums.length === 1) {
        return [[], [nums[0]]];
    }

    const answer = [[]];

    while(nums.length) {
        const pop = nums.pop();

        const len = answer.length;

        for(let i = 0; i < len; i += 1) {
            answer.push([...answer[i], pop])
        }
    }

    return answer;
};