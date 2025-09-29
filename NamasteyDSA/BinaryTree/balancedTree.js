function TreeNode(val, left=null, right=null){
    this.val = val;
    this.left = left;
    this.right = right;
}

function balanceTree(root){
    let ans = true;
    let calculateHeight = (curr) => {
        if(!curr) return 0;
        let leftHeight = calculateHeight(curr.left);
        let rightHeight = calculateHeight(curr.right);
        if(Math.abs(leftHeight-rightHeight) > 1){
            ans = ans && false;
        }
        return 1 + Math.max(leftHeight, rightHeight);
    }
    calculateHeight(root);
    return ans;
}

// let root = new TreeNode(3,
//     new TreeNode(9),
//     new TreeNode(20,
//         new TreeNode(15),
//         new TreeNode(7) 
//     )
// )

let root = new TreeNode(1,
    new TreeNode(2,
        new TreeNode(3,
            new TreeNode(4),
            new TreeNode(4)),
        new TreeNode(3)
    ),
    new TreeNode(2)
)

console.log(balanceTree(root));
