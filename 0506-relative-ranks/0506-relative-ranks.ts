function findRelativeRanks(score: number[]): string[] {
    const answer = [];
    const hash = {};
    const len = score.length;
    
    for(let i = 0; i < len; i += 1) {
        hash[score[i]] = i;
    }

    score.sort((a, b) => b - a);

    for(let i = 0; i < len; i += 1) {
        const idx = hash[score[i]];

        if(i === 0) {
            answer[idx] = "Gold Medal";
            
            continue;
        } 
        
        if(i === 1) {
            answer[idx] = "Silver Medal";
            
            continue;
        }

        if(i === 2) {
            answer[idx] = "Bronze Medal";
            
            continue;
        }
        
        answer[idx] = `${i + 1}`;
    }

    return answer
};