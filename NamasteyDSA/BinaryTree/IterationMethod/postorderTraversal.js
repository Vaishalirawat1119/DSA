function TreeNode(val, left=null, right=null){
    this.val = val;
    this.left = left;
    this.right = right;
}

function postorderTraversal(root){
    if(!root) return [];

    let s1 = [root];
    let s2 = [];
    while(s1.length){
        let curr = s1.pop();
        s2.push(curr);
        curr.left && s1.push(curr.left);
        curr.right && s1.push(curr.right)
    }

    let ans = [];
    while(s2.length){
        ans.push(s2.pop().val);
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