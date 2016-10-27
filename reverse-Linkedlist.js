var reverseList = function(head) {
    var current = head;
    prev = new ListNode();
    prev = null;
    while(current){
        var next = current.next; // get the next element
        current.next = prev; // change the pointer of the current element
        prev = current;  // reset prev element
        current = next; //reset current element, start the recurison
    }
    return prev;
};

