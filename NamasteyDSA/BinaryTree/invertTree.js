function TreeNode(val, left=null, right=null){
    this.val = val;
    this.left = left;
    this.right = right;
}

function invertTree(root){
    if(!root) return root;

    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    root.left && invertTree(root.left);
    root.right && invertTree(root.right);

    return root;   
}

let root = new TreeNode(1,
    new TreeNode(2,
        new TreeNode(1),
        new TreeNode(3)
    ),
    new TreeNode(7,
        new TreeNode(6),
        new TreeNode(9)
    )
);

console.log(invertTree(root));