function TreeNode(val, left=null, right=null){
    this.val = val;
    this.left = left;
    this.right = right;
}

function lowerCommonAncestor(root, p, q){
    let lca = null;
    let traversal = (curr) => {
        let count = 0;
        if(!curr) return 0;
        let ansOnLeft = traversal(curr.left);
        let ansOnRight = traversal(curr.right);
        if(curr.val === p.val || curr.val === q.val){
            ++count;
        }
        count = count + ansOnLeft + ansOnRight;
        if(count === 2 && !lca){
            lca = curr;
        }
        return count;
    }
    traversal(root);
    return lca;
}

let root = new TreeNode(3,
    new TreeNode(5,
        new TreeNode(6),
        new TreeNode(2,
            new TreeNode(7),
            new TreeNode(4)
        )
    ),
    new TreeNode(1,
        new TreeNode(0),
        new TreeNode(8)
    )
);

// let p = root.left;
// let q = root.right; 

// console.log(lowerCommonAncestor(root, p, q).val);

let p = root.left;
let q = root.left.right.right;

console.log(lowerCommonAncestor(root, p, q).val);