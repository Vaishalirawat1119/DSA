function TreeNode(val, left=null, right=null){
    this.val = val;
    this.left = left;
    this.right = right;
}

//using recursion

function zigzagLevelTraversal(root){
    if(!root) return [];
    let ans = [];
    let traversal = (curr, level) => {
        if(!ans[level]) ans[level] = [];
        if(level % 2 == 0){
            ans[level].push(curr.val);
        }
        else{
            ans[level].unshift(curr.val);
        }
        curr.left && traversal(curr.left, level+1);
        curr.right && traversal(curr.right, level+1);
    }
    traversal(root, 0);
    return ans;
}

let root = new TreeNode(3,
    new TreeNode(9),
    new TreeNode(20,
        new TreeNode(15),
        new TreeNode(7)
    )
);

console.log(zigzagLevelTraversal(root));