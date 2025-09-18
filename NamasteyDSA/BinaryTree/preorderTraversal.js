function TreeNode(val, left = null, right = null){
    this.val = val;
    this.left = left;
    this.right = right;
} 

function preorderTraversal(root){
    let ans = [];
    function traversal(curr){
        if(!curr) return;
        ans.push(curr.val);
        traversal(curr.left);
        traversal(curr.right);
    }
    traversal(root);
    return ans;
}

let root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.left = new TreeNode(3)
console.log(preorderTraversal(root));