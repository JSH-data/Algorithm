function solution(lines) {
    let answer = 0

    const max = Math.max(lines[0][1], lines[1][1], lines[2][1])
    const min = Math.min(lines[0][0], lines[1][0], lines[2][0])

    for (let i = min; i < max; i++) {
        const line = checking(lines, i)
        if (line) answer++
    }
    return answer
}

function checking(lines, num) {
    const center = num + 0.5
    let overlap = 0
    for (let i = 0; i < lines.length; i++) {
        if (lines[i][0] < center && lines[i][1] > center) overlap++
    }
    return overlap > 1 ? true : false
}
