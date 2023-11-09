// https://leetcode.com/problems/merge-two-sorted-lists/

/* To be honest, I wasn't able to solve this myself, had to refer a javascript solution from another person */

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    // Make a pre-node that will point next to the head of the result node, this could be anything
    let tempNode = new ListNode(0, null);
    let currentNode = tempNode;

    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            currentNode.next = list1;
            list1 = list1.next;
        } else {
            currentNode.next = list2;
            list2 = list2.next;
        }
        currentNode = currentNode.next;
    }
    // At the last position, point next to the list which has the value
    currentNode.next = list1 || list2;

    // Return the first node of either list1 or list2 whichever has the smaller value, and not the tempNode itself
    return tempNode.next;
};