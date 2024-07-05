/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function (head) {
    let beforeNode = head;
    let curentNode = head.next;
    let index = 1;
    let resultArr = [];
    let minDistance = Infinity;
    while (curentNode.next) {
        if ((beforeNode.val < curentNode.val && curentNode.val > curentNode.next.val) || (beforeNode.val > curentNode.val && curentNode.val < curentNode.next.val)) {
            let maxIndex = index - resultArr[resultArr.length - 1]
            minDistance = maxIndex < minDistance ? maxIndex : minDistance
            resultArr.push(index)
        }
        beforeNode = curentNode;
        curentNode = curentNode.next
        index++;
    }
    if (resultArr.length <= 1) {
        return [-1, -1]
    }
    return [minDistance, resultArr[resultArr.length - 1] - resultArr[0]]
};
