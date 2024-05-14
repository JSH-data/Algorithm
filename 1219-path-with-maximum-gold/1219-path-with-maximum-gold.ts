function getMaximumGold(grid: number[][]): number {
    let answer = 0;

    const w = grid[0].length;
    const h = grid.length;

    const dfs = (x, y, acc, hash) => {
        const key = `${x}${y}`;
        
        if(hash.has(key)) {
            return
        }

        hash.add(key);

        if(w > x + 1 && grid[y][x + 1]) {
            dfs(x + 1, y, acc + grid[y][x + 1], hash)
        }

        if(0 <= x - 1 && grid[y][x - 1]) {
            dfs(x - 1, y, acc + grid[y][x - 1], hash);
        }

        if(h > y + 1 && grid[y + 1][x]) {
            dfs(x, y + 1, acc + grid[y + 1][x], hash);
        }
        
        if(0 <= y - 1 && grid[y - 1][x]) {
            dfs(x, y - 1, acc + grid[y - 1][x], hash);
        }

        hash.delete(key);

        if(answer < acc) {
            answer = acc;
        }
    }

    for(let i = 0; i < h; i += 1) {
        for(let j = 0; j < w; j += 1) {
            if(grid[i][j] !== 0) {
                const hash = new Set();

                dfs(j, i, grid[i][j], hash);
            }
        }
    }

    return answer;
};