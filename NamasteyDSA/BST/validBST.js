function TreeNode(val, left=null, right=null){
    this.val = val;
    this.left = left;
    this.right = right;
}

function validBST(curr, lo=null, hi=null){
    // let ans = null;

    if(!curr) return true;
    if((lo !== null && curr.val <= lo) || (hi !== null && curr.val >= hi)) return false;
    let isLeftBST = validBST(curr.left, lo, curr.val);
    let isRightBST = validBST(curr.right, curr.val, hi);
    return isLeftBST && isRightBST;

    // let isBST = (curr, lo, hi) => {
    //     if(!curr) return true;
    //     if((lo !== null && curr.val <= lo) || (hi !== null && curr.val >= hi)) return false;
    //     let isLeftBST = isBST(curr.left, lo, curr.val);
    //     let isRightBST = isBST(curr.right, curr.val, hi);
    //     return isLeftBST && isRightBST;
    // }
    // ans = isBST(root, null, null);
    // return ans;

    // return isBST(root, null, null);
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

console.log(validBST(root));