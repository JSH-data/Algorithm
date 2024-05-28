function equalSubstring(s: string, t: string, maxCost: number): number {
    const len = s.length
    const diffs = [];

    let left = 0;
    let answer = 0;
    let sum = 0;

    for(let i = 0; i < len; i += 1) {
        const diff = Math.abs(s[i].charCodeAt(0) - t[i].charCodeAt(0));

        diffs.push(diff);
    };


    for(let right = 0; right < len; right += 1) {
        sum += diffs[right];

        while(sum > maxCost) {
            sum -= diffs[left];
            left += 1;
        }

        if(answer < right - left + 1) {
            answer = right - left + 1;
        }
    }

    return answer;
};