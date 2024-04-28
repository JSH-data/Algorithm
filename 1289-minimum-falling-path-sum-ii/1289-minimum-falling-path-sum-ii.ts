function minFallingPathSum(grid: number[][]): number {
    let answer = Number.MAX_SAFE_INTEGER;

    const h = grid.length;
    const w = grid[0].length;
    const dy = Array.from({length: h}, () => new Array(w));
    
    dy[0] = grid[0];

    for(let i = 1; i < h; i += 1) {
        for(let j = 0; j < w; j += 1) {
            let min = Number.MAX_SAFE_INTEGER;
            const current = grid[i][j];

            for(let k = 0; k < w; k += 1) {
                if(j === k) continue;

                if(current + dy[i-1][k] < min) {
                    min = current + dy[i-1][k]
                }
            }
            dy[i][j] = min;

            if(i === h - 1 && answer > min) {
                answer = min;
            }
        }
    }

    if(h === 1) {
        return Math.min(...grid[0]);
    }
    
    return answer
};