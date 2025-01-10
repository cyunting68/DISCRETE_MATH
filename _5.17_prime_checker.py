"""
    Write a function that takes a positive integer as input and returns a Boolean value indicating whether the input is a prime number.
"""

def is_prime(n):
    if n <= 1:
        return False

    candidate = 2
    while candidate <= n ** 0.5:
        if n % candidate == 0:
            return False
        candidate += 1
    return True

# Test cases
print(is_prime(1))   # False
print(is_prime(91))  # False
print(is_prime(101)) # True
