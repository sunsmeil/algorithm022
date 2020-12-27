// 二叉树的最小深度https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if(root === null) {
        return 0
    }
    let L = minDepth(root.left)
    let R = minDepth(root.right)

    return L&&R ? Math.min(L,R) + 1 : Math.max(L, R) + 1
};

// 二叉树最大深度https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(root === null) {
        return 0
    }
    let L = maxDepth(root.left)
    let R = maxDepth(root.right)

    return Math.max(L, R) + 1
};

// 字符串第一个唯一字符https://leetcode-cn.com/problems/first-unique-character-in-a-string/submissions/
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const frequency = _.countBy(s);
    for (const [i, ch] of Array.from(s).entries()) {
        if (frequency[ch] === 1) {
            return i;
        }
    }
    return -1;
    
};
// 打乱数组https://leetcode-cn.com/problems/shuffle-an-array/
/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.nums = nums
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.nums
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    let copy = [...this.nums]
    for(let i = 0; i < copy.length; i++) {
        let j = Math.floor(Math.random() * copy.length)
        let val = copy[j]
        copy[j] = copy[i]
        copy[i] = val
    }
    return copy
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
// 各位相加https://leetcode-cn.com/problems/add-digits/
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if(num < 10) {
        return num
    }
    return addDigits((num + '').split('').reduce((a, b) => Number(a) + Number(b)))
}
// 分发饼干https://leetcode-cn.com/problems/assign-cookies/
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    // 孩子的饭量由小到大排序
    // 饼干由小到大排序
    // 每个孩子最多给一块饼干
    // 遍历 如果饼干可以满足小孩 count++
    // 饼干不满足小孩 饼干+ 小孩不加
    let count = 0;
    g = g.sort((a,b) => a - b)
    s = s.sort((a, b) => a - b)
    for(let j = 0; count < g.length && j < s.length; j++){
        if(g[count] <= s[j]) {
            count ++
        }
    }
    return count
};