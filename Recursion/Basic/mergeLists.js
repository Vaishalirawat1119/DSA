// Merge Two Sorted Lists

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function mergeTwoLists(list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;

  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
}

function printList(head) {
  let curr = head;
  let result = [];
  while (curr !== null && curr !== undefined) {
    result.push(curr.val);
    curr = curr.next;
  }
  console.log(result.join(" -> "));
}

let list1 = new ListNode(1, new ListNode(3, new ListNode(5)));
let list2 = new ListNode(2, new ListNode(4, new ListNode(6)));

console.log("List 1:");
printList(list1);

console.log("List 2:");
printList(list2);

let mergedLists = mergeTwoLists(list1, list2);

console.log("Merged list:");
printList(mergedLists);