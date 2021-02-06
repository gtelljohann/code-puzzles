function stockQueue (arr) {
    let reversed = arr.slice(0).reverse()
    const stockSymbols = new Set()
    return reversed.filter(priceObj => {
        if (stockSymbols.has(priceObj.sym)) return false
        stockSymbols.add(priceObj.sym)
        return true
    }).reverse()
}

const snapshot = [
    { sym: 'GME', cost: 280 },
    { sym: 'PYPL', cost: 234 },
    { sym: 'AMZN', cost: 3206 },
    { sym: 'AMZN', cost: 3213 },
    { sym: 'GME', cost: 325 }
  ]

console.log(stockQueue(snapshot))