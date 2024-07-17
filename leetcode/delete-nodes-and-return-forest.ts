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

function delNodes(root: TreeNode | null, to_delete: number[]): Array<TreeNode | null> {
    const set = new Set(to_delete);
    const answer = [];
    
    const dfs = (node, save) => {
        if(save && !set.has(node.val)) {
            answer.push(node);
        }

        if(node.left) {
            const temp = node.left;

            if(set.has(node.left.val)) {
                node.left = null;
            }

            dfs(temp, set.has(node.val));
        }

        if(node.right) {
            const temp = node.right;

            if(set.has(node.right.val)) {
                node.right = null;
            }

            dfs(temp, set.has(node.val));
        }
    }

    if(!set.has(root.val)) {
        answer.push(root);

        dfs(root, false);

        return answer;
    }

    if(root.right) {
        dfs(root.right, true);
    }

    if(root.left) {
        dfs(root.left, true);
    }

    return answer;
};