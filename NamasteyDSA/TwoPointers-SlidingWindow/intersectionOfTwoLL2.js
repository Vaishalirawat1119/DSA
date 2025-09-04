function Node(val){
    this.val = val;
    this.next = null;
}

function intersectionTwoLL(headA, headB){
    let pA = headA;
    let pB = headB;

    while(pA !== pB){
        pA = pA === null ? headB : pA.next;
        pB = pB === null ? headA : pB.next;
    }

    return pB;
}

let common = new Node(4);
common.next = new Node(5);
common.next.next = new Node(6);

let A = new Node(1);
A.next = new Node(2);
A.next.next = common;

let B = new Node(1);
B.next = new Node(2);
B.next.next = new Node(3);
B.next.next.next = common;

console.log(intersectionTwoLL(A, B));