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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {

    function addHelper(L1: ListNode | null, L2: ListNode | null, carry: number){

        if(!L1 && !L2 && !carry){
            return null
        }

        const L1Val = L1 !== null ? L1.val : 0;
        const L2Val = L2 !== null ? L2.val : 0;
        const sum = L1Val + L2Val + carry;
        const digit = sum % 10
        const plus = Math.floor(sum / 10);

        const result = new ListNode(digit)
        result.next = addHelper(L1 === null ? null : L1.next, L2 === null ? null : L2.next, plus);
        return result
    }    

  return  addHelper(l1, l2, 0)

}