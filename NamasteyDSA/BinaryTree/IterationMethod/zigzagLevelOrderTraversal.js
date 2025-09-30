function TreeNode(val, left=null, right=null){
    this.val = val;
    this.left = left;
    this.right = right;
}

function zigzagLevelTraversal(root){
    if(!root) return [];
    let ans = [];
    let q = [root];
    let level = 0;
    while(q.length){
        let levelArr = [];
        let levelSize = q.length;
        for(let i=0; i<levelSize; i++){
            let curr = q.shift();
            if(level % 2 == 0){
                levelArr.push(curr.val);
            }
            else{
                levelArr.unshift(curr.val);
            }
            curr.left && q.push(curr.left);
            curr.right && q.push(curr.right);
        }
        ans.push(levelArr);
        ++level;
    }
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