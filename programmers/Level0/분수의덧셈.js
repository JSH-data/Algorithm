function solution(numer1, denom1, numer2, denom2) {
    const parent = denom1 * denom2
    const child = denom1 * numer2 + denom2 * numer1

    let devider = 1

    if (parent > child) devider = gcd(parent, child)
    else devider = gcd(child, parent)

    return [child / devider, parent / devider]
}

function gcd(a, b) {
    const rest = a % b
    if (rest === 0) return b
    else return gcd(b, rest)
}