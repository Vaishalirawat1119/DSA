function Node(val){
    this.val = val;
    this.next = null;
}

function intersectionTwoLL(headA, headB){
    let store = new Set();
    while(headB){
        store.add(headB);
        headB = headB.next;
    }

    while(headA){
        if(store.has(headA)){
            return headA;
        }
        headA = headA.next;
    }
    return null;
}

let common = new Node(4);
common.next = new Node(5);
common.next.next = new Node(6);

let headA = new Node(1);
headA.next = new Node(2);
headA.next.next = common;

let headB = new Node(1);
headB.next = new Node(2);
headB.next.next = new Node(3);
headB.next.next.next = common;

let result = intersectionTwoLL(headA, headB);


if (result) {
  console.log("Intersection at node with value:", result.val);
} else {
  console.log("No intersection found.");
}