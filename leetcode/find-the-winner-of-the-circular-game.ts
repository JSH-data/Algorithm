function findTheWinner(n: number, k: number): number {
    let arr = Array.from({length: n}, (_, i) => i + 1);
    let idx = 0;
    
    while(arr.length != 1) {
        idx = (idx + k - 1) % arr.length;
        arr = arr.slice(0, idx).concat(arr.slice(idx + 1, arr.length))
    }

    return arr[0];
};