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

function isSymmetric(root: TreeNode | null): boolean {
    
    function mirror(left: TreeNode | null, right: TreeNode | null){
        if( left === null && right === null){
            return true
        }

        if( left === null || right === null){
            return false
        }

        return left.val === right.val && mirror(left.left, right.right) && mirror(left.right, right.left)
    }
    
    return mirror(root.left, root.right);
};