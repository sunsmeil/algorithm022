/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// 用map记录 str: ary

var groupAnagrams = function(strs) {
    let map = new Map()
    for(let str of strs) {
        let ary = Array.from(str)
        ary.sort()
        let key = ary.toString()
        let list = map.get(key) ? map.get(key) : new Array()
        list.push(str)
        map.set(key, list)
    }
    return Array.from(map.values())
};