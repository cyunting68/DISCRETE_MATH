# for loop
def add_loop(n):
    sum = 0
    for i in range(1, n+1):
       sum = sum + i
    return sum

# recursion
def add_recursion(n):
    if n == 0:
        return 0
    else:
        return n + add_recursion(n-1)
    
# formula
def add_formula(n):
    return ((1 + n) * n) / 2

# Test cases
print(add_loop(10))  #55
print(add_loop(100)) #5050
print(add_recursion(10))  #55
print(add_recursion(100)) #5050
print(add_formula(10))  #55
print(add_formula(100)) #5050
