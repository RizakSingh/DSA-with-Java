var runningSum = function(nums) {
    let ans = [];

    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            ans[i] = nums[i];
        } else {
            ans[i] = nums[i] + ans[i - 1];
        }
    }

    return ans;
};