// Recursive Algoritm
// Call a function inside the function itself
    
// Call Stack


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

console.log(recursiveSequence(3)); //25


// Part II
// Fibonacci Sequence
// 費氏數列第 n 項的值
function fab(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    } else {
        return fab(n - 1) + fab(n - 2);
    }
}

console.log(fab(10)); //55