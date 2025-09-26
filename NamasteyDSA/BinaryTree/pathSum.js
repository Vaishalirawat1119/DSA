function TreeNode(val, left=null, right=null){
    this.val = val;
    this.left = left;
    this.right = right;
}

function pathSum(root, target){
    if(!root) return false;

    let ans = false;
    let traversal = (curr, currSum) => {
        let newSum = currSum + curr.val;
        if(!curr.left && !curr.right){
            if(newSum === target){
                ans = ans || true;
            }
        }
        curr.left && traversal(curr.left, newSum);
        curr.right && traversal(curr.right, newSum);
    }
    traversal(root, 0);
    return ans;
}

let root = new TreeNode(5,
    new TreeNode(4,
        new TreeNode(11,
            new TreeNode(7),
            new TreeNode(2)
        )
    ),
    new TreeNode(8,
        new TreeNode(13),
        new TreeNode(4,
            new TreeNode(1),
        )
    )
)

console.log(pathSum(root, 22));
// console.log(pathSum(root, 14));