/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function(nums) {
    const length = nums.length
    const rightPrefixSum = new Array(length).fill(nums[0])
    const leftPrefixSum = new Array(length).fill(nums[length-1])
    for (let index=length-2; index>=0; index--) {
        leftPrefixSum[index] = nums[index] + leftPrefixSum[index+1]
    }

    for (let index=1; index< length; index++) {
        rightPrefixSum[index] = nums[index] + rightPrefixSum[index-1]
    }

    console.log(rightPrefixSum, leftPrefixSum)
    let possibleSplits = 0

    // if (length==2 && nums[0] >= nums[1]) {
    //     return 1
    // }
    for (let index=0; index< length-1; index++) {
        if (rightPrefixSum[index] >= leftPrefixSum[index+1]) {
            possibleSplits++
        }
    }

    return possibleSplits
};