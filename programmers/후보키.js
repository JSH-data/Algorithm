function solution(relation) {
    const answer = new Set();
    const cLen = relation[0].length;
    const rLen = relation.length;
    const cases = 1 << cLen;
    
    for(let i = 1; i < cases; i += 1) {
        const combinationRow = relation.map((row) => {
            const filteredRow = row.filter((col, idx) => {
                const binaryIdx = 1 << idx;
                
                return binaryIdx & i;
            })
            
            return filteredRow.join("");
        });
        
        const combinationSet = new Set(combinationRow)
        
        if(combinationSet.size === rLen) {
            answer.add(i);
        }
    }
    
    for(const prev of answer) {
        for(const post of answer) {
            if(prev === post) {
                continue;
            }
            
            const isOverlap = prev & post;
            
            if(isOverlap === prev) {
                answer.delete(post);
            }
        }
    }
    
    return answer.size;
}