var hasCycle = function(head) {
    var slow = head,
        fast = head;
    
    while(fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast || (fast && fast.next === slow)) {
            return true;
        }
    }
    return false;
};
