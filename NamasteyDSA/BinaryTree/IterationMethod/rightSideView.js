function TreeNode(val, left=null, right=null){
    this.val = val;
    this.left = left;
    this.right = right;
}

function rightSideView(root){
    if(!root) return [];
    let ans = [];
    let q = [root];
    while(q.length){
        let levelSize = q.length;
        for(let i=0; i<levelSize; i++){
            let curr = q.shift();
            i === 0 && ans.push(curr.val);
            curr.right && q.push(curr.right);
            curr.left && q.push(curr.left);
        }
    }
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