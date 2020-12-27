/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const result = []

    const deep = (root) => {
        if(root === null) {
            return
        }
        deep(root.left)
        result.push(root.val)
        deep(root.right)
    }
    deep(root)
    return result
};