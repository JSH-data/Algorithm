function reverseParentheses(s: string): string {
    const stack = [];

    for(let c of s) {
        if(c === ")") {
            const tempStack = [];

            while(stack[stack.length - 1] !== "(") {
                tempStack.push(stack.pop());

                if(stack.length === 0) {
                    break;
                }
            }

            stack.pop();

            for(let t of tempStack) {
                stack.push(t);
            }

            continue;
        }

        stack.push(c)
    } 

    return stack.join("");
};