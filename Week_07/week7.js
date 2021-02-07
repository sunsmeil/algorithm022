/*
 *  id=208 lang=javascript
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var Trie = function () {
    this.root = Object.create(null)
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let node = this.root
    for (const c of word) {
        if (!node[c]) {
            node[c] = Object.create(null)
        }
        node = node[c]
    }
    node.isWord = true
};
Trie.prototype.traverse = function (word) {
    let node = this.root
    for (const c of word) {
        node = node[c]
        if (!node) {
            return null
        }
    }
    return node
}
/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    const node = this.traverse(word)
    return !!node && !!node.isWord
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    return !!this.traverse(prefix)
};


/*
 * id=200 lang=javascript
 *
 * [200] 岛屿数量
 * 好的题解https: //leetcode-cn.com/problems/number-of-islands/solution/dao-yu-lei-wen-ti-de-tong-yong-jie-fa-dfs-bian-li-/
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 * 陆地1 海洋0 已遍历陆地0
 */
var numIslands = function (grid) {
    if (grid === null || grid.length === 0) {
        return 0
    }
    let ml = grid.length
    let nl = grid[0].length
    let nums_lands = 0
    for (let m = 0; m < ml; ++m) {
        for (let n = 0; n < nl; ++n) {
            if (grid[m][n] == 1) {
                ++nums_lands
                deep(grid, m, n)
            }
        }
    }

    function deep(grid, m, n) {
        if (m < 0 || n < 0 || m >= ml || n >= nl || grid[m][n] == '0') {
            return;
        }

        grid[m][n] = 0

        deep(grid, m - 1, n)
        deep(grid, m + 1, n)
        deep(grid, m, n - 1)
        deep(grid, m, n + 1)
    }
    return nums_lands
};
/*
 *id=463 lang=javascript
 * [463] 岛屿的周长
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 * 临水 或者边的地方周长+1;注意边界判断；注意去除已经遍历过的陆地
 */
var islandPerimeter = function (grid) {
    if (grid === null || grid.length === 0) {
        return 0
    }

    let ml = grid.length
    let nl = grid[0].length
    let totalLen = 0
    for (let m = 0; m < ml; m++) {
        for (let n = 0; n < nl; n++) {
            if (grid[m][n] === 1) {
                deep(grid, m, n)
            }
        }
    }

    function deep(grid, m, n) {
        if (m < 0 || n < 0 || m >= ml || n >= nl || grid[m][n] == 0) {
            totalLen++
            return
        }
        if (grid[m][n] == 2) {
            return
        }
        grid[m][n] = 2
        deep(grid, m + 1, n)
        deep(grid, m - 1, n)
        deep(grid, m, n + 1)
        deep(grid, m, n - 1)
    }
    return totalLen
};
