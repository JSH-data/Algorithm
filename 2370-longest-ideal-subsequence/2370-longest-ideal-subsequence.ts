function longestIdealString(s: string, k: number): number {
    let answer = 0;

    const strArr = Array.from({length : 27}, () => 0);

    for(let i = 0; i < s.length; i += 1) {
        const target = s[i].charCodeAt(0) - 96; 
        const start = target - k >= 0 ? target - k : 1;
        const end = target + k <= 26 ? target + k : 26;

        let max = 1

        for(let j = start; j <= end; j += 1) {
            if(strArr[j] && max < strArr[j] + 1) {
                max = strArr[j] + 1;
            }
        }
        
        strArr[target] = max;

        if(answer < max) {
            answer = max;
        }
    }

    return answer
};