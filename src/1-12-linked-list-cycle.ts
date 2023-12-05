// https://leetcode.com/problems/linked-list-cycle/

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

function hasCycle(head: ListNode | null): boolean {
    if (head == null) return false

    let fast: ListNode = head
    let slow: ListNode = head
    while (slow.next !== null) {
        if (fast.next === null || fast.next.next === null) return false

        slow = slow.next
        fast = fast.next.next

        if (fast === slow) {
            return true
        }
    }

    return false
};