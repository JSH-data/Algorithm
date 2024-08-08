function getParent(x, arr) {
    if(x === arr[x]) {
        return x
    }   
    
    return getParent(arr[x], arr);
}

function updateParent(x, y, arr) {
    if(x > y) {
        arr[x] = y
    } else {
        arr[y] = x
    }
}

function solution(n, costs) {
    let answer = 0;
    let count = 0;
    
    const parent = Array.from({length: n}, (_, i) => i);
    
    costs.sort((a, b) => a[2] - b[2]);

    for(let i = 0; i < costs.length; i += 1) {
        if(count === n - 1) {
            break;
        }
        
        const [x, y, w] = costs[i];
        
        const xParent = getParent(x, parent);
        const yParent = getParent(y, parent);
        
        if(xParent !== yParent) {
            updateParent(xParent, yParent, parent);
            
            answer += w;
            count += 1;
        }
    }
    
    return answer;
}