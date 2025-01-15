'''
Try to verify that the closed-form solution and recursion algorithm will return the same result for S(50). 
Also, time the codes so that we know which one takes more time.

# Initial conditions for the sequence
# S1 = 4
# Sn = 2 * S(n-1) + 3
'''

import time

# Recursion solution
def recursion(n):
    if n == 1:
        return 4
    else:
        return 2 * recursion(n - 1) + 3

# Closed-form solution
def closedForm(n):
    return 4 + 7 * (1 - 2 ** (n - 1)) / (1 - 2)

# Test multiple values and store results
def test_sequence(n):
    # Measure time for recursion solution
    recursion_start_time = time.perf_counter()
    recursion_result = recursion(n)
    recursion_end_time = time.perf_counter()
    recursion_time = (recursion_end_time - recursion_start_time) * 1000  # Convert to milliseconds

    # Measure time for closed-form solution
    closed_form_start_time = time.perf_counter()
    closed_form_result = closedForm(n)
    closed_form_end_time = time.perf_counter()
    closed_form_time = (closed_form_end_time - closed_form_start_time) * 1000  # Convert to milliseconds

    # Return results in a dictionary
    return {
        'n': n,
        'recursion_result': recursion_result,
        'recursion_time': recursion_time,
        'closed_form_result': closed_form_result,
        'closed_form_time': closed_form_time
    }

# Specific value to test
SPECIFIC_VALUES = [50]

# Run tests and store results
results = [test_sequence(i) for i in SPECIFIC_VALUES]

# Output results all at once
for result in results:
    print(f"n={result['n']}")
    print(f"Recursion: result={result['recursion_result']:.0f}, time={result['recursion_time']:.4f} ms")
    print(f"Closed-form: result={result['closed_form_result']:.0f}, time={result['closed_form_time']:.4f} ms")
    print()
