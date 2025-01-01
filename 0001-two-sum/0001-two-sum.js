/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const indexMap = new Map()

    // traverse array and see target-num[index] in set
    let currentIndex = 0
    for (currentIndex=0; currentIndex < nums.length; currentIndex++) {
        const difference = target- nums[currentIndex]

        if (indexMap.has(difference)) {
            return [currentIndex, indexMap.get(difference)]
        }

        // set the index against num
        indexMap.set(nums[currentIndex], currentIndex)

        console.log(indexMap)
    }

    // invalid response
    return [-1, -1]
};