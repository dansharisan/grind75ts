// https://leetcode.com/problems/valid-palindrome/

function isPalindrome(s: string): boolean {
    let processed: string = s.replace(/[^0-9a-z]/gi, '').toLowerCase();
    let charsArr: string[] = [...processed];
    // Don't directly compare two arrays
    return JSON.stringify(charsArr) === JSON.stringify(charsArr.reverse());
};