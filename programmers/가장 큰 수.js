function solution(numbers) {
    numbers.sort((a, b) => {
        const first = Number(`${a}${b}`);
        const second = Number(`${b}${a}`);
        
        return second - first;
    });
    
    let flag = true;
    let answer = '';
    
    for(let i = 0; i < numbers.length; i += 1) {
        if(numbers[i] === 0 && flag) {
            continue;
        } else {
            if(flag) {
                flag = false;
            }
            
            answer += numbers[i];
        }
    }
    
    if(answer === "") {
        return "0";
    }
    
    return answer;
}