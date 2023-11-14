function containsDuplicate(nums: number[]): boolean {
    let set = new Set();
    for (let x of nums) {
        if (set.has(x)) return true;
        set.add(x)
    }
    return false;
};
