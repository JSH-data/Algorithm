function solution(ingredient) {
    let answer = 0
    const bugerStack = []

    for (let i = 0; i < ingredient.length; i++) {
        if (ingredient[i] === 1
            && bugerStack.length > 2
            && bugerStack.at(-1) === 3
            && bugerStack.at(-2) === 2
            && bugerStack.at(-3) === 1
        ) {
            bugerStack.splice(-3, 3)
            answer += 1
        }
        else bugerStack.push(ingredient[i])
    }

    return answer
}