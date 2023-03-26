function solution(k, tangerine) {
    const countSort = makeCountSorting(tangerine)
    let acc = 0
    for (let i = 0; i < countSort.length; i++) {
        if (acc + countSort[i] >= k) return i + 1
        else acc += countSort[i]
    }
}

function makeCountSorting(tangerine) {
    const tMap = {}
    // 한줄로 리팩토링
    tangerine.forEach((t) => tMap[t] = (tMap[t] || 0) + 1);
    // 한줄로 리팩토링
    return Object.values(tMap).sort((a, b) => b - a)
}