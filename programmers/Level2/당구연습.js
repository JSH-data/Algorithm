function solution(m, n, startX, startY, balls) {
    const answer = []
    const defaultOpt = {
        w: m, h: n, x: startX, y: startY
    }
    for (let i = 0; i < balls.length; i++) {
        const [targetX, targetY] = balls[i]
        const minDistance = calcMinDistance(defaultOpt, targetX, targetY)
        answer.push(minDistance)
    }
    return answer
}

function calcMinDistance(opt, targetX, targetY) {
    const left = leftMove(opt.x, opt.y, targetX, targetY)
    const right = rightMove(opt.x, opt.y, targetX, targetY, opt.w)
    const top = topMove(opt.x, opt.y, targetX, targetY, opt.h)
    const bottom = bottomMove(opt.x, opt.y, targetX, targetY)
    const rightTop = cornerRT(opt.x, opt.y, targetX, targetY)
    const leftTop = cornerLT(opt.x, opt.y, targetX, targetY)
    const rightBottom = cornerRB(opt.x, opt.y, targetX, targetY)
    const leftBottom = cornerLB(opt.x, opt.y, targetX, targetY)
    return Math.min(left, right, top, bottom,
        rightTop, leftTop, rightBottom, leftBottom)
}

function leftMove(sX, sY, tX, tY) {
    if (sX > tX && sY === tY) return Infinity
    else return (tX + sX) ** 2 + (tY - sY) ** 2
}
function rightMove(sX, sY, tX, tY, w) {
    if (sX < tX && sY === tY) return Infinity
    else return (sX + 2 * (w - sX) - tX) ** 2 + (tY - sY) ** 2
}
function topMove(sX, sY, tX, tY, h) {
    if (sX === tX && sY < tY) return Infinity
    else return (sX - tX) ** 2 + (2 * (h - sY) + sY - tY) ** 2
}
function bottomMove(sX, sY, tX, tY) {
    if (sX === tX && sY > tY) return Infinity
    else return (tX - sX) ** 2 + (tY + sY) ** 2
}
function cornerRT(sX, sY, tX, tY, w, h) {
    const inc1 = (h - sY) / (w - sX)
    const inc2 = (h - tY) / (w - tX)
    if (inc1 !== inc2) return Infinity
    const dist1 = (w - sX) ** 2 + (h - sY) ** 2
    const dist2 = (w - tX) ** 2 + (h - tY) ** 2
    if (dist2 < dist1) return Infinity
    return dist1 + dist2
}
function cornerLT(sX, sY, tX, tY, h) {
    const inc1 = (h - sY) / -sX
    const inc2 = (h - tY) / -tX
    if (inc1 !== inc2) return Infinity
    const dist1 = (-sX) ** 2 + (h - sY) ** 2
    const dist2 = (-tX) ** 2 + (h - tY) ** 2
    if (dist2 < dist1) return Infinity
    return dist1 + dist2
}
function cornerRB(sX, sY, tX, tY, w) {
    const inc1 = -sY / (w - sX)
    const inc2 = -tY / (w - tX)
    if (inc1 !== inc2) return Infinity
    const dist1 = (w - sX) ** 2 + (-sY) ** 2
    const dist2 = (w - tX) ** 2 + (-tY) ** 2
    if (dist2 < dist1) return Infinity
    return dist1 + dist2
}
function cornerLB(sX, sY, tX, tY) {
    const inc1 = sY / sX
    const inc2 = tY / tX
    if (inc1 !== inc2) return Infinity
    const dist1 = (sX) ** 2 + (sY) ** 2
    const dist2 = (tX) ** 2 + (tY) ** 2
    if (dist2 < dist1) return Infinity
    return dist1 + dist2
}
