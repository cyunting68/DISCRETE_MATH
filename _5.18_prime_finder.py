'''
    Suppose we have a list of prime numbers. The first 6 numbers on the list are 2, 3, 5, 7, 11, and 13.
    Write a function that takes a positive integer as input and returns the n-th value in the prime number list.
'''

def nth_prime(number):
    primes = [2, 3, 5, 7, 11, 13]    
    candidate = 17  

    while len(primes) < number:
        prime_check = True
        for prime in primes:
            if prime > candidate ** 0.5:
                break
            if candidate % prime == 0:
                prime_check = False
                break  
        if prime_check:
            primes.append(candidate)
        candidate += 2  # Check the next odd number
    return primes[number - 1]

# Test cases
print(nth_prime(10))   # 29
print(nth_prime(20))   # 71
print(nth_prime(30))   # 113
print(nth_prime(100))  # 541
