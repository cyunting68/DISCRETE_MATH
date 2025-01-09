// Recursive Algoritm : Call a function inside the function itself
   
// Part I: Recursive Sequence
// A1 = 1
// An = 2 * A(n-1) + 7
function recursiveSequence(n) {
    if (n === 1) {
        return 1;
    } else {
        return 2 * recursiveSequence(n - 1) + 7;
    }
}

// Part II: Fibonacci Sequence
// F0 = 0
// F1 = 1
// Fn = Fn-1 + Fn-2
function fibonacci(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Test cases
console.log(recursiveSequence(3)); // 25
console.log(fibonacci(10)); // 55
