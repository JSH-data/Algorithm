function check(n) {
    if(n < 5 && n !== 2) {
        return true;
    }
    
    if(n % 5 === 2) {
        return false;
    }
    
    return check(Math.floor(n/5));
}

function solution(n, l, r) {
    let answer = 0;
    
    for(let i = l - 1; i < r; i += 1) {
        if(check(i)) {
            answer += 1; 
        }
    }
    
    return answer
}
