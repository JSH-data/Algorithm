class Node {
    constructor(x, y, id) {
        this.id = id;
        this.x = x;
        this.y = y;
    }
}

function recursiveSearch(node, x, y, id) {
    const side = node.x > x ? 'left' : 'right';
    
    if(!node[side]) {
        node[side] = new Node(x, y, id);
        
        return;
    }
    
    recursiveSearch(node[side], x, y, id)
}

function addNode() {
    let rootNode = null;
    
    function createNode(x, y, id) {
        if(!rootNode) {
            rootNode = new Node(x, y, id);
            
            return
        }
        
        recursiveSearch(rootNode, x, y, id);
    }
    
    function getRootNode() {
        return rootNode;
    }
    
    return { getRootNode, createNode };
}

function solution(nodeinfo) {
    const { getRootNode, createNode } = addNode();
    
    nodeinfo = nodeinfo.map((v, i) => [...v, i + 1]);    
    nodeinfo.sort((a, b) => {
        if(a[1] === b[1]) {
            return a[0] - b[0];
        }
        
        return b[1] - a[1];
    })
    nodeinfo.forEach(([x, y, id]) => {
        createNode(x, y, id);
    })
        
    const rootNode = getRootNode();
    const preArr = [];
    const postArr = [];
    
    const dfs = (node) => {
        preArr.push(node.id);
        
        if(node.left) {
            dfs(node.left);
        }
        
        if(node.right) {
            dfs(node.right);
        }
        
        postArr.push(node.id);
    }
    
    dfs(rootNode);
    
    return [preArr, postArr];
}