# Calculate Greatest Common Divisor (GCD)
# using the Euclidean algorithm

def gcd(a, b):
    while b != 0:
        r = a % b
        a = b
        b = r
    print(a)
    return a

# Test cases
gcd(420, 66)  # 6
gcd(101, 43)  # 1
