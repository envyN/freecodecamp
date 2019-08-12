// Problem statement:
// Given an m(rows) x n(columns) grid of 1's and 0's
// where 1's represent areas where you can go over
// and 0,s represent obstacles which you cant go over,
// starting from the top-left corner, which would always be a 1,
// find the minimum distance needed to be travelled
// to reach a destination point marked by 9 in the grid.
// Starting from the top-left corner, you can move only either horizontally or vertically,
// i.e. you can only go above/below/left/right.
// Return -1 if the destination cannot be reached
// Ex 1: in a given grid:
// [
//     [1, 1, 0, 1, 0],
//     [1, 1, 0, 1, 0],
//     [1, 1, 0, 9, 0],
//     [0, 1, 1, 1, 0],
//     [1, 1, 0, 1, 0]
// ];
// minimum distance travelled would be 7
// Ex 2: in a given grid
// [
//     [1, 1, 1, 1, 0],
//     [1, 1, 0, 1, 0],
//     [1, 1, 0, 9, 0],
//     [0, 1, 1, 1, 0],
//     [1, 1, 0, 1, 0]
// ];
// minimum distance travelled would be 5
//
function distanceCalculator(grid) {
    const rows = grid.length;
    if (rows) {
        const cols = grid[0].length;
        if (cols) {
            const getKey         = (i, j) => `${i},${j}`;
            const processedNodes = {};
            let distance         = 0;
            const queue          = [{
                key: getKey(0, 0),
                distance: distance
            }];
            while (queue.length) {
                const popNode               = queue.shift();
                const [i, j]                = popNode.key.split(',').map(a => +a);
                const neighbourNodeDistance = popNode.distance + 1;
                if (!processedNodes[popNode.key]) {
                    if (grid[i][j] === 9) {
                        return popNode.distance;
                    }
                    // add neighbour nodes to queue if they are non-0;
                    if ((i > 0) && grid[i - 1][j]) {
                        queue.push({key: getKey(i - 1, j), distance: neighbourNodeDistance});
                    }
                    if ((i < rows - 1) && grid[i + 1][j]) {
                        queue.push({key: getKey(i + 1, j), distance: neighbourNodeDistance});
                    }
                    if ((j > 0) && grid[i][j - 1]) {
                        queue.push({key: getKey(i, j - 1), distance: neighbourNodeDistance});
                    }
                    if ((j < cols - 1) && grid[i][j + 1]) {
                        queue.push({key: getKey(i, j + 1), distance: neighbourNodeDistance});
                    }
                    processedNodes[popNode.key] = true;
                }
            }
        }
    }
    return -1;
}

// testcases

function tester() {
    const testCases = [
        {
            grid: [
                [1, 1, 0, 1, 0],
                [1, 1, 0, 1, 0],
                [1, 1, 0, 9, 0],
                [0, 1, 1, 1, 0],
                [1, 1, 0, 1, 0]
            ],
            result: 7
        },
        {
            grid: [
                [1, 1, 1, 1, 0],
                [1, 1, 0, 1, 0],
                [1, 1, 0, 9, 0],
                [0, 1, 1, 1, 0],
                [1, 1, 0, 1, 0]
            ],
            result: 5
        },
        {
            grid: [
                [1, 1, 1],
                [0, 1, 0],
                [1, 0, 0],
                [0, 9, 1],
                [1, 1, 0]
            ],
            result: -1
        },
        {
            grid: [
                [1, 1, 0, 1, 1, 1],
                [0, 1, 0, 1, 0, 1],
                [1, 1, 0, 1, 0, 1],
                [0, 1, 1, 1, 0, 1],
                [1, 1, 0, 1, 0, 9]
            ],
            result: 15
        },
        {
            grid: [
                [1, 1, 0, 1, 1, 1, 1, 1],
                [0, 1, 0, 1, 0, 0, 0, 1],
                [1, 1, 0, 1, 0, 0, 0, 1],
                [0, 1, 1, 1, 0, 9, 0, 1],
                [1, 1, 0, 1, 0, 1, 0, 1],
                [1, 1, 0, 1, 0, 1, 1, 1]
            ],
            result: 22
        },
        {
            grid: [
                [1, 1, 0, 1, 1, 1, 1, 1],
                [0, 1, 0, 1, 0, 0, 0, 1],
                [1, 1, 0, 1, 0, 9, 0, 1],
                [0, 1, 1, 1, 0, 0, 0, 1],
                [1, 1, 0, 1, 0, 1, 0, 1],
                [1, 1, 0, 1, 0, 1, 1, 1]
            ],
            result: -1
        },
        {
            grid: [
                [1, 1, 0, 1, 1, 1, 1, 1],
                [0, 1, 0, 1, 0, 0, 0, 1],
                [1, 1, 0, 1, 0, 9, 0, 1],
                [0, 1, 1, 1, 0, 0, 0, 1],
                [1, 1, 0, 1, 0, 1, 0, 1],
                [1, 1, 1, 1, 0, 1, 1, 1]
            ],
            result: -1
        },
        {
            grid: [
                [1, 1, 0, 1, 1, 1, 1, 1],
                [0, 1, 0, 1, 0, 0, 0, 1],
                [1, 1, 0, 1, 0, 9, 0, 1],
                [0, 1, 1, 1, 0, 0, 0, 1],
                [1, 1, 0, 1, 0, 1, 0, 1],
                [1, 1, 1, 1, 0, 1, 1, 1],
                [0, 0, 0, 1, 0, 1, 0, 1]
            ],
            result: -1
        },
        {
            grid: [
                [1, 1, 0, 1, 1, 1, 0, 0, 0, 1],
                [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
                [1, 1, 0, 1, 0, 1, 0, 1, 1, 1],
                [0, 1, 1, 1, 0, 1, 0, 9, 0, 1],
                [1, 1, 0, 1, 0, 1, 0, 0, 0, 1],
                [1, 1, 1, 0, 0, 1, 1, 1, 1, 1],
                [0, 0, 0, 1, 0, 1, 0, 0, 0, 1]
            ],
            result: 26
        }
    ];
    testCases.forEach((tfc, index) => {
        const testR = distanceCalculator(tfc.grid);
        console.log(`Test case ${index + 1} : ${testR === tfc.result ? 'Passed' : 'Failed'}`);
        console.log(`Expected result ${tfc.result}`);
        console.log(`Actual result ${testR}`);
        console.log(`-------------------------------`);
        console.log(``);
    });
}

tester();
