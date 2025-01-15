/*
Try to verify that the closed-form solution and recursion algorithm will return the same result for S(50). 
Also, time the codes so that we know which one takes more time.

* Initial conditions for the sequence
* S1 = 4
* Sn = 2 * S(n-1) + 3
*/

console.time('TotalTime');

// Recursion solution
function recursion(n) {
    if (n === 1) {
        return 4;
    } else {
        return 2 * recursion(n - 1) + 3;
    }
}

// Closed-form solution
function closedForm(n) {
    return 4 + 7 * (1 - Math.pow(2, n - 1)) / (-1);
}

// Test a single value and store results
function testSequence(n) {
    // Measure time for recursion solution
    const recursionStartTime = performance.now();
    const recursionResult = recursion(n);
    const recursionEndTime = performance.now();
    const recursionTime = (recursionEndTime - recursionStartTime).toFixed(4);  // Convert to milliseconds

    // Measure time for closed-form solution
    const closedFormStartTime = performance.now();
    const closedFormResult = closedForm(n);
    const closedFormEndTime = performance.now();
    const closedFormTime = (closedFormEndTime - closedFormStartTime).toFixed(4);  // Convert to milliseconds

    return {
        n: n,
        recursionResult: recursionResult,
        recursionTime: recursionTime,
        closedFormResult: closedFormResult,
        closedFormTime: closedFormTime
    };
}

// Specific value to test
const SPECIFIC_VALUES = [50];

// Run tests and store results
const results = SPECIFIC_VALUES.map(testSequence);

// Output results
results.forEach(result => {
    console.log(`n=${result.n}`);
    console.log(`Recursion: result=${result.recursionResult}, time=${result.recursionTime} ms`);
    console.log(`Closed-form: result=${result.closedFormResult}, time=${result.closedFormTime} ms`);
    console.log();
});
