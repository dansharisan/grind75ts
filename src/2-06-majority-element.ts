// https://leetcode.com/problems/majority-element/

function majorityElement(nums: number[]): number {
    let valueOccurrencesMap = new Map<number, number>();
    let occurrences: number;
    let halfLength = Math.floor(nums.length / 2);
    for (let num of nums) {
        if (valueOccurrencesMap.has(num)) {
            occurrences = (valueOccurrencesMap.get(num) as number) + 1;
            valueOccurrencesMap.set(num, occurrences);
        } else {
            valueOccurrencesMap.set(num, 1);
        }

        if ((valueOccurrencesMap.get(num) as number) > halfLength) {
            return num;
        }
    }

    return nums[0];
}
