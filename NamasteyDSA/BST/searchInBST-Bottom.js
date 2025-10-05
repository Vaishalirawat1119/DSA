function TreeNode(val, left=null, right=null){
    this.val = val;
    this.left = left;
    this.right = right;
}

//Bottom Up Approach

function searchBST(root, val){
    if(!root || root.val === val) return root;
    return root.val < val ? searchBST(root.right, val) : searchBST(root.left, val);
}

let root = new TreeNode(50,
    new TreeNode(30,
        new TreeNode(20,
            new TreeNode(10),
            new TreeNode(25)
        ),
        TreeNode(40,
            new TreeNode(35),
            new TreeNode(45)
        )
    ),
    new TreeNode(70,
        new TreeNode(60,
            new TreeNode(55),
            new TreeNode(65)
        ),
        new TreeNode(80,
            new TreeNode(75),
            new TreeNode(85)
        )
    )
);

// console.log(searchBST(root, 80));
console.log(searchBST(root, 96));