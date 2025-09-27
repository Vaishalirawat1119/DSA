function TreeNode(val, left=null, right=null){
    this.val = val;
    this.left = left;
    this.right = right;
}

//recursion approach

function symmetricTree(root){
    let isMirror = (left, right) => {
        if(!left && !right) return true;
        if(!left || !right) return false;
        return left.val === right.val &&
            isMirror(left.left, right.right) &&
            isMirror(left.right, right.left);
    }
    return isMirror(root.left, root.right);
}

let root = new TreeNode(1,
    new TreeNode(2,
        new TreeNode(3,
            new TreeNode(5),
        ),
        new TreeNode(4)
    ),
    new TreeNode(2,
        new TreeNode(4),
        new TreeNode(3,
            null,
            new TreeNode(5)
        )
    )
);

console.log(symmetricTree(root));