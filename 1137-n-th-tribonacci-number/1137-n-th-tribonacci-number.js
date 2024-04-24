/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  if (0 <= n && n < 3) {
    return n === 0 ? 0 : 1;
  }

  let Obj = {
    0: 0,
    1: 1,
    2: 1,
  };

  for (let i = 3; i <= n; i++) {
      Obj[i] = Obj[i - 1] + Obj[i - 2] + Obj[i - 3];
  }
  return Obj[n];
};

//  O(3^n) recusrive solution
// var tribonacci = function(n) {
//    if (0 <= n && n < 3) {
//         return n === 0 ? 0:1;
//     }
//     return  tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);

// };

// Someone solution

/*

class Solution {
  public int tribonacci(int n) {
    if (n < 2)
      return n;

    int[] dp = {0, 1, 1};

    for (int i = 3; i <= n; ++i) {
      final int next = dp[0] + dp[1] + dp[2];
      dp[0] = dp[1];
      dp[1] = dp[2];
      dp[2] = next;
    }

    return dp[2];
  }
}
*/