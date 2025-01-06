"""
    # Recursive Algoritm
    Call a function inside the function itself
    
    # Call Stack
"""

# Part I
# A1 = 1
# An = 2 * A(n-1) + 7
def recursiveSequence(n):
     
    if n == 1:
        return 1
    else:        
        return 2 * recursiveSequence(n-1) + 7 
    
print(recursiveSequence(3)) # 25


# Part II 
# Fibonacci Sequence
# 費氏數列第n項的值
def fab(n):
    if n == 0:
        return 0
    if n == 1:
        return 1
    else:
        return fab(n-1) + fab(n-2)  
    
print(fab(10)) # 55 