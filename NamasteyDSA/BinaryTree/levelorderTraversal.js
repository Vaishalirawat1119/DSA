function TreeNode(val, left=null, right=null){
    this.val = val;
    this.left = left;
    this.right = right;
}

function levelOrderTraversal(root){
    if(!root) return [];
    let q = [root];
    let ans = [];
    while(q.length){
        let levelArr = [];
        let levelSize = q.length;
        for(let i=0; i<levelSize; i++){
            let curr = q.shift();
            curr.left && q.push(curr.left);
            curr.right && q.push(curr.right);
            levelArr.push(curr.val);
        }
        ans.push(levelArr);
    }
    return ans;
}

let root = new TreeNode(3,
    new TreeNode(9),
    new TreeNode(20,
        new TreeNode(15),
        new TreeNode(7,
            new TreeNode(2),
            new TreeNode(6)
        )
    )
);

console.log(levelOrderTraversal(root));