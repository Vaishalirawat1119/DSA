function Node(val){
    this.val = val;
    this.next = null;
}

function remove(head, val){
    while (head && head.val === val) {
        head = head.next;
    }
    let curr = head;
    while(curr && curr.next){
        if(curr.next.val === val){
            curr.next = curr.next.next;
        }
        curr = curr.next;
    }
    return head;
}

let head = new Node(1)
head.next = new Node(3)
head.next.next = new Node(2)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(2)
head.next.next.next.next.next = new Node(5)

let result = remove(head, 2);

let curr = result;
while (curr) {
  console.log(curr.val);
  curr = curr.next;
}