function solution(survey, choices) {
    const set = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 }
    for (let i = 0; i < choices.length; i++) {
        const [first, second] = survey[i].split('')
        if (choices[i] - 4 > 0) set[second] += choices[i] - 4
        else if (choices[i] - 4 < 0) set[first] += -(choices[i] - 4)
    }
    return comp(set, 'R', 'T') + comp(set, 'C', 'F') + comp(set, 'J', 'M') + comp(set, 'A', 'N')
}

function comp(set, key1, key2) {
    return set[key1] >= set[key2] ? key1 : key2
}