/**
 * 二叉树层序遍历
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(root === null) {
        return []
    }
    let result = [];
    let queue = [root];

    while(queue.length) {
        let level = []
        let len = queue.length
        for(let i = 0; i < len; i++) {
            let node = queue.pop()
            level.push(node.val)
            if(node.left) {
                queue.unshift(node.left)
            }
            if(node.right) {
                queue.unshift(node.right)
            }
        } 
        result.push(level)
    }
    return result
};
/**
 * 
 * 二叉树最近公共祖先
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (!root || root === p || root === q)  return root
  
    let left = lowestCommonAncestor(root.left, p, q)
    let right = lowestCommonAncestor(root.right, p, q)
  
    if (left && right)  return root
  
    return left ? left : right
  };

/**
 * 从前序中序构建二叉树
 * 
 */
// 前序遍历 根 左子树 右子树
// 中序遍历  左子树 根 右子树
// 重复子问题 前序遍历的第一个节点 来拿到 左子树 右子树
var buildTree = function(preorder, inorder) {
    let p = 0
    let i = 0
    let build = function(stop) {
        if (inorder[i] != stop) {
            var root = new TreeNode(preorder[p++])
            root.left = build(root.val)
            i++
            root.right = build(stop)
            return root
        }
        return null
    }
    return build()

};
/**
 * 组合
 */
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    var ans = []
    getCombine(n, k, 1, [])

    function getCombine (n, k, start, list){

        if(k == 0) {
            ans.push([...list])
            return ans
        }
        for(let i = start; i <= n - k+1; i++) {
            list.push(i)
            getCombine(n, k - 1, i + 1, list)
            list.pop()
        }
    }
    return ans
};
/**
 * 全排列
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = (nums) => {
    const res = [];
    const used = {};
  
    function dfs(path) {
      if (path.length == nums.length) {
        res.push(path.slice());
        return;
      }
      for (const num of nums) {
        if (used[num]) continue;
        path.push(num);
        used[num] = true;
        // 下探
        dfs(path);
        // 处理参数
        path.pop();
        used[num] = false;
      }
    }
  
    dfs([]);
    return res;
  };

/**
 * 括号生成
 */
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    // 状态树
    let result = []
    function dfs (str, l, r, result) {
        if(l == 0 && r == 0) {
            result.push(str)
            return
        }
        
        if(l > r) {
            return
        }
        if(l > 0) {
            dfs(str+'(',l-1,r,result)
        }
        if(r > 0) {
            dfs(str+')',l,r-1,result)
        }
    }
    dfs('', n, n, result)
    return result
};

/**
 * 122. 买卖股票的最佳时机 II
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // 暴力法 每个都算一遍 n*2
    // 贪心 时间n
    let result = 0
    if(prices.length < 2) {
        return result
    }
    for(let i = 1; i < prices.length; i++) {
        let diff = prices[i] - prices[i-1]
        if(diff > 0) {
            result += diff
        }
    }
    return result
};
/**
 * 860. 柠檬水找零
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let five = 0;
    let ten = 0;
    for (let i = 0; i < bills.length; i++) {
        if(bills[i] === 5) {
            five ++
        } else if (bills[i] === 10) {
            if(five === 0) {
                return false
            }
            five --
            ten ++
        }else {
            if(five > 0 && ten > 0) {
                five --
                ten --
            }else if (five >= 3) {
                five -= 3
            }else {
                return false
            }
    }
    }

    return true
};