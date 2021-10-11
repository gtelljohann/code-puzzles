function isOdious(num) {
    if (num < 0) return false
    let odious = false
    while (num > 0) {
        if (num%2) {
            odious = !odious
        }
        num = Math.floor(num/2)
    }
    return odious
}


console.log(isOdious(14))
console.log(isOdious(5))
