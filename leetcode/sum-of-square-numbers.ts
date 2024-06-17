function judgeSquareSum(c: number): boolean {
    const sqrt = Math.floor(Math.sqrt(c));
    const arr = Array.from({length: sqrt + 1}, (_, idx) => (idx)**2);

    let left = 0;
    let right = sqrt;
    
    while(left <= right) {
        const sum = arr[left] + arr[right];

        if(sum === c) {
            return true;
        }

        if(sum < c) {
            left += 1;
        }

        if(sum > c) {
            right -= 1;
        }
    }

    return false;
};