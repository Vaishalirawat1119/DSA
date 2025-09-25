function TreeNode(val, left=null, right=null){
    this.val = val;
    this.left = left;
    this.right = right;
}

// Top Down Approach - Recursion

function maxDepthBinaryTree(root){
    if(!root) return 0;
    let maxDepth = 0;
    let traversal = (curr, depth) => {
        maxDepth = Math.max(maxDepth, depth);
        curr.left && traversal(curr.left, depth + 1);
        curr.right && traversal(curr.right, depth + 1);
    }
    traversal(root, 1);
    return maxDepth;
}

let root = new TreeNode(3,
    new TreeNode(9),
    new TreeNode(20, 
        new TreeNode(15),
        new TreeNode(7)
    )
);

console.log(maxDepthBinaryTree(root));