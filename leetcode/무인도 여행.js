        return [-1]
    
    const check = (y, x, set) => {
        const result = [];
        
        if(y - 1 >= 0 && maps[y - 1][x] !== "X") {
            result.push([y - 1, x])
        }
        
        if(x + 1 < w && maps[y][x + 1] !== "X") {
            result.push([y, x + 1])
        }
        
        if(y + 1 < h && maps[y + 1][x] !== "X") {
            result.push([y + 1, x])
        }
        
        if(x - 1 >= 0 && maps[y][x - 1] !== "X") {
            result.push([y, x - 1])
        }
        
        return result;
    }
    
    const bfs = (y, x) => {
        let food = 0;
        
        const queue = [[y , x]];
        
        const set = new Set();
        
        while(queue.length) {
            const [dX, dY] = queue.shift();
            
            if(maps[dX][dY] !== "X") {
                food += Number(maps[dX][dY]);
                    
                maps[dX][dY] = "X";
            
                const nextGround = check(dX, dY, set);
            
                queue.push(...nextGround);
            }
        }
        
        return food;
    }
        
    for(let i = 0; i < h; i += 1) {
        maps[i] = maps[i].split("");
    }
    
    for(let i = 0; i < h; i += 1) {
        for(let j = 0; j < w; j += 1) {
            if(maps[i][j] !== "X") {
                const sum = bfs(i, j);
                
                answer.push(sum)
            }    
        }      
    }
    
    if(answer.length === 0) {
        return [-1]
    }