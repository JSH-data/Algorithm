function findCenter(edges: number[][]): number {
    const set = new Set();

    for(let i = 0; i < 2; i += 1) {
        const [v1, v2] = edges[i];
        
        if(set.has(v1)) {
            return v1;
        } 

        if(set.has(v2)) {
            return v2;
        } 

        set.add(v1);
        set.add(v2);
    }
};