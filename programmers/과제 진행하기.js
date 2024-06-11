function solution(plans) {
    const answer = [];
    const stack = [];    
    const pLen = plans.length;
    
    for(let i = 0; i < pLen; i += 1) {
        const [h, m] = plans[i][1].split(":");
        
        plans[i][1] = Number(h) * 60 + Number(m);
        plans[i][2] = Number(plans[i][2]);
    }
    
    plans.sort((a, b) => a[1] - b[1]);
    
    for(let i = 0; i < pLen; i += 1) {
        const endTime = plans[i][1] + plans[i][2];
        
        let leftTime = 0;
        
        if(plans[i + 1]) {
            if(plans[i + 1][1] < endTime) {
                stack.push({ name: plans[i][0], left: endTime - plans[i + 1][1] });
                
                continue;
            }
            
            if(plans[i + 1][1] === endTime) {
                answer.push(plans[i][0]);
                
                continue;
            }
        
            if(plans[i + 1][1] > endTime) {
                answer.push(plans[i][0]);
                
                leftTime = plans[i + 1][1] - endTime;
            }
        } else {
            answer.push(plans[i][0])
            
            leftTime = Number.MAX_SAFE_INTEGER;
        }
        
        while(stack.length && leftTime > 0) {
            const p = stack.pop();
            
            if(p.left <= leftTime) {
                leftTime -= p.left;
                answer.push(p.name);
            } else {
                p.left -= leftTime;
                leftTime = 0;
                stack.push(p);
            }
        }
    }
    
    return answer;
}