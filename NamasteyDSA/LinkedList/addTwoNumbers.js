function ListNode(val){
    this.val = val;
    this.next = null;
}

function addTwo(l1, l2){
    let dummyNode = new ListNode();
    let ans = dummyNode;
    let carry = 0; 
    while(l1 || l2 || carry){
        let sum = (!l1 ? 0 : l1.val) + (!l2 ? 0 : l2.val) + carry;
        carry = Math.floor(sum / 10);
        let digit = sum % 10;
        let newNode = new ListNode(digit);
        dummyNode.next = newNode;
        dummyNode = dummyNode.next;

        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
    }
    return ans.next;
}

let l1 = new ListNode(3);
l1.next = new ListNode(4);
l1.next.next = new ListNode(9);

let l2 = new ListNode(4);
l2.next = new ListNode(8);
l2.next.next = new ListNode(1);
l2.next.next.next = new ListNode(9);

let result = addTwo(l1, l2);
let print = result;
while(print){
    console.log(print.val);
    print = print.next
}