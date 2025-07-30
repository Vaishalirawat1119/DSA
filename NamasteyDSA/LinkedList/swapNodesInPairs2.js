function ListNode(val){
    this.val = val;
    this.next = null;
}

function swapNodes(head){
    if(!head || !head.next) return head;

    let l = head;
    let r = head.next;

    l.next = swapNodes(r.next);
    r.next = l;

    return r
}

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
head.next.next.next.next.next = new ListNode(6);

let result = swapNodes(head);
let print = result;
while(print){
    console.log(print.val);
    print = print.next;
}