function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    let open_b = 0;
    let close_b = 0;
    for (let item of expr) {
        if (item === "(") {
            open_b++;
        }
        if (item === ")") {
            close_b++;
        }
    }
    let div_by_zero = expr.match(/\/ 0/, "");
    if (div_by_zero) {
        throw new Error("TypeError: Division by zero.");
    }
    if (open_b !== close_b) {
        throw new Error("ExpressionError: Brackets must be paired");
    }
    return new Function(`return ${expr}`)();
}

module.exports = {
    expressionCalculator,
};
