function TreeNode(val, left=null, right=null){
    this.val = val;
    this.left = left;
    this.right = right;
}

function preorderTraversal(root){
    if(!root) return [];

    let ans = [];
    let stack = [root];

    while(stack.length){
        let curr = stack.pop();
        ans.push(curr.val);
        curr.right && stack.push(curr.right);
        curr.left && stack.push(curr.left);
    }

    return ans;
}

let root = new TreeNode(1, 
    new TreeNode(2,
        new TreeNode(4),
        new TreeNode(5, 
            new TreeNode(6),
            new TreeNode(7),
        )
    ),
    new TreeNode(3,
        null,
        new TreeNode(8,
            new TreeNode(9,
                null
            )
        )
    )
);

console.log(preorderTraversal(root));