function solution(cards) {
    const len = cards.length;
    const group = [];
    const checker = Array.from({length: len}, () => false);
    
    for(let i = 0; i < len; i += 1) {
        if(checker[i]) {
            continue;
        }
        
        checker[i] = true;
        
        let count = 1;
        let nextIdx = cards[i] - 1;
        
        while(nextIdx) {
            checker[nextIdx] = true;
            
            if(cards[nextIdx] - 1 === nextIdx) {
                break;
            }
            
            if(checker[cards[nextIdx] - 1]) {
                nextIdx = null;
            }
            
            count ++;
            
            nextIdx = cards[nextIdx] - 1;
        }
        
        group.push(count);
    }
    
    if(group.length === 1) {
        return 0;
    }
    
    group.sort((a, b) => b - a);
    
    return group[0] * group[1];
}