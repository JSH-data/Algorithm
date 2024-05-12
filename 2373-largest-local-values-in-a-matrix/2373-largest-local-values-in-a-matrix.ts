function largestLocal(grid: number[][]): number[][] {
    const n = grid.length;
    const answer = Array.from({length: n - 2}, () => new Array(n - 2));

    const findMax = (x, y) => {
        let max = 0;

        for(let i = x; i <= x + 2; i += 1) {
            for(let j = y; j <= y + 2; j += 1) {
                if(grid[i][j] > max) {
                    max = grid[i][j];
                }
            }
        }
        
        return max
    }

    for(let i = 0; i < n - 2; i += 1) {
        for(let j = 0; j < n - 2; j += 1) {
            answer[i][j] = findMax(i, j)
        }
    }

    return answer;
};