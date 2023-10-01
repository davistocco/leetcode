/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    const dict = {};
    for (let i = 0; i < nums.length; i++) {
        dict[nums[i]] = dict[nums[i]] ? dict[nums[i]] + 1 : 1;
        if (dict[nums[i]] > 1) {
            return true;
        }
    }
    return false;
};