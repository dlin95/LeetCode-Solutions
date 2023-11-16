function twoSum(nums: number[], target: number): number[] {
    const numberMap = new Map()
    for (let i = 0; i < nums.length; i++) {
        const number = nums[i]
        const difference = target - number
        if (numberMap.has(difference)) return [numberMap.get(difference), i]
        numberMap.set(number, i)
    }
};
