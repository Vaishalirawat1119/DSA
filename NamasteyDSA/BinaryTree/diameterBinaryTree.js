function TreeNode(val, left=null, right=null){
    this.val = val;
    this.left = left;
    this.right = right;
}

function diameterTree(root){
    let maxDiameter = 0;
    let findDepth = (curr) => {
        if(!curr) return 0;
        let leftDepth = findDepth(curr.left);
        let rightDepth = findDepth(curr.right);

        let currDepth = leftDepth + rightDepth;
        maxDiameter = Math.max(currDepth, maxDiameter);

        return 1 + Math.max(leftDepth, rightDepth);
    }
    findDepth(root);
    return maxDiameter;
} 

let root = new TreeNode(1,
    new TreeNode(2,
        new TreeNode(4),
        new TreeNode(5)
    ),
    new TreeNode(3)
);

console.log(diameterTree(root));