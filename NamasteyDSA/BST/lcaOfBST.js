function TreeNode(val, left=null, right=null){
    this.val = val;
    this.left = left;
    this.right = right;
}

function lowerCommonAncestor(root, p, q){
    if(p.val < root.val && q.val < root.val){
        return lowerCommonAncestor(root.left, p, q);
    }
    else if(p.val > root.val && q.val > root.val){
        return lowerCommonAncestor(root.right, p, q);
    }
    else{
        return root;
    }
}

let root = new TreeNode(6,
    new TreeNode(2,
        new TreeNode(0),
        new TreeNode(4,
            new TreeNode(3),
            new TreeNode(5)
        )
    ),
    new TreeNode(8,
        new TreeNode(7),
        new TreeNode(9)
    )
);

// console.log(lowerCommonAncestor(root, 2, 8));
console.log(lowerCommonAncestor(root, 3, 5));