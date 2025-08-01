function ListNode(val){
    this.val = val;
    this.next = null;
}

function reverseNodeKthTime(head, k){
    if(!head || k===0) return head;

    let dummy = new ListNode();
    dummy.next = head;
    let prevGroup = dummy;

    while(true){
        let kth = prevGroup;
        for(let i=0; i<k; i++){
            kth = kth.next;
            if(!kth) return dummy.next;
        }

        let groupStart = prevGroup.next;
        let groupEnd = kth.next;

        let prev = groupEnd;
        let curr = groupStart;
        while(curr !== groupEnd){
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }
        prevGroup.next = kth;
        prevGroup = groupStart
    }
    return dummy.next;
}

// let head = new ListNode(1);

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
head.next.next.next.next.next = new ListNode(6);

let result = reverseNodeKthTime(head, 2);
let print = result;
while(print){
    console.log(print.val);
    print = print.next;
}