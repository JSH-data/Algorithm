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

function mergeNodes(head: ListNode | null): ListNode | null {
    let answer: ListNode | null = null
    let newNodeList: ListNode | null = null;
    let nextNode: ListNode | null = head;

    const combine = (node: ListNode) => {
        let nextNode = node.next;
        let value = node.val;

        while(nextNode.val !== 0) {
            value += nextNode.val;

            nextNode = nextNode.next;
        }

        return {
            combinedNode: new ListNode(value),
            nextZeroNode: nextNode
        }
    }

    while(nextNode !== null) {
        if(nextNode.val === 0 && nextNode.next !== null) {
            const {combinedNode, nextZeroNode} = combine(nextNode.next);

            if(newNodeList) {
                newNodeList.next = combinedNode
            } else {
                answer = combinedNode;
            }
            
            newNodeList = combinedNode;
            nextNode = nextZeroNode;
        } else {
            nextNode = null;
        }
    }

    return answer;
};