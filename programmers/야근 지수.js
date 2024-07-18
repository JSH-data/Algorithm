function solution(n, works) {
    let left = n;
    
    works.sort((a, b) => b - a);
        
    while(left > 0) {
        works[0] -= 1;
        left -= 1;
        
        if(left === 0) {
            break;
        } 
        
        const max = works[0];
        
        for(let i = 1; i < works.length; i += 1) {
            if(works[i] > 0 && max <= works[i]) {
                left -= 1;
                works[i] -= 1;
            }
            
            if(left === 0) {
                break;
            }
        }
        
        if(max === 0 || left === 0) {
            break;
        }
        
    }
    
    return works.reduce((acc, cur) => cur ** 2 + acc, 0);
}