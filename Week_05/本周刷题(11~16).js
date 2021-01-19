/**
 * 零钱兑换
 * 动态规划
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let dp = new Array(amount+1).fill(Infinity)
    
    dp[0] = 0
    
    for (let coin of coins) {
        for (let i = coin; i <= amount; i++) {
          dp[i] = Math.min(dp[i], dp[i - coin] + 1)
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount]
};
/**
 * 最小路径和
 * @param {number[][]} grid
 * @return {number}
 */
// 还可以把边界抽出来 单独循环
var minPathSum = function(grid) {
    // 列
    for(let i = 0; i < grid.length; i++) {
        //行
        for(let j = 0; j < grid[0].length; j++) {
            if(i === 0 && j ===0) {
                continue
            }
            if(i === 0) {
                grid[i][j] = grid[i][j-1] + grid[i][j]
                continue
            }
            if(j === 0) {
                grid[i][j] = grid[i-1][j] + grid[i][j]
                continue
            }
            
            grid[i][j] = Math.min(grid[i-1][j],grid[i][j-1]) + grid[i][j]
        }
    }
    return grid[grid.length-1][grid[0].length-1]
};