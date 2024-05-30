function solution(maps) {    
    const lever = {};
    
    const exit = {};
    const start = {};
    
    const w = maps[1].length;
    const h = maps.length;
    
    for(let i = 0; i < h; i += 1) {
        for(let j = 0; j < w; j += 1) {
            if(maps[i][j] === "E") {
                exit.x = j;
                exit.y = i;
            }
            
            if(maps[i][j] === "L") {
                lever.x = j;
                lever.y = i;
            }
            
            if(maps[i][j] === "S") {
                start.x = j;
                start.y = i;
            }
            
            if(lever.x && exit.x && start.x) break;
        }
        
        if(lever.x && exit.x && start.x) break;
    }
    
    const check = (y, x, hash, count) => {
        const nextGrounds = [];
        
        const north = `${y-1}-${x}`;
        const east = `${y}-${x+1}`;
        const south = `${y+1}-${x}`;
        const west = `${y}-${x-1}`;
        
        if(y - 1 >= 0 && maps[y - 1][x] !== "X" && !hash.has(north)) {
            nextGrounds.push([y - 1, x, count + 1]);
            hash.add(north);
        }
        
        if(x + 1 < w && maps[y][x + 1] !== "X" && !hash.has(east)) {
            nextGrounds.push([y, x + 1, count + 1]);
            hash.add(east);
        }
        
        if(y + 1 < h && maps[y + 1][x] !== "X" && !hash.has(south)) {
            nextGrounds.push([y + 1, x, count + 1]);
            hash.add(south);
        }
        
        if(x - 1>= 0 && maps[y][x - 1] !== "X" && !hash.has(west)) {
            nextGrounds.push([y, x - 1, count + 1]);
            hash.add(west);
        }
        
        return nextGrounds;
    }
    
    const bfs = (y, x, target) => {
        const queue = [[y, x, 0]];
        const set = new Set([`${y}-${x}`]);
        
        while(queue.length) {
            const [dY, dX, count] = queue.shift();
            
            if(dY === target.y && dX === target.x) {
                return count
            }
            
            const nextGrounds = check(dY, dX, set, count);
            
            queue.push(...nextGrounds);
        }
        
        return -1;
    }
    
    const toLever = bfs(start.y, start.x, lever);
    
    if(toLever === -1) {
        return -1;
    }
    
    const toExit = bfs(lever.y, lever.x, exit);
    
    if(toExit === -1) {
        return -1;
    }
    
    return toLever + toExit;
}