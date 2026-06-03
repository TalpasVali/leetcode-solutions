/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let sortArr = [...nums].sort((a, b) => a - b);
    let map = new Map()
    let newArr = []

    for(let i = 0; i < sortArr.length; i++) {
        if(!map.has(sortArr[i])) map.set(sortArr[i], i)
    }

    for(let j = 0; j<nums.length; j++) {
        newArr.push(map.get(nums[j]))
    }

    return newArr;
};