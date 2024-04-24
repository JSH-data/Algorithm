function tribonacci(n: number): number {
    const dy = [0, 1, 1];

    for(let i = 3; i <= n; i += 1) {
        dy[i] = dy[i - 3] + dy[i - 1] + dy[i - 2];
    }

    return dy[n]
};