/**
 * 387. 字符串中的第一个唯一字符
 * https://leetcode-cn.com/problems/first-unique-character-in-a-string/
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map = new Map()

    for(let i = 0; i < s.length; i++) {
        if(map.has(s[i])){
            map.set(s[i], -1)
        }else {
            map.set(s[i], i)
        }
    }

    for(let value of map) {
        if(value != -1){
            return value
        }
    }
    return -1
};


/**
 * @param {string} s
 * @return {string}
 */
/**
 * 5. 最长回文子串
 * https://leetcode-cn.com/problems/longest-palindromic-substring/
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(!s || s.length < 2){
        return s;
    }
    var s_f = '#'+s.split('').join('#')+'#';
    let c = 0,R = 0;
    var len = s.length;
    var t_len = s_f.length;
    var maxLen = 0;
    var maxIndex = 0;
    var originIndex = 0;
    var p = new Array(t_len);
    p[0] = 0;
    for(var i = 1;i<t_len-1;i++){
        var j = 2*c-i;
        if(i<R){
            p[i] = Math.min(p[j],R-i)
        }else{
            p[i] = 0;
        }
        var left = i-p[i]-1;
        var right = i+p[i]+1;
        while(left>=0 && right<t_len && s_f[left]==s_f[right]){
            left--;
            right++;
            p[i]++;
        }
        if(i+p[i]>R){
            c = i;
            R = i+p[i];
        }
        if(p[i]>maxLen){
            maxLen = p[i];
            maxIndex = i;
            originIndex = parseInt((i-p[i])/2)
        }
    } 
    return s.substring(originIndex,originIndex + maxLen);
};
