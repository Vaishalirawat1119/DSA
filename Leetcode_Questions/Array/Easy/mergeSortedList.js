class ListNode{
    constructor(val, next = null){
        this.val = val;
        this.next = next;
    }
}

function mergeTwoSortedLists(list1, list2){
    let dummy = new ListNode(-1);
    let current = dummy;

    while(list1 && list2){
        if(list1.val < list2.val){
            current.next = list1;
            list1 = list1.next;
        }
        else{
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
    current.next = list1 || list2;
    return dummy.next;
}

function printList(head){
    let curr = head;
    let result = [];

    while(curr){
        result.push(curr.val);
        curr = curr.next;
    }
    console.log(result.join(" -> "));
}

list1 = new ListNode(1, new ListNode(4, new ListNode(7, new ListNode(7))));
list2 = new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(8))));

console.log("List 1: ");
printList(list1);

console.log("List 2: ");
printList(list2);

let mergedSortedList = mergeTwoSortedLists(list1, list2);

console.log("Merged List: ");
printList(mergedSortedList);