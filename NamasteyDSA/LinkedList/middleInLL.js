function Node(val){
    this.val = val;
    this.next = null;
}

const linkedList = {
    head:null,
    size:0,

    add : function(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
        }
        else{
            let curr = this.head;
            while(curr.next){
                curr = curr.next;
            }
            curr.next = newNode;
        }
        this.size++;
    },

    middle : function(){
        let slow = fast = this.head;
        while(fast&&fast.next){
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }
}
linkedList.add(4)
linkedList.add(0)
linkedList.add(9)
linkedList.add(3)
linkedList.add(5)
linkedList.add(8)

let print = linkedList.head;
while(print){
    console.log(print.val);
    print = print.next;
}

let midNode = linkedList.middle();
console.log("Middle node value:", midNode.val); 