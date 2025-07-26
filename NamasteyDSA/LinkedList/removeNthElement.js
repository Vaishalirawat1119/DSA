function ListNode(val){
    this.val = val;
    this.next = null;
}

function removeNthEle(head, n){
    let sentinel = new ListNode();
    sentinel.next = head;

    //Approach 1 (Two Pass)

    // let length = 0;
    // while(head){
    //     head = head.next;
    //     length++;
    // }

    // let prevPos = length - n;

    // let prev = sentinel;
    // for(let i=0; i<prevPos; i++){
    //     prev = prev.next;
    // }
    // prev.next = prev.next.next;



    //Approach 2 (One Pass with Two Pointer)
    let first = sentinel;
    for(let i=0; i<n; i++){
        first = first.next;
    }

    let second = sentinel;
    while(first.next){
        first = first.next;
        second = second.next;
    }
    second.next = second.next.next;

    return sentinel.next;
}

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

let result = removeNthEle(head, 2);
let print = result;
while(print){
    console.log(print.val);
    print = print.next;
}