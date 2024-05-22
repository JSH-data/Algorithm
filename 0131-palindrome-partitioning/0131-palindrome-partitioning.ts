function partition(s: string): string[][] {
    const answer = [];
    const len = s.length;

    const check = (str) => {
        const strLen = str.length; 

        for(let i = 0; i < Math.floor(strLen / 2); i += 1) {
            if(str[i] !== str[strLen - i - 1]) {
                return false;
            }    
        }

        return true;
    }
    
    const getSubsets = (str) => {
        const arr = [];

        for(let i = 0; i < str.length; i += 1) {
            arr.push([str.substring(0, i + 1), str.substring(i + 1)]);
        }

        return arr;
    }

    const dfs = (str, nextStr, arr) => {
        const subsets = getSubsets(nextStr);

        for(let i = 0; i < subsets.length; i += 1) {
            const isPalin = check(subsets[i][0]);

            if(isPalin && !subsets[i][1].length) {
                answer.push([...arr, subsets[i][0]]);
                
                continue;
            }

            if(isPalin) {
                dfs(subsets[i][0], subsets[i][1], [...arr, subsets[i][0]]);
            }            
        }
    }

    dfs("", s, [])

    return answer
};