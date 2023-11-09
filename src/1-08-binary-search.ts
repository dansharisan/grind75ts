// https://leetcode.com/problems/binary-search/

function search(nums: number[], target: number): number {
    let numsLength: number = nums.length;
    // This variable is for counting how many nums from the left has been sliced
    let numsOfLeftSliced: number = 0;
    
    // Divide the array into two halves every time we compare to the target number
    while (numsLength / 2 >= 1) {
        let i: number = Math.floor(numsLength / 2);
        if (nums[i] == target) {
            return numsOfLeftSliced + i;
        } else if (nums[i] < target) {
            // Remove first i+1 elements from the array (+1 because including the element at i we just checked)
            nums = nums.slice(i + 1);
            // Have to remember who many elements on the left have been sliced, so later we can return the original index correctly
            numsOfLeftSliced += (i + 1);
        } else {
            // Remove last i elements from the array 
            nums = nums.slice(0, nums.length - i);
        }
        numsLength = nums.length;
    }

    // Should only 1 element left here
    if (nums[0] != target) {
        return -1;
    } else {
        return numsOfLeftSliced;
    }
};