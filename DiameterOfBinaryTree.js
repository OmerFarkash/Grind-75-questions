// idea: find diameter of sub trees and increas it when needed

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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let maxDiameter = 0;

    function height(node) {
        if (!node) return 0

        let leftH = height(node.left)
        let rightH = height(node.right)

        maxDiameter = Math.max(maxDiameter, leftH + rightH);

        return Math.max(leftH, rightH) + 1;
    }
    height(root);
    return maxDiameter;
};