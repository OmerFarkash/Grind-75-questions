// idea: every root swaps his children
// and go inside in semi recurtion (only visit every node once)


// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    t = null
    // check fo null option
    if (!root) {
        return root
    }
    if (root.left) {
        t = root.left
        if (root.right) {
            root.left = root.right
            root.right = t
            invertTree(root.left)
            invertTree(root.right)
        }
        else {
            root.right = t
            root.left = null
            invertTree(root.right)
        }
    } else if (root.right) {
        root.left = root.right
        root.right = null
        invertTree(root.left)
    } 
    return root
};

root = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(7, new TreeNode(6), new TreeNode(9)));
console.log(invertTree(root))

console.log("done")

// something to think a about: 
// [root.left, root.right] = [root.right, root.left];
// this is a sipmler way to swap in JS by creating a temp array.
// this solution is easyer to maintene and a bit more space demanding 
