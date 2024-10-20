function findKthBit(n: number, k: number): string {
    if(n === 1) {
        return "0";
    }

    const len = (1 << n) - 1;
    const mid = Math.floor(len / 2) + 1;

    if(k === mid) {
        return "1";
    }

    if(k < mid) {
        return findKthBit(n - 1, k);
    }

    return findKthBit(n - 1, len - k + 1) === "0" ? "1" : "0";
};