function Node(val){
    this.val = val;
    this.next = null;
}

const linkedList = {
  head: null,
  size: 0,

  addAtHead: function(val) {
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  },
}
linkedList.addAtHead(2);
linkedList.addAtHead(5); 
linkedList.addAtHead(3); 
linkedList.addAtHead(1); 
linkedList.addAtHead(8); 
linkedList.addAtHead(6); 

let curr = linkedList.head;
while (curr) {
  console.log(curr.val);
  curr = curr.next;
}