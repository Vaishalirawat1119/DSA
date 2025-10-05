function TreeNode(val, left=null, right=null){
    this.val = val;
    this.left = left;
    this.right = right;
}

//Bottom Up Approach

function insert(root, val){
    if(!root) return new TreeNode(val);
    if(root.val < val){
        root.right = insert(root.right, val);
    }
    else{
        root.left = insert(root.left, val);
    }
    return root;
}

let root = new TreeNode(4,
    new TreeNode(2,
        new TreeNode(1),
        new TreeNode(3)
    ),
    new TreeNode(7)
);

console.log(insert(root, 10));
// console.log(insert(root, 5));