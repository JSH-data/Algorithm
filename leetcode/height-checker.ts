function heightChecker(heights: number[]): number {
    let answerNums = 0;

    const origin = [];
    const len = heights.length;

    for(let i = 0; i < heights.length; i += 1) {
        origin.push(heights[i]);
    }

    heights.sort((a, b) => a - b);

    for(let i = 0; i < heights.length; i += 1) {
        if(origin[i] !== heights[i]) {
            answerNums += 1;
        }
    }

    return answerNums;
};