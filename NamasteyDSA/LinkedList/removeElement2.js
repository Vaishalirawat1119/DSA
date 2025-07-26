//sentinel node

function ListNode(val){
    this.val = val;
    this.next = null;
}

function removeUsingSentinelNode(head, val){
    let sentinel = new ListNode();
    sentinel.next = head;

    let prev = sentinel;
    while(prev && prev.next){
        if(prev.next.val === val){
            prev.next = prev.next.next;
        }
        else{
            prev = prev.next;
        }
    }
    return sentinel.next;
}

let head = new ListNode(1);
head.next = new ListNode(1);
head.next.next = new ListNode(1);
head.next.next.next = new ListNode(1);
head.next.next.next.next = new ListNode(2);
head.next.next.next.next.next = new ListNode(5);

let result = removeUsingSentinelNode(head, 1);

let print = result;
while(print){
    console.log(print.val);
    print = print.next;
}