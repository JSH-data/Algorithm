function solution(board) {
    const { checkBoard, sBoard, bfsArr, w, h } = bfsInit(board)
    while (bfsArr.length) {
        const [x, y, count] = bfsArr.shift()
        if (sBoard[x][y] === 'G') return count
        const nextSteps = move4Ways(checkBoard, sBoard, x, y, count)
        bfsArr.push(...nextSteps)
    }
    return -1
}

function bfsInit(board) {
    let x = 0
    let y = 0
    let count = 0
    const w = board[0].length
    const h = board.length
    const checkBoard = Array.from(new Array(h), () => new Array(w).fill(false));
    const sBoard = board.map((v, i) => {
        const row = v.split('')
        if (row.indexOf('R') !== -1) {
            x = i
            y = row.indexOf('R')
            checkBoard[x][y] = true
        }
        return row
    })

    const bfsArr = move4Ways(checkBoard, sBoard, x, y, count)
    return { checkBoard, sBoard, bfsArr, w, h }
}

function moveRight(sBoard, x, y) {
    let right = -1
    for (let i = y + 1; i < sBoard[0].length; i++) {
        if (sBoard[x][i] !== 'D') right = i
        else break
    }
    return right
}

function moveLeft(sBoard, x, y) {
    let left = -1
    for (let i = y - 1; i >= 0; i--) {
        if (sBoard[x][i] !== 'D') left = i
        else break
    }
    return left
}

function moveTop(sBoard, x, y) {
    let top = -1
    for (let i = x - 1; i >= 0; i--) {
        if (sBoard[i][y] !== 'D') top = i
        else break
    }
    return top
}

function moveBottom(sBoard, x, y) {
    let bottom = -1
    for (let i = x + 1; i < sBoard.length; i++) {
        if (sBoard[i][y] !== 'D') bottom = i
        else break
    }
    return bottom
}

function move4Ways(checkBoard, sBoard, x, y, count) {
    const moveCoords = []
    const top = moveTop(sBoard, x, y)
    if (top !== -1 && !checkBoard[top][y]) {
        moveCoords.push([top, y, count + 1])
        checkBoard[top][y] = true
    }
    const bottom = moveBottom(sBoard, x, y)
    if (bottom !== -1 && !checkBoard[bottom][y]) {
        moveCoords.push([bottom, y, count + 1])
        checkBoard[bottom][y] = true
    }
    const right = moveRight(sBoard, x, y)
    if (right !== -1 && !checkBoard[x][right]) {
        moveCoords.push([x, right, count + 1])
        checkBoard[x][right] = true
    }
    const left = moveLeft(sBoard, x, y)
    if (left !== -1 && !checkBoard[x][left]) {
        moveCoords.push([x, left, count + 1])
        checkBoard[x][left] = true
    }
    return moveCoords
}
