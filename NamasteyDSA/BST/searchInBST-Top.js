function TreeNode(val, left=null, right=null){
    this.val = val;
    this.left = left;
    this.right = right;
}

//Top Down Approach

function searchBST(root, val){
    let ans = null;
    let traversal = (curr) => {
        if(curr.val === val) ans = curr;
        if(curr.val < val){
            curr.right && traversal(curr.right);
        }
        else{
            curr.left && traversal(curr.left);
        }
    }
    traversal(root);
    return ans;
}

let root = new TreeNode(4,
    new TreeNode(2,
        new TreeNode(1),
        new TreeNode(3)
    ),
    new TreeNode(7)
)

// console.log(searchBST(root, 7));
console.log(searchBST(root, 2));