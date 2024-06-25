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

function bstToGst(root: TreeNode | null): TreeNode | null {
    const arr = [];

    const traverse = (node) => {
        if(node.left) {
            traverse(node.left);
        }

        arr.push(node);

        if(node.right) {
            traverse(node.right);
        }
    }
    
    traverse(root);

    let acc = 0;

    for(let i = arr.length - 1; i >= 0; i -= 1) {
        const val = arr[i].val;
        
        arr[i].val += acc;
        acc += val;
    }

    return root;
};