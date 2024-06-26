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

function balanceBST(root: TreeNode | null): TreeNode | null {
    const arr = [];

    const dfs = (node: TreeNode) => {
        const leftTemp = node.left;
        const rightTemp = node.right;

        node.left = null;
        node.right = null;

        arr.push(node);

        if(leftTemp !== null) {
            dfs(leftTemp);
        }

        if(rightTemp !== null) {
            dfs(rightTemp);
        }
    };

    const splitArr = (arr) => {
        const mid = Math.floor((arr.length - 1) / 2);

        return { node:  arr[mid], left: arr.slice(0, mid), right: arr.slice(mid + 1, arr.length) };
    }

    const makeTree = (nodes) => {
        const { node, left, right } = splitArr(nodes);
        
        if(left.length) {
            node.left = makeTree(left);
        } else {
            node.left = null;
        }

        if(right.length) {
            node.right = makeTree(right);
        } else {
            node.right = null;
        }

        return node;
    };

    dfs(root);
    
    arr.sort((a, b) => a.val - b.val);
    
    return makeTree(arr);
};