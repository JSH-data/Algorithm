function solution(n) {
    const count = change(n);
    
    let target = n;
    
    while(true) {        
        target += 1;
        
        if(change(target) === count) {
            return target;
        } 
    }
}

function change(n) {
    const tmp = n.toString(2).split("");
    
    let cnt = 0;
    
    for(let x of tmp) {
        if(x === "1") cnt ++;
    }
    
    return cnt
}