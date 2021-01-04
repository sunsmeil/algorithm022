/**
 * 236. 二叉树的最近公共祖先
 * https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/
 * @param {*} root 
 * @param {*} p 
 * @param {*} q 
 */
var lowestCommonAncestor = function(root, p, q) {
   if(root == null || p == root || q == root) {
       return root
   }

   let Left = lowestCommonAncestor(root.left, p, q)
   let Right = lowestCommonAncestor(root.right, p, q)

   if(Left != null && Right != null) {
       return root
   }
   if(Left == null && Right == null) {
       return null
   }
   return Left == null ? Right : Left
};

/**
 * 105. 从前序与中序遍历序列构造二叉树
 * https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
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
 * https://leetcode-cn.com/problems/combinations/
 * 组合
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
 * https://leetcode-cn.com/problems/permutations/
 * 46. 全排列
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
  