export class BTreeNode {
    values: Array<number>
    leaf: boolean
    children: Array<BTreeNode>
    parent: BTreeNode
    constructor(isLeaf) {
        this.values = []
        this.leaf = isLeaf
        this.children = []
        this.parent = null
    }
    get numValue() {
        return this.values.length
    }

    addValue(value: number) {
        if(!value) return
        let pos = 0
        while(pos < this.numValue && this.values[pos] < value) pos ++
        this.values.splice(pos, 0, value)
    }

    removeValue(pos: number) {
        if( pos >= this.numValue ) return
        return this.values.splice(pos, 1)[0]
    }

    addChild(node: BTreeNode, pos: number) {
        this.children.splice(pos, 0, node);
        node.parent = this;
    }

    removeChild(pos: number) {
        return this.children.splice(pos, 1)[0];
    }
}

class BTree {
    root: BTreeNode
    order: number
    constructor(order: number) {
        this.order = order
    }
}