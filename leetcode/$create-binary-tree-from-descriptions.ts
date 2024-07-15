/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

type T = {
    node: TreeNode;
    pKey: null | number;
}

function createBinaryTree(descriptions: number[][]): TreeNode | null {
    const finder = new Map<number, T>();

    for(let i = 0; i < descriptions.length; i += 1) {
        const [parent, child, isLeft] = descriptions[i];

        if(!finder.has(parent)) {
            const pNode = new TreeNode(parent);
            
            finder.set(parent, { node: pNode, pKey: null });
        }

        let cNode: null | TreeNode = null;

        if(!finder.has(child)) {
            cNode = new TreeNode(child);
        } else {
            cNode = finder.get(child).node;
        }

        finder.set(child, { node: cNode, pKey: parent });

        const pNode = finder.get(parent).node;

        if(isLeft === 1) {
            pNode.left = cNode;
        } else {
            pNode.right = cNode;
        }
    }

    for(let [key, value] of finder) {
        if(value.pKey === null) {
            return finder.get(key).node;
        }
    }

    return null
};