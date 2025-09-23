function TreeNode(val, left=null, right=null){
    this.val = val;
    this.left = left;
    this.right = right; 
}

function inorderTraversal(root){
    let ans = [];
    let stack = [];
    let curr = root;
    while(curr || stack.length){
        while(curr){
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        ans.push(curr.val);
        curr = curr.right;
    }
    return ans;
}

let root = new TreeNode(1,
    new TreeNode(2,
        new TreeNode(4,
            new TreeNode(8), new TreeNode(9)
        ), new TreeNode(5)
    ),
    new TreeNode(3,
        new TreeNode(6,
            new TreeNode(10), new TreeNode(11)
        ), new TreeNode(7)
    )
);

console.log(inorderTraversal(root));