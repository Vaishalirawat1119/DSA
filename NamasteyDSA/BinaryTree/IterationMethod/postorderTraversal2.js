function TreeNode(val, left=null, right=null){
    this.val = val;
    this.left = left;
    this.right = right;
}

function postorderTraversal(root){
    let stack = [];
    let ans = [];
    let curr = root;
    let lastVisited = null;

    while(curr || stack.length){
        while(curr){
            stack.push(curr);
            curr = curr.left;
        }

        let peek = stack[stack.length-1];
        if(peek.right && peek.right !== lastVisited){
            curr = peek.right;
        }
        else{
            ans.push(peek.val);
            lastVisited = stack.pop();
        }
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

console.log(postorderTraversal(root));