function Node(val){
    this.val = val;
    this.next = null;
}

function rotate(head, k){
    //calculate length
    let length = 0;
    let curr = head;
    while(curr){
        curr = curr.next;
        length++;
    }

    //avoids unnecessary rotation
    k = k % length;

    let slow = fast = head;
    for(let i=0; i<k; i++){
        fast = fast.next;
    }

    while(fast.next){
        slow = slow.next;
        fast = fast.next;
    }
    fast.next = head;
    let newHead = slow.next;

    slow.next = null;

    return newHead;
}

let head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)

let result = rotate(head, 2);
let print = result;
while(print){
    console.log(print.val);
    print = print.next;
}