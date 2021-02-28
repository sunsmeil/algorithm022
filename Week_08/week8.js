/**
 * https://leetcode-cn.com/problems/number-of-1-bits/
 * 位1的个数
 * @param {number} n - a positive integer
 * @return {number}
 */
// 位操作技巧
var hammingWeight = function(n) {
    let sum = 0;
    while(n != 0) {
        sum++
        n &= n-1
    }
    return sum
};
// 调用函数方法
var hammingWeight = function(n) {
    return n.toString(2).replace(/0/g,'').length
};

/**
 * 1122. 数组的相对排序
 * https://leetcode-cn.com/problems/relative-sort-array/
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2, h = new Map) {
    arr2.forEach((v, i) => h.set(v, i))
    return sort(arr1, v => h.has(v) ? h.get(v) : 1000 + v)
};
var sort = (a, v, s = 0, e = a.length - 1, l = s, r = e, q = v(a[s])) => {
    if (s >= e) return
    while(l < r) {
        while (l < r && v(a[r]) >= q) r--
        while (l < r && v(a[l]) <= q) l++
        [a[l], a[r]] = [a[r], a[l]]
    }
    [a[l], a[s]] = [a[s], a[l]]
    sort(a, v, s, l - 1)
    sort(a, v, l + 1, e)
    return a
}