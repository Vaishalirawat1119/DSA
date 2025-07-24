function Node(val){
    this.val = val;
    this.next = null;
}

const linkedList = {
    head : null,
    size : 0,

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

    delete : function(index){
        if(index < 0 || index >= this.size || !this.head){
           console.log("Invalid index");
           return
        }
        if(index === 0){
            this.head = this.head.next;
            return;
        }

        let curr = this.head;
        for(let i=0; i<index-1; i++){
            curr = curr.next;
        }
        curr.next = curr.next.next;
        this.size--;
    }
};

linkedList.add(4)
linkedList.add(0)
linkedList.add(9)
linkedList.add(3)
linkedList.add(5)
linkedList.add(8)

linkedList.delete(2)
linkedList.delete(7)

let print = linkedList.head;
while(print){
    console.log(print.val);
    print = print.next;
}