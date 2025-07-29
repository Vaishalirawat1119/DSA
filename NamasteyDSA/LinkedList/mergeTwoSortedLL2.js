function ListNode(val){
    this.val = val;
    this.next = null;
}

function mergeTwoSortedLL(l1,l2){
    //create a dummy node
    let start = new ListNode();
    let curr = start;

    while(l1 && l2){
        if(l1.val < l2.val){
            curr.next = l1;
            l1 = l1.next;
        }
        else{
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }

    if (!l1) curr.next = l2;
    if (!l2) curr.next = l1;

    return start.next
}

let l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(4);

let l2 = new ListNode(1);
l2.next = new ListNode(4);
l2.next.next = new ListNode(5);
l2.next.next.next = new ListNode(7);

let result = mergeTwoSortedLL(l1, l2);
let print = result;
while(print){
    console.log(print.val);
    print = print.next
}