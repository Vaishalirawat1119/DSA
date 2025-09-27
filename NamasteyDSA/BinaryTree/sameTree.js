function TreeNode(val, left=null, right=null){
    this.val = val;
    this.left = left;
    this.right = right;
}

function isSameTree(p, q){
    if(!p && !q) return true;
    if(!p || !q) return false;

    return p.val === q.val &&
        isSameTree(p.left, q.left) &&
        isSameTree(p.right, q.right);
}

let p = new TreeNode(1,
    new TreeNode(2),
    new TreeNode(3)
);

let q = new TreeNode(1,
    new TreeNode(2),
    new TreeNode(3)
);

console.log(isSameTree(p, q));