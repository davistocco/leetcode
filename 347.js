/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const count = {};
    for (const num of nums) {
        count[num] = count[num] ? count[num] + 1 : 1;
    }
    const freqs = new Array(nums.length + 1);
    for (const key in count) {
        freqs[count[key]] ? freqs[count[key]].push(+key) : freqs[count[key]] = [+key];
    }
    const result = [];
    for (let i = freqs.length - 1; i > 0; i--) {
        if (!freqs[i]) continue;
        for (const n of freqs[i]) {
            result.push(n);
            if (result.length == k) {
                return result;
            }
        }
    }
};
