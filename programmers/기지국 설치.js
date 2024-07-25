function solution(n, stations, w) {
    let answer = 0;
    
    const len = w * 2 + 1;
    const cArr = [];
    
    function addStation(target) {
        const start = target - w < 0 ? 0 : target - w;
        const end = target + w >= n ? n : target + w;
        
        if(cArr.length === 0) {
            cArr.push({s: start, e: end});
            
            return;
        }
        
        const {s, e} = cArr[cArr.length - 1];
            
        if(s < start && s >= start) {
            cArr[cArr.length - 1] = { s: s, e: end }

            return;
        }
        
        cArr.push({s: start, e: end});
    }
    
    for(let i = 0; i < stations.length; i += 1) {
        addStation(stations[i])
    }
    
    let accIdx = 1;
    
    for(let i = 0; i < cArr.length; i += 1) {
        const {s, e} = cArr[i];
        
        const diff = s - accIdx;
        
        answer += Math.ceil(diff / len);
        
        accIdx = e + 1;
    }
        
    if(accIdx !== n + 1) {
        answer += Math.ceil((n - accIdx + 1) / len);
    }
    
    return answer
}