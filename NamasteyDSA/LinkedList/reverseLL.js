function Node(val){
    this.val = val;
    this.next = null;
}

const linkedList = {
    head : null,
    size : 0,

    addToTail: function(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
        } else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = newNode;
        }
        this.size++;
    },

    reverse: function(){
        let prev = null;
        let curr = this.head;
        while(curr){
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }
        this.head = prev;
    }
}
linkedList.addToTail(3);
linkedList.addToTail(1);
linkedList.addToTail(6);
linkedList.addToTail(7);
linkedList.addToTail(2);
linkedList.addToTail(9);
linkedList.addToTail(0);

linkedList.reverse();

let print = linkedList.head;
while(print){
    console.log(print.val);
    print = print.next;
}