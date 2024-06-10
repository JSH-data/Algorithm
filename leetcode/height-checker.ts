function heightChecker(heights: number[]): number {
    let answer = 0;

    const origin = [];
    const len = heights.length;

    for(let i = 0; i < heights.length; i += 1) {
        origin.push(heights[i]);
    }

    heights.sort((a, b) => a - b);

    for(let i = 0; i < heights.length; i += 1) {
        if(origin[i] !== heights[i]) {
            answer += 1;
        }
    }

    return answer;
};