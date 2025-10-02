function TreeNode(val, left=null, right=null){
    this.val = val;
    this.left = left;
    this.right = right;
}

function goodNodes(root){
    let ans = 0;
    let traversal = (curr, maxSeenSoFar) => {
        if(curr.val >= maxSeenSoFar){
            ++ans;
        }
        let currMax = Math.max(maxSeenSoFar, curr.val);
        curr.left && traversal(curr.left, currMax);
        curr.right && traversal(curr.right, currMax);
    }
    traversal(root, -Infinity);
    return ans;
}

// let root = new TreeNode(3,
//     new TreeNode(1,
//         new TreeNode(3),
//         null
//     ),
//     new TreeNode(4,
//         new TreeNode(1),
//         new TreeNode(5)
//     )
// );

let root = new TreeNode(3,
    new TreeNode(3,
        new TreeNode(4),
        new TreeNode(2)
    ), null
)

console.log(goodNodes(root));