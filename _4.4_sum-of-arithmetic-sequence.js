// for loop
function arithmeticSeriesLoop(a, d, n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += a + i * d;
    }
    return sum;
}

// recursion
function arithmeticSeriesRecursion(a, d, n) {
    if (n === 0) {
        return 0;
    } else {
        return a + (n - 1) * d + arithmeticSeriesRecursion(a, d, n - 1);
    }
}

// formula
function arithmeticSeriesFormula(a, d, n) {
    return (n * (2 * a + (n - 1) * d)) / 2;
}

// Test cases
// a:首項, d:公差, n:項數
console.log(arithmeticSeriesLoop(1, 1, 10));  // 55
console.log(arithmeticSeriesLoop(1, 1, 100)); // 5050
console.log(arithmeticSeriesRecursion(1, 1, 10));  // 55
console.log(arithmeticSeriesRecursion(1, 1, 100)); // 5050
console.log(arithmeticSeriesFormula(1, 1, 10));  // 55
console.log(arithmeticSeriesFormula(1, 1, 100)); // 5050
