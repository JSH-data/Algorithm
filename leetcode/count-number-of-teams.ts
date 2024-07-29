function numTeams(rating: number[]): number {
    let answer = 0;

    const len = rating.length

    for(let i = 0; i < len; i += 1) {
        answer += calc(i, rating[i])
    }

    function calc(index, value) {
        let lSmall = 0; 
        let lBig = 0;
        let rSmall = 0; 
        let rBig = 0;

        for(let i = 0; i < len; i += 1) {
            if(i === index) {
                continue;
            }

            if(i < index) {
                if(rating[i] > value) {
                    lBig += 1;
                } else {
                    lSmall += 1;
                }

                continue
            }

            if(rating[i] > value) {
                rBig += 1;
            } else {
                rSmall += 1;
            }
        }

        return lSmall * rBig + lBig * rSmall
    }


    return answer;
};