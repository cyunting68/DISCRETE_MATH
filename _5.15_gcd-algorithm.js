// Calculate Greatest Common Divisor (GCD) 
// using the Euclidean algorithm

function gcd(a, b) {
    while (b != 0) {
        let r = a % b;
        a = b;
        b = r;
    }
    console.log(a);
    return a;
}

// Test cases
gcd(420, 66);  // 6
gcd(101, 43);  // 1
