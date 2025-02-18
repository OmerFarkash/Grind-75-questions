// idea: check by height each sub tree and make sure it's balanced for each level


// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    function height(node) {
        if (!node) return 0

        let leftH = height(node.left)
        let rightH = height(node.right)

        if (leftH === -1 || rightH === -1 || (Math.abs(leftH - rightH) > 1)) return -1

        return Math.max(leftH, rightH) + 1
    }
    
    return height(root) !== -1
};          


function arrayToTree(arr) {
    if (!arr.length) return null;
    
    let root = new TreeNode(arr[0]);
    let queue = [root];
    let i = 1;
    
    while (i < arr.length) {
        let current = queue.shift();
        
        if (arr[i] !== null) {
            current.left = new TreeNode(arr[i]);
            queue.push(current.left);
        }
        i++;
        
        if (i < arr.length && arr[i] !== null) {
            current.right = new TreeNode(arr[i]);
            queue.push(current.right);
        }
        i++;
    }
    
    return root;
}

// let tree = arrayToTree([1, 2, 2, 3, 3, null, null, 4, 4]);
let tree = arrayToTree([3,1,1])
console.log(isBalanced(tree))
console.log("done")