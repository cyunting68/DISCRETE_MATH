'''
Hanoi Tower

# Initial State:
Disks are stacked on the Source rod from largest (bottom) to smallest (top).

# Final State:
Disks are moved to the Target rod, maintaining the same order.

# Constraints:
1. Move one disk at a time.
2. Place the disk on top of another stack or an empty rod.
3. Do not place a larger disk on top of a smaller one.
'''

# Solve the Hanoi Tower problem.
def hanoi(num_disks, source, auxiliary, target):
    if num_disks == 1:
        # Move 1 disk from source to target
        target.append(source.pop())
    else:
        # Move n-1 disks from source to auxiliary
        hanoi(num_disks - 1, source, target, auxiliary)
        # Move 1 disk from source to target
        target.append(source.pop())
        # Move n-1 disks from auxiliary to target
        hanoi(num_disks - 1, auxiliary, source, target)

# Print the current state of the rods.
def print_rods(source, auxiliary, target):
    print("Source Rod:", source)
    print("Auxiliary Rod:", auxiliary)
    print("Target Rod:", target)
    print("-" * 30)

# Get the number of disks from the user.
def get_num_disks():
    while True:
        try:
            num_disks = int(input("Enter the number of disks: "))
            if num_disks > 0:
                return num_disks
            else:
                print("Please enter a positive integer.")
        except ValueError:
            print("Invalid input. Please enter an integer.")

# Initialize the rods with disks.
def initialize_rods(num_disks):
    source_rod = list(range(num_disks, 0, -1))  # list from num_disks to 1
    auxiliary_rod = []
    target_rod = []
    return source_rod, auxiliary_rod, target_rod

# Get the number of disks
num_disks = get_num_disks()

# Initialize the rods
source_rod, auxiliary_rod, target_rod = initialize_rods(num_disks)

# Print initial state of the rods
print("Initial state:")
print_rods(source_rod, auxiliary_rod, target_rod)

# Solve the Hanoi Tower problem
hanoi(num_disks, source_rod, auxiliary_rod, target_rod)

# Print final state of the rods
print("Final state:")
print_rods(source_rod, auxiliary_rod, target_rod)
