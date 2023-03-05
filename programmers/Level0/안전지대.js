function solution(board) {
    const width = board[0].length
    const height = board.length

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            if (board[x][y] === 1) setBomb(board, x, y, width, height)
        }
    }

    let answer = 0

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            if (0 === board[x][y]) answer++
        }
    }

    return answer
}

function setBomb(board, x, y, width, height) {
    const dx = [0, 1, 1, 1, 0, -1, -1, -1]
    const dy = [1, 1, 0, -1, -1, -1, 0, 1]
    for (let i = 0; i < 8; i++) {
        const calX = x + dx[i]
        const calY = y + dy[i]
        if (0 <= calX && width > calX && 0 <= calY && height > calY && board[calX][calY] === 0) {
            board[calX][calY] = -1
        }
    }
}