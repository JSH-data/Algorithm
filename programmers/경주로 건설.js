function init(board) {
    const result = [];
    
    if(board[0][1] !== 1) {
        result.push([0, 0, 1, 0]);
    }
    
    if(board[1][0] !== 1) {
        result.push([0, 0, 2, 0]);
    }
    
    return result;
}

function solution(board) {
    const n = board.length;
    const isValid = (x, y) => x >= 0 && x < n && y >= 0 && y < n && board[x][y] !== 1;
    
    const dp = Array.from({length: n}, () => Array.from({length: n}, () => Array(4).fill(Infinity)));
    
    const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];    
    const queue = init(board);
    
    while(queue.length) {
        const [x, y, dirIdx, cost] = queue.shift();
        
        dirs.forEach(([dx, dy], idx) => {
            const [nx, ny] = [dx + x, dy + y];
            
            if(!isValid(nx, ny)) {
                return;
            }
            
            const newCost = cost + (idx === dirIdx ? 100 : 600);
            
            if(newCost < dp[nx][ny][idx]) {
                dp[nx][ny][idx] = newCost;
                
                queue.push([nx, ny, idx, newCost]);
            }
        })
    }
    
    return Math.min(...dp[n - 1][n - 1]);
}