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