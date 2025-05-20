//Adding two numbers and stored in reverse order

//define a list node class
class ListNode{
    constructor(val, next = null){
        this.val = val;
        this.next = next;
    };
};

function addTwoNums(l1, l2){
    let dummy = new ListNode(0); //dummy node to keep track of the head of the result list
    let current = dummy; //current node to keep track of the last node in the result list
    let carry = 0; //carry variable to keep track of the carry from the previous sum

    while(l1 || l2 || carry){ //loop until both lists are empty and there is no carry
        let x = l1 ? l1.val : 0; //get the value of the current node in l1 or 0 if l1 is null
        let y = l2 ? l2.val : 0;

        let sum = x + y + carry; //sum the values of the current nodes and the carry
        carry = Math.floor(sum/10); //calculate the new carry
        current.next = new ListNode(sum%10); //create a new node with the value of the sum modulo 10
        current = current.next; 

        if(l1) l1 = l1.next; //move to the next node in l1
        if(l2) l2 = l2.next; //move to the next node in l2
    }
    return dummy.next;
};
// Example usage
// let l1 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))))));
// let l2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));
// let result = addTwoNums(l1,l2);
// console.log(result);

// console.log(addTwoNums(l1,l2));

function arrayToList(arr){ // Helper function to convert an array to a linked list
    let dummy = new ListNode(); 
    let current = dummy; 

    for(let val of arr){ // iterate through the array
        current.next = new ListNode(val); // create a new node with the value
        current = current.next;
    };
    return dummy.next;
};

function printList(node){ // Helper function to print the linked list
    let arr = []; 
    while(node){ 
        arr.push(node.val); // push the value of the current node to the array
        node = node.next;
    };
    console.log(arr);
};

let l1 = arrayToList([9,9,9,9,9,9,9]);
let l2 = arrayToList([9,9,9,9]);
let result = addTwoNums(l1,l2);
printList(result);