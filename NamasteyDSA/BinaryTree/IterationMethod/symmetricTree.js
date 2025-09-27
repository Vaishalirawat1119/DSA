function TreeNode(val, left=null, right=null){
    this.val = val;
    this.left = left;
    this.right = right;
}

function symmetricTree(root){
    let q = [root.left, root.right];
    while(q.length){
        let p1 = q.shift();
        let p2 = q.shift();

        if(!p1 && !p2) continue;
        if(!p1 || !p2) return false;

        if(p1.val !== p2.val) return false

        q.push(p1.left, p2.right);
        q.push(p1.right, p2.left);
    }
    return true;
}

let root = new TreeNode(1,
    new TreeNode(2,
        new TreeNode(3,
            new TreeNode(5),
        ),
        new TreeNode(4)
    ),
    new TreeNode(2,
        new TreeNode(4),
        new TreeNode(3,
            null,
            new TreeNode(5)
        )
    )
);

console.log(symmetricTree(root));