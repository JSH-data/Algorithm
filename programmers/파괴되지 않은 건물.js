function makeAcc(skill, width, height) {
    const accArr = Array.from(
        {length: height + 1}, 
        () => new Array(width + 1).fill(0)
    );
    
    for(let [type, r1, c1, r2, c2, degree] of skill) {
        const v = type === 1 ? -degree : degree;
        
        accArr[r1][c1] += v;
        accArr[r1][c2 + 1] += -v;
        accArr[r2 + 1][c2 + 1] += v;
        accArr[r2 + 1][c1] += -v;
    }
    
    for(let i = 0; i < height + 1; i += 1) {
        for(let j = 1; j < width + 1; j += 1) {
            accArr[i][j] = accArr[i][j - 1] + accArr[i][j]
        }
    }
    
    for(let i = 0; i < width + 1; i += 1) {
        for(let j = 1; j < height + 1; j += 1) {
            accArr[j][i] = accArr[j - 1][i] + accArr[j][i];
        }
    }
    
    return accArr;
}

function solution(board, skill) {
    let answer = 0;
    
    const width = board[0].length;
    const height = board.length;
    const accArr = makeAcc(skill, width, height);
    
    for(let x = 0; x < height; x += 1) {
        for(let y = 0; y < width; y += 1) {
            const val = accArr[x][y] + board[x][y];
            
            if(val > 0) {
                answer += 1;
            }
        }
    }
    
    return answer;
}