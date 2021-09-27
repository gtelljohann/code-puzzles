const operators = {
    '&': (left, right) => ({
        T: left.T * right.T,
        F: left.T * right.F + left.F * right.T + left.F * right.F,
    }),
    '|': (left, right) => ({
        T: left.T * right.F + left.F * right.T + left.T * right.T,
        F: left.F * right.F,
    }),
    '^': (left, right) => ({
        T: left.T * right.F + left.F * right.T,
        F: left.T * right.T + left.F * right.F,
    })
}

function checkIfTrue(expression) {
    let expr = expression.replace(/T/g, true).replace(/F/g, false)
    return !!eval(expr)
}

function merge(op, left, right) {
    return operators[op](left, right)
}

function buildBooleanObject(expression) {
    if (expression.length <=3) {
        let isTrue = checkIfTrue(expression)
        return {
            T: isTrue ? 1 : 0,
            F: isTrue ? 0 : 1
        }
    }
    let obj = { T: 0, F: 0 }
    for (let i = 1; i < expression.length; i+=2) {
        let left = buildBooleanObject(expression.slice(0, i))
        let right = buildBooleanObject(expression.slice(i + 1))
        let merged = merge(expression[i], left, right)
        obj.T += merged.T
        obj.F += merged.F
    }
    return obj
}

function evaluateExp(expression) {
    return buildBooleanObject(expression).T
}


console.log(checkIfTrue('T|T'))
console.log(checkIfTrue('T^F'))
console.log(checkIfTrue('T&F'))
console.log(evaluateExp('T|T&F^T'))
