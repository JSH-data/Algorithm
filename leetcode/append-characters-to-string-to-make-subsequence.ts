function appendCharacters(s: string, t: string): number {
    let idx = 0;

    for(let i = 0; i < s.length; i += 1) {
        if(s[i] === t[idx]) {
            idx += 1;
        }
    }

    return t.length - idx;
};