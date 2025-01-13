/*
Hanoi Tower

* Initial State:
Disks are stacked on the Source rod from largest (bottom) to smallest (top).

* Final State:
Disks are moved to the Target rod, maintaining the same order.

* Constraints:
1. Move one disk at a time.
2. Place the disk on top of another stack or an empty rod.
3. Do not place a larger disk on top of a smaller one.
*/

const readline = require('readline');

// Solve the Hanoi Tower problem.
function hanoi(numDisks, source, auxiliary, target) {
    if (numDisks === 1) {
        // Move 1 disk from source to target
        target.push(source.pop());
    } else {
        // Move n-1 disks from source to auxiliary
        hanoi(numDisks - 1, source, target, auxiliary);
        // Move 1 disk from source to target
        target.push(source.pop());
        // Move n-1 disks from auxiliary to target
        hanoi(numDisks - 1, auxiliary, source, target);
    }
}

// Print the current state of the rods.
function printRods(source, auxiliary, target) {
    console.log("Source Rod:", source);
    console.log("Auxiliary Rod:", auxiliary);
    console.log("Target Rod:", target);
    console.log("-".repeat(30));
}

// Get the number of disks from the user.
function getNumDisks() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        rl.question("Enter the number of disks: ", (answer) => {
            const numDisks = parseInt(answer, 10);
            if (numDisks > 0 && numDisks <= 20) {
                rl.close();
                resolve(numDisks);
            } else {
                console.log("Please enter a positive integer.");
                rl.close();
                resolve(getNumDisks());
            }
        });
    });
}

// Initialize the rods with disks.
function initializeRods(numDisks) {
    let sourceRod = Array.from({ length: numDisks }, (v, i) => numDisks - i);  // array from numDisks to 1
    let auxiliaryRod = [];
    let targetRod = [];
    return { sourceRod, auxiliaryRod, targetRod };
}

// Main function to run the Hanoi Tower solution
async function main() {
    // Get the number of disks
    let numDisks = await getNumDisks();

    // Initialize the rods
    let rods = initializeRods(numDisks);

    // Print initial state of the rods
    console.log("Initial state:");
    printRods(rods.sourceRod, rods.auxiliaryRod, rods.targetRod);

    // Solve the Hanoi Tower problem
    hanoi(numDisks, rods.sourceRod, rods.auxiliaryRod, rods.targetRod);

    // Print final state of the rods
    console.log("Final state:");
    printRods(rods.sourceRod, rods.auxiliaryRod, rods.targetRod);
}

main();
