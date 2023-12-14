// https://leetcode.com/problems/reverse-linked-list/

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

function reverseList(head: ListNode | null): ListNode | null {
    if (head === null) return head;

    let prev: ListNode | null = null;
    let next: ListNode | null = head.next;

    while (head.next !== null) {
        head.next = prev;
        prev = head;
        head = next;
        next = head.next;
    }

    head.next = prev;

    return head;
}
