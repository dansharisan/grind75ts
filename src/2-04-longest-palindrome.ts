// https://leetcode.com/problems/longest-palindrome/

function longestPalindrome(s: string): number {
    let length: number = 0;
    // Get unique characters of string s
    let uniqueChars: Set<string> = new Set(s);
    let hasOddOccurrences: boolean = false;
    for (const eachChar of uniqueChars) {
        let occurrences: number = countOccurrences(s, eachChar);
        if (occurrences % 2 === 0) {
            length += occurrences;
        } else {
            length += occurrences - 1;
            hasOddOccurrences = true;
        }
    }
    // If has any odd occurrences, then it can be used for the center position
    if (hasOddOccurrences) {
        length++;
    }

    return length;
}

// Count occurrences of a string inside a string
function countOccurrences(haystack: string, needle: string) {
    let founds = haystack.match(new RegExp(`${needle}`, "g"));

    return founds ? founds.length : 0;
}
