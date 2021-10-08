function removeDuplicates(arr) {
    const sorted = [...arr].sort((a, b) => a - b)
    const unique = []
    sorted.forEach((el, idx) => {
        if (sorted[idx-1] !== el) unique.push((el))
    })
    return unique
}

function distinctCombos(arr, length) {
    const unique = removeDuplicates(arr)
    const table = []
    table.push([])
    for (let i = 0; i < unique.length; i++) {
        table[0].push([[]])
    }

    for (let i = 1; i <= length; i++) {
        table.push([])
        for (let j = 0; j < unique.length; j++) {
            const el = unique[j]
            const combosWithout = table[i][j-1] || []
            const combosWith = table[i-1][j].map(arr => [el, ...arr])
            table[i].push([...combosWithout, ...combosWith])
        }
    }
    return table[length][unique.length-1]
}










console.log(distinctCombos([1,1,2], 2))
// $ [1, 1], [1, 2], [2, 2]

console.log(distinctCombos([1,2,3,4], 2))
// $ [1, 1], [1, 2], [1, 3], [1, 4], [2, 2], [2, 3], [2, 4], [3, 3], [3, 4], [4, 4]
