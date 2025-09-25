function TreeNode(val, left=null, right=null){
    this.val = val;
    this.left = left;
    this.right = right;
}

// Bottom Up Approach - Recursion

function maxDepth(root){
    if(!root) return 0;
    let leftMax = maxDepth(root.left);
    let rightMax = maxDepth(root.right);
    return 1 + Math.max(leftMax, rightMax);
}

let root = new TreeNode(3,
    new TreeNode(9),
    new TreeNode(20, 
        new TreeNode(15),
        new TreeNode(7)
    )
);

console.log(maxDepth(root));