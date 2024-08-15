function solution(scores) {  
    let answer = 0;
    
    const targetSum = scores[0][0] + scores[0][1];
    
    scores[0] = [...scores[0], true];
    scores.sort((a, b) => {
        if(a[0] === b[0]) {
            return a[1] - b[1];
        }
        
        return b[0] - a[0]
    })
    
    let maxColleagueScore = 0;
    
    for(let score of scores) {
        if(maxColleagueScore > score[1]) {
            if(score[2]) {
                return -1;
            }
        } else {
            maxColleagueScore = score[1];
            
            if(score[0] + score[1] > targetSum) {
                answer += 1;
            }
        }
    }
    
    return answer + 1;
}