function solution(wallpaper) {
    const xArr = []
    const yArr = []

    const width = wallpaper.length
    const height = wallpaper[0].length

    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            if (wallpaper[x][y] === '#') {
                xArr.push(x)
                yArr.push(y)
            }
        }
    }
    const lux = Math.min(...xArr)
    const luy = Math.min(...yArr)
    const rdx = Math.max(...xArr) + 1
    const rdy = Math.max(...yArr) + 1

    return [lux, luy, rdx, rdy]
}