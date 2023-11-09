// https://leetcode.com/problems/valid-anagram/

function isAnagram(s: string, t: string): boolean {
    let sArr = [...s];
    let tArr = [...t];
    sArr.sort();
    tArr.sort();
    
    return JSON.stringify(sArr) === JSON.stringify(tArr);
};