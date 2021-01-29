function rotate90(matrix) {
    const n = matrix.length
    for (let i = 0; i < Math.ceil(n/2); i++) {
        for (let j = 0; j < Math.floor(n/2); j++) {
            let x = i
            let y = j
            let temp = matrix[x][y]
            for (let k = 0; k < 4; k++) {
                ;[x, y] = [y, n-1-x]
                ;[temp, matrix[x][y]] = [matrix[x][y], temp]
            }
        }
    }
    return matrix
}

console.log(rotate90([[1, 2], [3, 4]]))
console.log(rotate90([[1,2,3],[4,5,6],[7,8,9]]))
console.log(rotate90([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]))