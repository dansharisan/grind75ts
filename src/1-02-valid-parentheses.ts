// https://leetcode.com/problems/valid-parentheses/

function isValid(s: string): boolean {
    let leftParentheses:string[] = ['(', '[', '{'];
    let rightParentheses:string[] = [')', ']', '}'];
    let chars:string[] = [...s];
    let isValid:boolean = true;
    chars.forEach((char, index) => {
        if (
            // False if current character is an open bracket but next character is not its corresponding close bracket
            (leftParentheses.includes(char) && (typeof chars[index + 1] === 'undefined' || (chars[index + 1] != rightParentheses[leftParentheses.indexOf(char)])))
            ||
            // False if current character is a close bracket but previous character is not its corresponding open bracket
            (rightParentheses.includes(char) && (typeof chars[index - 1] === 'undefined' || (chars[index - 1] != leftParentheses[rightParentheses.indexOf(char)])))
        ) {
            isValid = false;
            return;
        }
    });

    return isValid;
};