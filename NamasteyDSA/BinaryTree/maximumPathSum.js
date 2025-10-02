function TreeNode(val, left=null, right=null){
    this.val = val;
    this.left = left;
    this.right = right;
}

function maxPathSum(root){
    let ans = -Infinity;
    let traversal = (curr) => {
        if(!curr) return 0;
        let maxLeft = Math.max(0, traversal(curr.left));
        let maxRight = Math.max(0, traversal(curr.right));
        let currMax = curr.val + maxLeft + maxRight;
        ans = Math.max(currMax, ans);
        return curr.val + Math.max(maxLeft, maxRight);
    }
    traversal(root);
    return ans;
}

let root = new TreeNode(5,
    new TreeNode(-6),
    new TreeNode(2,
        new TreeNode(8,
            new TreeNode(-1),
            new TreeNode(5)
        ),
        new TreeNode(4)
    )
);

console.log(maxPathSum(root));