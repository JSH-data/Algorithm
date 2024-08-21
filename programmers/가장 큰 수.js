function solution(numbers) {
    numbers.sort((a, b) => {
        const first = Number(`${a}${b}`);
        const second = Number(`${b}${a}`);
        
        return second - first;
    });
    
    const answer = numbers.join("");
    
    return Number(answer) === 0 ? "0" : answer;
}