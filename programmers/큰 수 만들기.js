function solution(number, k) {
    const stack = [];
    
    let count = k;
    
    for(let i = 0; i < number.length; i+= 1) {
        const crt = number[i];
        
        while(count > 0 && stack[stack.length - 1] < crt) {
            stack.pop();
            
            count -= 1;
        }
        
        stack.push(crt);
    }
    
    return stack.slice(0, stack.length - count).join("");
}