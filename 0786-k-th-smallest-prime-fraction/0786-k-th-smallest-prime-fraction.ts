function kthSmallestPrimeFraction(arr: number[], k: number): number[] {
    const len = arr.length;
    const idxArr = Array.from({length: len}, () => 0);
    const candidates = Array.from({length: len}, (_, i) => 1 / arr[i]);

    let counter = 0;
    let answer = { v: 1, idx: -1 };
    
    while(counter !== k) {
        let min = { v: 1, idx: -1 };

        for(let i = 1; i < len; i += 1) {
            if(min.v > candidates[i]) {
                min = { v: candidates[i], idx: i };
            }
        }

        if(idxArr[min.idx] < min.idx - 1) {
            idxArr[min.idx] += 1;
            candidates[min.idx] = arr[idxArr[min.idx]] / arr[min.idx];
        } else {
            candidates[min.idx] = 1;
        }

        answer = min;
        counter += 1;
    }    
    
    return [answer.v * arr[answer.idx], arr[answer.idx]];
};