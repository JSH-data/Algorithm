/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    const hash = {
        0: 1,
        1: 2,
        2: 3,
    }

    nums.sort((a, b) => hash[a] - hash[b]);
};