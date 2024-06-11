function relativeSortArray(arr1: number[], arr2: number[]): number[] {
    const hash = {};
    const answer = [];
    const except = [];

    for(let i = 0; i < arr2.length; i += 1) {
        hash[arr2[i]] = i + 1;
    };

    for(let i = 0; i < arr1.length; i += 1) {
        if(hash[arr1[i]]) {
            answer.push(arr1[i])

            continue;
        } 

        except.push(arr1[i]);
    };
    
    answer.sort((a, b) => hash[a] - hash[b]);
    except.sort((a, b) => a - b);

    for(let i = 0; i < except.length; i += 1) {
        answer.push(except[i]);
    }

    return answer;
};