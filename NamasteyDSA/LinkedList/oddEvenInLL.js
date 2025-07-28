function Node(val){
    this.val = val;
    this.next = null;
}

function oddEven(head){
    if(!head || !head.next) return head;

    let odd = head;
    let even = head.next;
    let evenStart = even;

    while(odd.next && even.next){
        odd.next = odd.next.next;
        even.next = even.next.next;
        odd = odd.next;
        even = even.next;
    }
    odd.next = evenStart;

    return head;
}

let head = new Node(1)
head.next = new Node(3)
head.next.next = new Node(2)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(6)
head.next.next.next.next.next = new Node(5)

let result = oddEven(head);
let print = result;
while(print){
    console.log(print.val);
    print = print.next;
}