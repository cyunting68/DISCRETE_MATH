"""
    # Recursive Algoritm
    Call a function inside the function itself
    
    # Call Stack
"""

# Part I: Recursive Sequence
# A1 = 1
# An = 2 * A(n-1) + 7
def recursive_sequence(n):
     
    if n == 1:
        return 1
    else:        
        return 2 * recursive_sequence(n-1) + 7 
    
#Part II: Fibonacci Sequence
# 𝐹0 = 0
# 𝐹1 = 1
# 𝐹𝑛 = 𝐹𝑛−1 + 𝐹𝑛−2
def fibonacci(n):
    if n == 0:
        return 0
    if n == 1:
        return 1
    else:
        return fibonacci(n-1) + fibonacci(n-2)  
    
# Test cases
print(recursive_sequence(3)) # 25
print(fibonacci(10)) # 55 