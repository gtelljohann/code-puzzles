function padStar(n) {
    let str = ''
    for (let i = 0; i < n; i++) {
        str += ' '
    }
    return str + '*\n'
}

function printArrow(dir, n) {
    let result = ''
    for (let i = 0; i < 2*n - 1; i++) {
        const pad = {
            right: n - 1 - Math.abs(i - Math.floor((n+1)/2)),
            left: Math.abs(i - n + 1)
        }
        result += padStar(pad[dir])
    }

    return result
}



console.log(printArrow('right', 3))
console.log(printArrow('left', 5))