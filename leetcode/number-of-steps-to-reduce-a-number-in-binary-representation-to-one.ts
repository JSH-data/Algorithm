function numSteps(s: string): number {
    let count = 0;
    let num = BigInt(0);
    
    const len = s.length;

    for(let i = 0; i < len; i += 1) {
        if(s[len - 1 - i] === "1") {
            num += BigInt(2 ** i)
        }
    }

    while(num != BigInt(1)) {
        if(num % BigInt(2) === BigInt(0)) {
            num = (num) / BigInt(2)
        } else {
            num += BigInt(1);
        }

        count += 1
    }
    
    return count;
};