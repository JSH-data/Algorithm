function scoreOfString(s: string): number {
    let totalScore = 0;

    for (let i = 0; i < s.length - 1; i++) {
        totalScore += Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
    }
    
    return totalScore;
};