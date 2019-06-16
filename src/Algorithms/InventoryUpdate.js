// https://learn.freecodecamp.org/coding-interview-prep/algorithms/inventory-update

// Algorithms: Inventory Update
// Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery.
// Update the current existing inventory item quantities (in arr1). If an item cannot be found,
// add the new item and quantity into the inventory array.
// The returned inventory array should be in alphabetical order by item.

// The function updateInventory should return an array.
// updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])
// should return an array with a length of 6.

// updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])
// should return [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]].

// updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [])
// should return [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]].

// updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])
// should return [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]].

// updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]])
// should return [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]].

function Logger(number, result) {
    console.log(`#${number} : ${JSON.stringify(result)}`);
}

function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    const inventory       = {};
    const updateInventory = item => {
        const productCount = inventory[item[1]];
        if (productCount === undefined) {
            inventory[item[1]] = +item[0];
        } else {
            inventory[item[1]] += +item[0];
        }
    };
    arr1.forEach(updateInventory);
    arr2.forEach(updateInventory);
    return Object.keys(inventory).sort((a, b) => {
        return a < b ? -1 : 1;
    }).map(p => {
        return [inventory[p], p];
    });
}

Logger(1, updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]));
Logger(2, updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], []));
Logger(3, updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]));
Logger(4, updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]));