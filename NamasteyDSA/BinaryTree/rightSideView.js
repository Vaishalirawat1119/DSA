function TreeNode(val, left=null, right=null){
    this.val = val;
    this.left = left;
    this.right = right;
}

function rightSideView(root){
    if(!root) return [];
    let ans = [];
    let traversal = (curr, level) => {
        if (ans.length === level) {
            ans.push(curr.val);
        }
        curr.right && traversal(curr.right, level+1);
        curr.left && traversal(curr.left, level+1);
    }
    traversal(root, 0);
    return ans;
}

let root = new TreeNode(1,
    new TreeNode(2,
        new TreeNode(4,
            new TreeNode(5),
            null
        ),
        null
    ),
    new TreeNode(3)
);

console.log(rightSideView(root));