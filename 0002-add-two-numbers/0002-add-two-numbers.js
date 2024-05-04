/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let isCompliment = 0;
    let l3 = new ListNode();
    let holder = l3;
    while (l1 || l2 || isCompliment) {
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + isCompliment
        holder.val = sum % 10
        isCompliment = sum > 9 ? 1 : 0
        l1 = l1?.next
        l2 = l2?.next
        if(l1 || l2 || isCompliment){
        holder.next = new ListNode()
        holder = holder.next;
        }
    }
    return l3;
}