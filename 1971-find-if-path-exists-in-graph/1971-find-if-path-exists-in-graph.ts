function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
    if(source === destination) {
        return true;
    }

    const map = {};

    for(let i = 0; i < edges.length; i += 1) {
        const [start, end] = edges[i];

        if(map[start] === undefined) {
            map[start] = new Set();
        }

        if(map[end] === undefined) {
            map[end] = new Set();
        }

        map[start].add(end);
        map[end].add(start);
    }

    const memo = new Set();
    const queue = [];

    for(let x of map[source]) {
        memo.add(x);
        queue.push(x);
    }


    while(queue.length) {
        const next = queue.shift();

        if(next === destination) {
            return true
        }

        for(let x of map[next]) {
            if(x === destination) {
                return true
            }

            if(!memo.has(x)) {
                queue.push(x)
                memo.add(x)
            }
        }
    }

    return false;
};