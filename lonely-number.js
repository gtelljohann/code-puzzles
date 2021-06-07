function lonelyNumber(...nums) {
    let product = 1
    for (let i = 0; i < 3; i++) {
        if (nums[0] !== nums[1] && nums[0] !== nums[2]) {
            product *= nums[0]
        }
        nums.push(nums.shift())
    }
    return product
}

console.log(lonelyNumber(1,2,3))
console.log(lonelyNumber(6,6,4))
console.log(lonelyNumber(7,7,7))
