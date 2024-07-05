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

function nodesBetweenCriticalPoints(head: ListNode | null): number[] {
    const points = [];

    let maxDistance = 0;
    let minDistance = Number.MAX_SAFE_INTEGER;
    let previous = head
    let currentNode = head.next;
    let index = 0;

    const calculate = () => {
        if(points.length <= 1) {
            return;
        }

        const s = points[0];
        const e1 = points[points.length - 1];
        const e2 = points[points.length - 2];

        if(e1 - e2 < minDistance) {
            minDistance = e1 - e2;
        }

        maxDistance = e1 - s;
    }

    while(currentNode !== null) {
        if(currentNode.next === null) {
            break;
        }
        
        if(previous.val > currentNode.val && currentNode.next.val > currentNode.val || previous.val < currentNode.val && currentNode.next.val < currentNode.val) {
            points.push(index);

            calculate();
        }

        previous = currentNode;
        currentNode = currentNode.next;
        index += 1;
    }

    if(points.length < 2) {
        return [-1, -1];
    }

    return [minDistance, maxDistance];
};



