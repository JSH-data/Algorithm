function subsets(nums: number[]): number[][] {
    const answer = [[]];
    const len = nums.length;

    const combination = (targetCount, arr, lastIdx) => {
        if(targetCount === arr.length) {
            answer.push(arr);

            return;
        }

        for(let i = lastIdx + 1; i < len; i += 1) {
            combination(targetCount, [...arr, nums[i]], i);
        }
    }

    for(let i = 1; i <= len; i += 1) {
        for(let j = 0; j < len; j += 1) {
            combination(i, [nums[j]], j);
        }
    }

    return answer;
};