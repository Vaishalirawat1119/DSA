function TreeNode(val, left=null, right=null){
    this.val = val;
    this.left = left;
    this.right = right;
}

//Helper to print next pointers
// function printLevels(root) {
//     let leftMost = root;
//     while (leftMost) {
//         let curr = leftMost;
//         let levelStr = "";
//         while (curr) {
//             levelStr += curr.val + " -> ";
//             curr = curr.next;
//         }
//         levelStr += "null";
//         console.log(levelStr);
//         leftMost = leftMost.left;
//     }
// }

function connect(root){
    let traversal = (curr) => {
        if(!root) return null;
        if(curr.left){
            curr.left.next = curr.right;
        }
        if(curr.right && curr.next){
            curr.right.next = curr.next.left;
        }
        curr.left && traversal(curr.left);
        curr.right && traversal(curr.right);
    }
    traversal(root);
    return root;
}

let root = new TreeNode(1,
    new TreeNode(2,
        new TreeNode(4),
        new TreeNode(5)
    ),
    new TreeNode(3,
        new TreeNode(6),
        new TreeNode(7) 
    )
);

console.log(connect(root));

// connect(root);
// printLevels(root);