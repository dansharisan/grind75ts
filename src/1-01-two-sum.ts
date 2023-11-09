// https://leetcode.com/problems/two-sum/

function twoSum(nums: number[], target: number): number[] {
    for (let i:number = 0; i < nums.length - 1; i++) {
        for (let j:number = 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target && i != j) {
                return [i, j];
            }
        }
    }

    return [];
};