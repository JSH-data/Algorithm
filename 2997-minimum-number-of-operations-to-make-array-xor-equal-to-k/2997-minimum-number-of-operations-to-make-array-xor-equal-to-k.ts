function minOperations(nums: number[], k: number): number {
    let answer = 0;
    let acc = 0;

    const kBinary = k.toString(2);

    for(let i = 0; i < nums.length; i += 1) {
        acc = (nums[i] ^ acc);
    }

    const accBinary = acc.toString(2);

    let idx = 1;

    const accLen = accBinary.length
    const kLen = kBinary.length

    while(accLen >= idx || kLen >= idx) {        
        const accCur = accBinary[accLen - idx] ?? "0";
        const kCur = kBinary[kLen - idx] ?? "0";

        if(accCur !== kCur) {
            answer += 1;
        }
        
        idx += 1
    }

    return answer;
};