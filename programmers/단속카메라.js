function solution(routes) {
    let answer = 1;
    
    routes.sort((a, b) => {
        if(a[0] === b[0]) {
            return a[1] - b[1];
        }
        
        return a[0] - b[0];
    })
    
    let last = routes[0][1];
    
    for(let i = 1; i < routes.length; i += 1) {
        if(last > routes[i][1]) {
            last = routes[i][1];
            
            continue;
        }
        
        if(last < routes[i][0]) {
            answer += 1;
            last = routes[i][1];
        }
    }
    
    return answer;
}