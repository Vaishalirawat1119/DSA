function Node(val){
    this.val = val;
    this.next = null;
}

function intersectionTwoLL(A, B){
    //calculating the length of n and m.
    let n = 0;
    let pA = A;
    while(pA){
        ++n;
        pA = pA.next;
    }
    let m = 0;
    let pB = B;
    while(pB){
        ++m;
        pB = pB.next;
    }

    //difference
    let diff = Math.abs(n-m);

    //requirement - A list is small and B list is large always
    if(n > m){
        let temp = A;
        A = B;
        B = temp;
    }
    for(let i=0; i<diff; i++){
        B = B.next;
    }

    pA = A;
    pB = B;

    //checks for intersection.
    while(pA !== pB){
        pA = pA.next;
        pB = pB.next;
    }
    return pA;
}

// let common = new Node(4);
// common.next = new Node(5);
// common.next.next = new Node(6);

// let A = new Node(1);
// A.next = new Node(2);
// A.next.next = common;

// let B = new Node(1);
// B.next = new Node(2);
// B.next.next = new Node(3);
// B.next.next.next = common;

let common = new Node(2);
common.next = new Node(4);

let A = new Node(1);
A.next = new Node(9);
A.next.next = new Node(1);
A.next.next.next = common;

let B = common;

console.log(intersectionTwoLL(A, B));