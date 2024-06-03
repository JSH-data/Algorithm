function solution(n) {
    const answer = Array.from(
        { length: n }, 
        () => new Array(n).fill(undefined)
    );
    
    let method = "R";
    
    let acc = 1;
    
    let x = 0;
    let y = 0;
    
    const right = () => {
        let flag = true;
        
        while(flag) {
            answer[y][x] = acc
            
            if(x === n - 2 || answer[y][x + 2] != undefined) {
                flag = false;
            }
            
            acc += 1;
            x += 1;
        }
        
        method = "D";
    }
    
    const down = () => {
        let flag = true;
        
        while(flag) {                        
            answer[y][x] = acc
            
            if(y === n - 2 || answer[y + 2][x] != undefined) {
                flag = false;
            }
            
            acc += 1;
            y += 1;
        }
        
        method = "L";
    }
    
    const left = () => {
        let flag = true;
        
        while(flag) {
            answer[y][x] = acc
            
            if(x === 1 || answer[y][x - 2] != undefined) {
                flag = false;
            }
            
            acc += 1;
            x -= 1;
        }
        
        method = "U";
    }
    
    const up = () => {
        let flag = true;
        
        while(flag) {
            answer[y][x] = acc
            
            if(y === 1 || answer[y - 2][x] != undefined) {
                flag = false;
            }
            
            acc += 1;
            y -= 1;
        }
        
        method = "R";
    }
    
    while(acc !== n**2) {
        if(method === "R") {
            right();
            
            continue;
        }
        
        if(method === "D") {
            down();
            
            continue;
        }
        
        if(method === "L") {
            left();
            
            continue;
        }
        
        if(method === "U") {
            up();
            
            continue;
        }
    }
    
    answer[y][x] = acc;
    
    return answer;
}