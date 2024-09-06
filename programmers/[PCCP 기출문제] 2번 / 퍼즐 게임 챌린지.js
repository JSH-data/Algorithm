function getMinMax(arr) {
    let min = Infinity;
    let max = -Infinity;
    
    for(let val of arr) {
        if(val < min) {
            min = val;
        }
        
        if(val > max) {
            max = val;
        }
    }
    
    return [min, max];
}

function getAccTime(level, diffs, times, len, limit) {
    let accTime = 0;
    let prevTime = 0;
    
    for(let i = 0; i < len; i += 1) {
        if(level >= diffs[i]) {
            accTime += times[i];
        } else {
            const wrongCount = diffs[i] - level;
        
            accTime += (wrongCount * (prevTime + times[i])) + times[i];
        }
        
        if(accTime > limit) {
            return -1;
        }
        prevTime = times[i];
    }
    
    return accTime;
}

function solution(diffs, times, limit) {
    const len = diffs.length;
        
    let [left, right] = getMinMax(diffs);
    
    while(left < right) {
        const level = parseInt((left + right) / 2);
        const accTime = getAccTime(level, diffs, times, len);
        
        if(accTime === -1 || accTime > limit) {
            left = level + 1;
            
            continue;
        }
        
        if(accTime <= limit) {
            right = level;
        }
    }
    
    return left;
}