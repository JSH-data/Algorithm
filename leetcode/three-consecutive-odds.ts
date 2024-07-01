function threeConsecutiveOdds(arr: number[]): boolean {
    let acc = 0;

    for(let i = 0; i < arr.length; i += 1) {
        if(arr[i] % 2 !== 0) {
            acc += 1;
        } else {
            acc = 0;
        }

        if(acc === 3) {
            return true;
        }
    }

    return false;
};