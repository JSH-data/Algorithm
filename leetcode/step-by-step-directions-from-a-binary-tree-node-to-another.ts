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

type Direction = "L" | "R";


function getDirections(root: TreeNode | null, startValue: number, destValue: number): string {
    let sDir = null;
    let dDir = null;

    const dfs = (node: TreeNode, arr: Direction[]) => {
        if(sDir && dDir) {
            return;
        }

        if(!sDir && node.val === startValue) {
            sDir = arr.join("");
        }

        if(!dDir && node.val === destValue) {
            dDir = arr.join("");
        }

        if(node.left) {
            arr.push("L");

            dfs(node.left, arr);

            arr.pop();
        }

        if(node.right) {
            arr.push("R");

            dfs(node.right, arr);

            arr.pop();
        }
    }

    dfs(root, []);

    let nest = 0;

    for(let i = 0; i < sDir.length; i += 1) {
        if(sDir[i] === dDir[i]) {
            nest += 1;

            continue;
        }

        break;
    }

    return `${"U".repeat(sDir.length - nest)}${dDir.substring(nest)}`
};