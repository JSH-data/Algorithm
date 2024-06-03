class MinHeap {
    heap = [null];
    
    get getMin() {
        return this.heap[1];
    }
    
    get size() {
        return this.heap.length; 
    }
    
    swap(idx1, idx2) {
        [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
    }
    
    add(num) {
        this.heap.push(num);
        
        let cIdx = this.heap.length - 1;
        let pIdx = (cIdx / 2) >> 0;
        
        while(cIdx > 1 && this.heap[pIdx] > this.heap[cIdx]) {
            this.swap(cIdx, pIdx);
            
            cIdx = pIdx;
            pIdx = (cIdx / 2) >> 0;
        }
    }
    
    remove() {
        const min = this.heap[1];
        
        if(this.heap.length <= 2) {
            this.heap = [null];
            
            return min;
        }
        
        this.heap[1] = this.heap.pop();
        
        let cIdx = 1;
        let leftIdx = 2;
        let rightIdx = 3;
        
        while(
            this.heap[leftIdx] < this.heap[cIdx] || this.heap[rightIdx] < this.heap[cIdx]
        ) {
            const minIdx = this.heap[rightIdx] < this.heap[leftIdx] ? rightIdx : leftIdx;
            
            this.swap(minIdx, cIdx);
            
            cIdx = minIdx;
            leftIdx = cIdx * 2;
            rightIdx = cIdx * 2 + 1;
        }
        
        return min;
    }
}

function solution(n, k, enemy) {
    if(enemy.length <= k) {
        return k;
    }
    
    const heap = new MinHeap();
    
    for(let i = 0; i < k; i += 1) {
        heap.add(enemy[i]);
    }
    
    let leftSoldier = n;
    let idx = k;
    
    while(idx < enemy.length && leftSoldier >= 0) {

        heap.add(enemy[idx]);
        
        const min = heap.remove();
        
        if(leftSoldier < min) {
            return idx;
        }
        
        if(leftSoldier <= min) {
            return idx + 1;
        }
        
        leftSoldier -= min;
        idx += 1;
    }
    
    return enemy.length;
}