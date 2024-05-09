function maximumHappinessSum(happiness: number[], k: number): number {
    let answer = 0;
    let turn = k;

    happiness.sort((a, b) => b - a);

    for(let i = 0; i < k; i += 1) {
        const happy = happiness[i] - i;

        if(happy > 0) {
            answer += happy
        }
    }

    return answer;
};