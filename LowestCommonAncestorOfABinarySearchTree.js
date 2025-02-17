// idea: sort p,q (for less cases)
// if p or q found it means they are the LCA
// else bigger then both -> go right
// else smaller then both -> go left  
// just between p and q is an ancestor

// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let head = root.val
    if (p.val > q.val) [q, p] = [p, q]
    
    if (head === p.val || head === q.val) return root

   if (head < p.val)
        if (root.right) return lowestCommonAncestor(root.right, p, q)
        else return root
    if (q.val < head)
        if (root.left) return lowestCommonAncestor(root.left, p, q)
        else return root
    // case of: p < head < q , it means that p in the left and q in the right 
    return root
};

// zero = new TreeNode(0)
// two = new TreeNode(2)
// three = new TreeNode(3)
// four = new TreeNode(4)
// five = new TreeNode(5)
// tree = new TreeNode(6)
// seven = new TreeNode(7)
// eight = new TreeNode(8)
// nine = new TreeNode(9)

// four.left = three
// four.right = five
// two.left = zero
// two.right = four
// eight.left = seven
// eight.right = nine
// tree.left = two
// tree.right = eight

tree = new TreeNode(2)
one = new TreeNode(1)
three = new TreeNode(3)
tree.left = one
tree.right = three


console.log(lowestCommonAncestor(tree, three, one))
console.log("after")