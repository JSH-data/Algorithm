function minimumPushes(word: string): number {
    const obj = [];

    for(let i = 0; i < word.length; i += 1) {
        if(!obj[word[i]]) {
            obj[word[i]] = 0;
        }

        obj[word[i]] += 1;
    }

    const arr = [];

    for(let [key, num] of Object.entries(obj)) {
        arr.push(num);
    }

    arr.sort((a, b) => b - a);

    let answer = 0;

    for(let i = 0; i < arr.length; i += 1) {
        const q = Math.floor(i / 8);

        answer += (q + 1) * arr[i];
    }

    return answer
};
