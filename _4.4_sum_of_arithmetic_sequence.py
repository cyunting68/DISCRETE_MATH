# for loop
def arithmetic_series_loop(a, d, n):
    sum = 0
    for i in range(n):
        sum += a + i * d
    return sum

# recursion
def arithmetic_series_recursion(a, d, n):
    if n == 0:
        return 0
    else:
        return a + (n - 1) * d + arithmetic_series_recursion(a, d, n - 1)

# formula
def arithmetic_series_formula(a, d, n):
    return (n * (2 * a + (n - 1) * d)) / 2

# Test cases
# a:首項, d:公差, n:項數
print(arithmetic_series_loop(1, 1, 10))  # 55
print(arithmetic_series_loop(1, 1, 100)) # 5050
print(arithmetic_series_recursion(1, 1, 10))  # 55
print(arithmetic_series_recursion(1, 1, 100)) # 5050
print(arithmetic_series_formula(1, 1, 10))  # 55
print(arithmetic_series_formula(1, 1, 100)) # 5050
