// https://leetcode.com/problems/ransom-note/

function canConstruct(ransomNote: string, magazine: string): boolean {
    if (ransomNote.length > magazine.length) {
        return false
    }
    // Get unique characters of randomNote
    let ransomNoteSet: Set<string> = new Set(ransomNote)
    // Iterate over each letter of ransomNote, if any character has more occurrences than in magazine, then immediately conclude that magazine can't construct ransomNote
    for (const ransomNoteUniqueChar of ransomNoteSet) {
        if (countOccurrences(ransomNote, ransomNoteUniqueChar) > countOccurrences(magazine, ransomNoteUniqueChar)) {
            return false
        }
    }

    return true
};

// Count occurrences of a string inside a string
function countOccurrences(haystack: string, needle: string) {
    let founds = haystack.match(new RegExp(`${needle}`, 'g'))
    
    return founds ? founds.length : 0
}