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

function doubleIt(head: ListNode | null): ListNode | null {
    const recursive = (node) => {
        let doubling = node.val * 2;

        if(node.next) {
            const carry = recursive(node.next)
            
            if(carry) doubling += 1;
        }

        if(doubling >= 10) {
            node.val = doubling - 10;

            return true;
        }

        node.val = doubling;

        return false;
    }

    const result = recursive(head);

    if(result) {
        const answer = new ListNode(1);

        answer.next = head;

        return answer;
    }

    return head;
};