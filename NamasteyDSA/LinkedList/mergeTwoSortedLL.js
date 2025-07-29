function ListNode(val){
    this.val = val;
    this.next = null;
}

function mergeTwoLL(l1, l2){
    //corner cases
    if(!l1) return l2;
    if(!l2) return l1;

    //where to start the pointer
    let curr = null;
    if(l1.val < l2.val){
        curr = l1;
        l1 = l1.next;
    }
    else{
        curr = l2;
        l2 = l2.next;
    }

    let start = curr;

    //iteration
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

    if(!l1){
        curr.next = l2;
    }
    else{
        curr.next = l1;
    }

    //return ans
    return start;
}

let l1 = new ListNode(1);
l1.next = new ListNode(4);
l1.next.next = new ListNode(5);

let l2 = new ListNode(4);
l2.next = new ListNode(6);
l2.next.next = new ListNode(7);
l2.next.next.next = new ListNode(9);

let result = mergeTwoLL(l1, l2);
let print = result;
while(print){
    console.log(print.val);
    print = print.next
}