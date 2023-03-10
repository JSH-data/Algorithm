function solution(quiz) {
    const answer = []

    for (let i = 0; i < quiz.length; i++) {
        const letters = quiz[i].split(' ')
        let OX
        if (letters[1] === '+') OX = cal(letters[0], letters[2], letters[4], true)
        else OX = cal(letters[0], letters[2], letters[4], false)
        answer.push(OX ? 'O' : 'X')
    }
    return answer
}

function cal(num1, num2, num3, operator) {
    if (operator) return Number(num1) + Number(num2) === Number(num3)
    else return Number(num1) - Number(num2) === Number(num3)
}