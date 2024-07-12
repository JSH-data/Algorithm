function maximumGain(s: string, x: number, y: number): number {
    let answer = 0;

    const highStr = x > y ? "ab" : "ba";
    const highPoint = x > y ? x : y;
    const lowStr = x > y ? "ba" : "ab";
    const lowPoint = x > y ? y : x;

    const stack = [];

    for(let i = 0; i < s.length; i += 1) {
        const last = stack[stack.length - 1];
        const cur = s[i];

        if(last + cur === highStr) {
            stack.pop();
            answer += highPoint;

            continue;
        }

        stack.push(cur);
    }
    
    let newStack = [];

    for(let i = 0; i < stack.length; i += 1) {
        const last = newStack[newStack.length - 1];
        const cur = stack[i];

        if(last + cur === lowStr) {
            newStack.pop();
            answer += lowPoint;

            continue;
        }

        if(last + cur === highStr) {
            newStack.pop();
            answer += highPoint;

            continue;
        }

        newStack.push(cur);
    }

    return answer;
};