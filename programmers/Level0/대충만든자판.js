function solution(keymap, targets) {
    const answer = []
    const keyMapping = makeKeyMapping(keymap)

    for (let i = 0; i < targets.length; i++) {
        let count = 0
        for (let j = 0; j < targets[i].length; j++) {
            if (!keyMapping[targets[i][j]]) {
                count = -1
                break
            } else count += keyMapping[targets[i][j]]
        }
        answer.push(count)
    }
    return answer
}

function makeKeyMapping(key) {
    const map = {}
    for (let i = 0; i < key.length; i++) {
        for (let j = 0; j < key[i].length; j++) {
            const text = key[i][j]
            if (!map[text] || map[text] > j + 1) map[text] = j + 1
        }
    }
    return map
}