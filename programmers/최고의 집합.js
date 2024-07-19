function solution(n, s) {
    if(n > s) {
        return [-1];
    }
    
    
    const q = Math.floor(s / n);
    const r = s % n;
    const arr = Array.from({length: n}, (_, i) => q);
    
    for(let i = n - 1; i > n - 1 - r; i -= 1) {
        arr[i] += 1;
    }
    
    return arr;
}