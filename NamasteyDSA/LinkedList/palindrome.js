function Node(val){
    this.val = val;
    this.next = null;
}

const LinkedList = {
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

    palindrome : function(){
        // find mid
        let slow = fast = this.head;
        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
        }
        //reverse the second half LL
        let prev = null;
        let curr = slow;
        while(curr){
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }
        //check palindrome
        let firstLL = this.head;
        let secondLL = prev;

        while(secondLL){
            if(firstLL.val !== secondLL.val){
                return false;
            }
            firstLL = firstLL.next;
            secondLL = secondLL.next;
        }
        return true;
    }
}
LinkedList.add(1)
LinkedList.add(2)
LinkedList.add(3)
LinkedList.add(4)
LinkedList.add(3)
LinkedList.add(2)
LinkedList.add(1)

// LinkedList.add(1)

// LinkedList.add(3)
// LinkedList.add(4)

// LinkedList.add(11)
// LinkedList.add(11)

let print = LinkedList.head;
while(print){
    console.log(print.val);
    print = print.next;
}

console.log("Is Palindrome:", LinkedList.palindrome());