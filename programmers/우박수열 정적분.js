function solution(k, ranges) {
    const answer = [];
    const acc = [];
    
    let num = k;
    let count = 0;
    
    while(num !== 1) {
        if(num % 2 === 0) {
            num = num / 2;
        } else {
            num = num * 3 + 1;
        }
        
        count += 1;
        
        if(count === 1) {
            const d = (k + num) / 2;
            
            acc.push({
                x: count,
                y: num,
                d
            })
            
            continue;
        }
        
        const d = (acc[count - 2].y + num) / 2;
        
        acc.push({
            x: count,
            y: num,
            d
        })
    }

    for(let i = 0; i < ranges.length; i += 1) {
        const start = ranges[i][0];
        const end = count + ranges[i][1];
        
        if(start > end) {
            answer.push(-1.0)
            
            continue;
        }
        
        let sum = 0;
        
        for(let j = start; j < end; j += 1) {
            sum += acc[j].d;
        }
        
        answer.push(sum);
    }
    
    return answer;
}