const grid = [
    ["*", 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 1, 1, 0, 1]
]

const finalDestination = grid => {
    const rowBound = grid.length - 1;
    const colBound = grid[0].length - 1;

    let currRow = 0;
    let currCol = 0;

    while (currRow !== rowBound || currCol !== colBound) {
        //user moves to right
        if ((currCol + 1) <= colBound) {
            if (grid[currRow][currCol + 1] === 1) {
                currCol++;
                grid[currRow][currCol] = "*";
            }
        }

        //user moves to down
        if ((currRow + 1) <= rowBound) {
            if (grid[currRow + 1][currCol] === 1) {
                currRow++;
                grid[currRow][currCol] = "*";
            }
        }

        //user moves to left
        if ((currCol - 1) >= 0) {
            if (grid[currRow][currCol - 1] === 1) {
                currRow--;
                grid[currRow][currCol] = "*";
            }
        }

        //user moves to up
        if ((currRow - 1) >= 0) {
            if (grid[currRow - 1][currCol] === 1) {
                currRow--;
                grid[currRow][currCol] = "*";
            }
        }
        console.log(grid);
    }
    console.log("WON!!");
    

}


finalDestination(grid);


   



