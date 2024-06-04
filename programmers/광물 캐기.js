function solution(picks, minerals) {
    let answer = 0;
    
    const sum = picks.reduce((acc, cur) => acc + cur, 0);
    const subtract = [];
    
    for(let i = 0; i < sum * 5; i += 5) {
        if(minerals[i] === undefined) {
            break;
        }
        
        const tmp = {d: 0, i: 0, s: 0};
        
        for(let j = i; j < i + 5; j += 1) {
            if(minerals[j] === undefined) {
                break;
            }
            
            if(minerals[j] === "diamond") {
                tmp.d += 1;
                tmp.i += 5;
                tmp.s += 25;
                
                continue;    
            }
            
            if(minerals[j] === "iron") {
                tmp.d += 1;
                tmp.i += 1;
                tmp.s += 5;
                
                continue;
            }
            
            if(minerals[j] === "stone") {
                tmp.d += 1;
                tmp.i += 1;
                tmp.s += 1;
                
                continue;
            }
        }
        
        subtract.push(tmp)
    }
    
    subtract.sort((a, b) =>  b.s - a.s)
    
    for(let i = 0; i < subtract.length; i += 1) {
        if(picks[0] > 0) {
            answer += subtract[i].d;
            picks[0] -= 1;
            
            continue;
        }
        
        if(picks[1] > 0) {
            answer += subtract[i].i;
            picks[1] -= 1;
            
            continue;
        }
        
        if(picks[2] > 0) {
            answer += subtract[i].s;
            picks[2] -= 1;
        }
    }
    
    return answer;
}