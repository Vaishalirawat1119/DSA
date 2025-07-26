function Node(val){
    this.val = val;
    this.next = null;
}

function removeDuplicatess(head){
    let curr = head;

    while(curr && curr.next){
        if(curr.val === curr.next.val){
            curr.next = curr.next.next;
        }
        else{
            curr = curr.next;
        }
    }

    return head;
}

let head = new Node(1)
head.next = new Node(1)
head.next.next = new Node(1)
head.next.next.next = new Node(3)
head.next.next.next.next = new Node(3)
head.next.next.next.next.next = new Node(4)

let result = removeDuplicatess(head);

let curr = result;
while (curr) {
  console.log(curr.val);
  curr = curr.next;
}