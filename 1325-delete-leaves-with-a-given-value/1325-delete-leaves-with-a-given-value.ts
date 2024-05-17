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

function removeLeafNodes(root: TreeNode | null, target: number): TreeNode | null {
    const dfs = (node: TreeNode) => {
        if(node.left && (node.left.right || node.left.left)) {
            dfs(node.left);
        };

        if(node.right && (node.right.right || node.right.left)) {
            dfs(node.right);
        };

        if(node.left && node.left.val === target && !node.left.right && !node.left.left) {
            node.left = null;
        }

        if(node.right && node.right.val === target && !node.right.right && !node.right.left) {
            node.right = null;
        }
    }

    dfs(root);

    if(!root.left && !root.right && root.val === target) {
        return nulll;
    }

    return root;
};