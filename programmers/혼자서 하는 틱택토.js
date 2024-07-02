function solution(board) {        
    let oCount = 0;
    let xCount = 0;
    let oWinCount = 0;
    let xWinCount = 0;
    
    for(let x = 0; x < 3; x += 1) {    
        for(let y = 0; y < 3; y += 1) {
            if(board[x][y] === "O") {
                oCount += 1;
            } else if (board[x][y] === "X") {
                xCount += 1;
            }           
        }
    }
    
    for(let i = 0; i < 3; i += 1) {
        if(board[i] === "OOO") {
            oWinCount += 1;
        } else if(board[i] === "XXX") {
            xWinCount += 1;
        }
    }
    
    for(let i = 0; i < 3; i += 1) {
        const column = `${board[0][i]}${board[1][i]}${board[2][i]}`;
        
        if(column === "OOO") {
            oWinCount += 1;
        } else if(column === "XXX") {
            xWinCount += 1;
        }
    }
    
    const rCross = `${board[0][0]}${board[1][1]}${board[2][2]}`;
    
    if(rCross === "OOO") {
        oWinCount += 1;
    } else if(rCross === "XXX") {
        xWinCount += 1;
    }
    
    const lCross = `${board[0][2]}${board[1][1]}${board[2][0]}`;
    
    if(lCross === "OOO") {
        oWinCount += 1;
    } else if(lCross === "XXX") {
        xWinCount += 1;
    }
    
    
    if(oCount < xCount) {
        return 0
    }
    
    if(oCount - 1 > xCount) {
        return 0
    }
    
    if(oWinCount > 0 && oCount === xCount) {
        return 0
    }
    
    if(xWinCount > 0 && oCount !== xCount) {
        return 0
    }
    
    return 1
}

// O가 이겼는데 숫자가 같으면
// 승부가 안났는데