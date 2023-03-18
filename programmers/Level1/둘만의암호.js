function solution(s, skip, index) {
    const skipSet = makeSkipSet(skip)
    let answer = ''
    for (let i = 0; i < s.length; i++) {
        answer += pushingText(s[i], skipSet, index)
    }
    return answer
}

function pushingText(t, skipSet, index) {
    let count = index
    let pushing = t.charCodeAt()
    while (count) {
        pushing += 1
        if (pushing > 122) pushing = 97
        if (skipSet[pushing]) continue
        count -= 1
    }
    return String.fromCharCode(pushing)
}

function makeSkipSet(skip) {
    const skipSet = {}
    for (let i = 0; i < skip.length; i++) {
        const ascii = skip[i].charCodeAt()
        skipSet[ascii] = true
    }
    return skipSet
}