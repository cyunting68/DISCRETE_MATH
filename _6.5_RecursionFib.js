// Recursive Algorithm: Call a function inside the function itself

// Part I
// A1 = 1
// An = 2 * A(n-1) + 7
function recursiveSequence(n) {
    if (n === 1) {
        return 1;
    } else {
        return 2 * recursiveSequence(n - 1) + 7;
    }
}

// Part II
// Fibonacci Sequence
function fibonacci(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Test cases
console.log(recursiveSequence(3)); // Output: 25
console.log(fibonacci(10)); // Output: 55
