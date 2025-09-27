function TreeNode(val, left=null, right=null){
    this.val = val;
    this.left = left;
    this.right = right;
}

// Bottom Up Approach

function pathSum(root, target){
    if(!root) return false;
    if(!root.left && !root.right) return root.val === target;
    return pathSum(root.left, target - root.val) || pathSum(root.right, target - root.val);;
}

// let root = new TreeNode(5,
//     new TreeNode(4,
//         new TreeNode(11,
//             new TreeNode(7),
//             new TreeNode(2)
//         )
//     ),
//     new TreeNode(8,
//         new TreeNode(13),
//         new TreeNode(4,
//             new TreeNode(1),
//         )
//     )
// )

let root = new TreeNode(1,
    new TreeNode(2),
    new TreeNode(3)
);

console.log(pathSum(root, 5));

// console.log(pathSum(root, 22));