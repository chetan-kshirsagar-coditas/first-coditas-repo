class RatRace {
    constructor(grid) {
        this.grid = grid;
        this.currRow = 0;
        this.currCol = 0;
        this.rowBound = grid.length;
        this.colBound = grid[0].length;

        this.movements = {
            left : this.currCol,
            right : this.currCol,
            up : this.currRow,
            down : this.currRow,
        }
        
    }
    //main function
    move(direction) {
        if(direction === "down" || direction === "right"){
            if( this.movements[direction] + 1 < this.grid.length){
                this.movements[direction] = (direction === "down") ?  this.currRow += 1 : this.currCol += 1;
            }
        }else if(direction === "left" || direction === "up"){
            if( this.movements[direction] - 1 >= 0){
                this.movements[direction] = (direction === "up") ? this.currRow -= 1 : this.currCol -= 1;
            }
        }
       
        this.grid[this.currRow][this.currCol] = "*";
        console.log(this.grid);
    }

}

const grid = [
    ["*", 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 1, 1, 0, 1],
]
const newGame = new RatRace(grid);
// newGame.move("right");
// newGame.move("right");
newGame.move("down");

