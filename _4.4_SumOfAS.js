// for loop
function addLoop(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// recursion
function addRecursion(n) {
    return n === 0 ? 0 : n + addRecursion(n - 1);
}

// formula
function addFormula(n) {
    return ((1 + n) * n) / 2;
}

// Test cases
console.log(addLoop(10));  // 55
console.log(addLoop(100)); // 5050
console.log(addRecursion(10));  // 55
console.log(addRecursion(100)); // 5050
console.log(addFormula(10));  // 55
console.log(addFormula(100)); // 5050
