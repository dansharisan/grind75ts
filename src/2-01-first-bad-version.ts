// https://leetcode.com/problems/first-bad-version/

/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function(isBadVersion: any) {

    return function(n: number): number {
        // If there is only 1 version, then that is the bad one
        if (n === 1) {
            return n
        }
        // At least we know the last version is a bad one
        let firstBadVersion: number = n
        // Define the range of versions to check, starting with 1
        let start: number = 1
        // We do not need to check the last version, thus n-1
        let end: number = n - 1
        // Do the loop check while the range is still valid
        while (end - start >= 1) {
            // Basically do a binary search of bad version
            let mid: number = Math.floor((start + end)/2)
            if (isBadVersion(mid)) {
                firstBadVersion = mid
                // We dont need to include "mid" in the next round for checking for bad version
                end = mid - 1
            } else {
                // We know all the versions prior to this mid are also good ones
                start = mid + 1
            }
        }
        // If there is only one version to check, then either that or the last detected bad version
        return isBadVersion(start) ? start : firstBadVersion
    }
}