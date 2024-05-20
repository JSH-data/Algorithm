function subsetXORSum(nums: number[]): number {
    const answer = [];
    const len = nums.length;

    const calcXor = (arr: number[]) => {
        return arr.reduce((acc, cur, idx) => {
            if(idx === 0) return cur;

            return acc ^ cur
        }, 0)
    }

    const com = (count, arr, lastIdx) => {
        if(count === arr.length) {
            answer.push(calcXor(arr));

            return 
        }

        for(let i = lastIdx + 1; i < len; i += 1) {
            com(count, [...arr, nums[i]], i);
        }
    }

    for(let i = 1; i <= len; i += 1) {
        for(let j = 0; j < len; j += 1) {
            com(i, [nums[j]], j)
        }
    }

    return answer.reduce((acc, cur) => acc + cur, 0)
};