function TreeNode(val, left=null, right=null){
    this.val = val;
    this.left = left;
    this.right = right;
}
function postorderTraversal(root){
    let ans = [];

    function traversal(curr){
        if(!curr) return;
        traversal(curr.left);
        traversal(curr.right);
        ans.push(curr.val);
    }
    traversal(root);

    return ans;
}

let root = new TreeNode(1, 
    new TreeNode(2,
        new TreeNode(4),
        new TreeNode(5, 
            new TreeNode(6),
            new TreeNode(7),
        )
    ),
    new TreeNode(3,
        null,
        new TreeNode(8,
            new TreeNode(9,
                null
            )
        )
    )
);

console.log(postorderTraversal(root));