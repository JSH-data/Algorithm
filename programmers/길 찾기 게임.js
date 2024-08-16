class Node {
    lLimit = -1;
    rLimit = 100000;
    
    constructor(val, lLimit, rLimit, index) {
        this.val = val;
        this.index = index;
        
        if(lLimit) {
            this.lLimit = lLimit;
        }
        
        if(rLimit) {
            this.rLimit = rLimit;
        }
    }
}

function solution(nodeinfo) {
    nodeinfo = nodeinfo.map((v, i) => [...v, i + 1]);
    
    nodeinfo.sort((a, b) => {
        if(a[1] === b[1]) {
            return a[0] - b[0];
        }
        
        return b[1] - a[1];
    })
        
    const rootNode = new Node(nodeinfo[0][0], -1, 100001, nodeinfo[0][2]);
    const arr = [[rootNode]];
    
    let level = nodeinfo[0][1];
    let arrIdx = 0;
    
    for(let i = 1; i < nodeinfo.length; i += 1) {
        if(level != nodeinfo[i][1]) {
            arr.push([]);
            arrIdx += 1;
            level = nodeinfo[i][1];
        }
        
        
        for(let j = 0; j < arr[arrIdx - 1].length; j += 1) {
            const left = (
                arr[arrIdx - 1][j].lLimit < nodeinfo[i][0] 
                && arr[arrIdx - 1][j].val > nodeinfo[i][0]
            )
            
            if(left) {
                const node = new Node(nodeinfo[i][0], arr[arrIdx - 1][j].lLimit, arr[arrIdx - 1][j].val, nodeinfo[i][2]);
                
                arr[arrIdx - 1][j].left = node
                arr[arrIdx].push(node);
                
                break;
            }
            
            const right = (
                arr[arrIdx - 1][j].rLimit > nodeinfo[i][0] 
                && arr[arrIdx - 1][j].val < nodeinfo[i][0]
            )
            
            if(right) {
                const node = new Node(nodeinfo[i][0], arr[arrIdx - 1][j].val, arr[arrIdx - 1][j].rLimit, nodeinfo[i][2]);
                
                arr[arrIdx - 1][j].right = node
                arr[arrIdx].push(node);
                
                break;
            }
        }
    }
    
    const preArr = [];
    const postArr = [];
    
    const dfs = (node) => {
        preArr.push(node.index)
        
        if(node.left) {
            dfs(node.left);
        }
        
        if(node.right) {
            dfs(node.right);
        }
        
        postArr.push(node.index)
    }
        
    dfs(rootNode);
    
    return [preArr, postArr];
}