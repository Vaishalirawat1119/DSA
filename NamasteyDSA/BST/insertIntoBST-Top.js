function TreeNode(val, left=null, right=null){
    this.val = val;
    this.left = left;
    this.right = right;
}

//Top Down Approach

function insert(root, val){
    if(!root) return new TreeNode(val);
    let traversal = (curr) => {
        if(curr.val < val){
            if(curr.right){
                traversal(curr.right);
            }
            else{
                curr.right = new TreeNode(val);
            }
        }
        else{
            if(curr.left){
                traversal(curr.left)
            }
            else{
                curr.left = new TreeNode(val);
            }
        }
    }
    traversal(root);
    return root;
}

let root = new TreeNode(4,
    new TreeNode(2,
        new TreeNode(1),
        new TreeNode(3)
    ),
    new TreeNode(7)
);

console.log(insert(root, 5));