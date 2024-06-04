function longestPalindrome(s: string): number {
    let answer = 0;

    const set = new Set();

    for(let i = 0; i < s.length; i += 1) {
        if(!set.has(s[i])) {
            set.add(s[i]);

            continue;
        }
        
        set.delete(s[i]);
        answer += 2;
    }

    if(set.size >= 1) {
        return answer + 1;
    }

    return answer;
};