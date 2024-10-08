function check(str) {
    const len = str.length
    const c = Math.floor(len / 2);
    
    for(let i = 0; i < c; i++) {
        if(str[i] !== str[len - 1 - i]) return false
    }
    
    return true
}

function solution(s) {
    let count = s.length;
    
    while(count > 0) {
        for(let i = 0; i <= s.length - count; i++) {
            const tmp = s.substring(i, count + i);
            const isPalindrome = check(tmp);
            
            if(isPalindrome) {
                return tmp.length
            }
        }
        
        count --
    }
}