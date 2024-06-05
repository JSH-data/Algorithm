function commonChars(words: string[]): string[] {
    const answer = [];
    
    let acc = {};

    for(let i = 0; i < words.length; i += 1) {
        const w = words[i];

        const tmp = {}

        for(let j = 0; j < w.length; j += 1) {
            if(tmp[w[j]]) {
                tmp[w[j]] += 1;
            } else {
                tmp[w[j]] = 1;
            } 
        }

        if(i === 0) {
            acc = tmp;

            continue;
        }

        const hit = {};

        for(let [key, value] of Object.entries(tmp)) {
            if(acc[key]) {
                hit[key] = ( value < acc[key] ? value : acc[key])
            }
        }

        acc = hit;
    }

    for(let [key, value] of Object.entries(acc)) {
        const v = value as number;

        for(let i = 0; i < v; i += 1) {
            answer.push(key);
        }
    }

    return answer;
};