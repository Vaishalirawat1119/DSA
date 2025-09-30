function TreeNode(val, left=null, right=null){
    this.val = val;
    this.left = left;
    this.right = right;
}

function subTree(root, subRoot){
    let hashRoot = serialize(root);
    let hashSubRoot = serialize(subRoot);
    return hashRoot.includes(hashSubRoot);
}

function serialize(root){
    let hash = "";
    let traversal = (curr) => {
        if(!curr){
            hash = hash + "-#";
            return;
        }
        hash = hash + "_" + curr.val;
        traversal(curr.left);
        traversal(curr.right);
    }
    traversal(root);
    return hash;
}

let root = new TreeNode(3,
    new TreeNode(4,
        new TreeNode(1),
        new TreeNode(2)
    ),
    new TreeNode(5,
        null,
        null
    )
)

let subRoot = new TreeNode(4,
        new TreeNode(1),
        new TreeNode(2)
);

console.log(subTree(root, subRoot));

