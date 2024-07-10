function minOperations(logs: string[]): number {
    let answer = 0;

    for(let i = 0; i < logs.length; i += 1) {
        const cmd = logs[i];

        if(cmd === "../") {            
            if(answer >= 1) {
                answer -= 1;
            }
        
            continue
        }

        if(cmd === "./") {
            continue
        }

        answer += 1;
    }

    return answer
};