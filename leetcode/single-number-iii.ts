function singleNumber(nums: number[]): number[] {
    let sumXor = 0;

    for(let x of nums) {
        sumXor ^= x;
    }

    const rightMostBit = sumXor & -sumXor;

    let a = 0;
    let b = 0;

    for(let x of nums) {
        if(x & rightMostBit) {
            a ^= x;
        } else {
            b ^= x;
        }
    }

    return [a, b]
};