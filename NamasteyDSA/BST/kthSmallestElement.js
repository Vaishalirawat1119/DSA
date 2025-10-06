function TreeNode(val, left=null, right=null){
    this.val = val;
    this.left = left;
    this.right = right;
}

function kthSmallestElement(root, k){
    let ans = null;
    let count = k;
    let traversal = (curr) => {
        if(ans !== null) return;
        curr.left && traversal(curr.left);
        --count;
        if(count === 0) {
            ans = curr.val;
        }
        curr.right && traversal(curr.right);
    }
    traversal(root);
    return ans;
}

// let root = new TreeNode(3,
//     new TreeNode(1,
//         null,
//         new TreeNode(2)
//     ),
//     new TreeNode(5,
//         new TreeNode(8),
//         new TreeNode(6)
//     )
// );

let root = new TreeNode(50,
    new TreeNode(20,
        new TreeNode(10),
        new TreeNode(40,
            new TreeNode(30),
            new TreeNode(45)
        )
    ),
    new TreeNode(70,
        null,
        new TreeNode(80,
            new TreeNode(75),
            null
        )
    )
)

// console.log(kthSmallestElement(root, 3));
console.log(kthSmallestElement(root, 5));