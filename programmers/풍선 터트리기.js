function solution(a) {
    // 터뜨리지 못하는 조건: 1 3 2 처럼 작은 값의 사이에 둘러쌓인 경우
    // 터뜨리는 조건 1: 양 끝
    // 터뜨리는 조건 2: 자신 보다 큰 수가 있다면 반드시 터뜨릴 수 있음 => 3, 2 OR 2, 3 인경우 
    
    const len = a.length;
    const left = Array.from({length: len});
    const right = Array.from({length: len});
    
    left[0] = a[0];
    right[len - 1] = a[len - 1];
    
    for(let i = 1; i < len; i += 1) {
        left[i] = Math.min(left[i - 1], a[i]);
    }
    
    for(let i = len - 2; i >= 0; i -= 1) {
        right[i] = Math.min(right[i + 1], a[i]);
    }
    
    const set = new Set();
    
    for(let i = 0; i < len; i += 1) {
        set.add(left[i]);
        set.add(right[i]);
    }
    
    return set.size;
}

// O(N)