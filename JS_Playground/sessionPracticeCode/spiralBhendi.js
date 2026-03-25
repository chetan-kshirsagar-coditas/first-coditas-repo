const filler = (matrix, size) => {
  for (let index = 0; index < size; index++) {
    let temp = [];
    for (let jindex = 0; jindex < size; jindex++) {
      temp[jindex] = 0;
    }
    matrix.push(temp);
  }
}
const spiralMatrix = number => {
  const matrix = [];
  filler(matrix, number);
  // console.log(matrix);

  let row = 0;
  let rBound = number - 1;
  let col = 0;
  let cBound = number - 1;
  let element = 1;

  while (col <= cBound && row <= rBound) {
    //top - done
    for (let k = col; k <= cBound; k++) {
      matrix[row][k] = element++;
    }
    row++;

    //right - done
    for (let k = row; k <= rBound; k++) {
      matrix[k][cBound] = element++;
    }
    cBound--;


    //bottom
    for (let k = cBound; k >= col; k--) {
      matrix[rBound][k] = element++;
    }
    rBound--;

    //left
    for (let k = rBound; k >= row; k--) {
      matrix[k][col] = element++;
    }
    col++;
  }



  console.table(matrix);

}
// spiralMatrix(6);

//ye yooo one loooooop

const spiralMatrixWithOneLoop = number => {
  let currRow = 0;
  let currCol = 0;
  let counter = 1;
  let temp = 1; //to reset tracker to correct value;
  let tracker = number - temp;
  let limit = 2;
  let result = ""
  while (counter <= (number * number)) {

    if (counter <= number) { //for first time top row 1 --- number
      result += "" + counter;
      if (counter === number) {
        result += " ";
        currRow++;
      };
      counter++;
      continue;
    }
    if (limit === 0) {
      limit = 2;
      tracker = number - ++temp;
    } else {
      if (tracker !== 0) {
        result += "" + counter;

        //for 2D matrix



        counter++;
        tracker--;
      } else {
        result += "\t";
        limit -= 1;
        tracker = number - temp;
      }
    }

    // counter++;
  }
  console.log(result);
  // console.log(matrix)
}
// const spiralMatrixWithOneLoopInMatrix = number => {
//   const matrix = [];
//   for (let i = 0; i < number; i++) {
//     matrix.push(Array(number).fill(0));
//   }
//   let currRow = 0;
//   let currCol = 0;
//   let counter = 1;
//   let temp = 1; //to reset tracker to correct value;
//   let tracker = number - temp;
//   let limit = 2;
//   let result = ""
//   while (counter <= (number * number)) {

//     if (counter <= number) { //for first time top row 1 --- number
//       result += "" + counter;
//       matrix[currRow][currCol] = counter;
//       currCol++;
//       if (counter === number) {
//         result += " ";
//         currCol -= 1;
//       };
//       counter++;
//       continue;
//     }
//     if (limit === 0) {
//       limit = 2;
//       tracker = number - ++temp;
//     } else {
//       if (tracker !== 0) {
//         result += "" + counter;

//         //for 2D matrix
//         // currRow++;
//         // matrix[currRow++][currCol] = counter;



//         counter++;
//         tracker--;
//       } else {
//         result += "\t";
//         limit -= 1;
//         tracker = number - temp;
//         currRow -= 1;
//       }
//     }

//     // counter++;
//   }
//   console.log(matrix);
//   // console.log(matrix)
// }

const spiralMatrixWithOneLoopInMatrix = (n) => {
  const matrix = Array.from({ length: n }, () => Array(n).fill(0));

  let row = 0, col = 0;
  let rowMin = 0, rowMax = n - 1;
  let colMin = 0, colMax = n - 1;
  let dir = 'right';

  for (let counter = 1; counter <= n * n; counter++) {
    matrix[row][col] = counter;

    if (dir === 'right') {
      if (col < colMax) {
        col++;
      } else {
        dir = 'down';
        row++;
        rowMin++;
      }
    } else if (dir === 'down') {
      if (row < rowMax) {
        row++;
      } else {
        dir = 'left';
        col--;
        colMax--;
      }
    } else if (dir === 'left') {
      if (col > colMin) {
        col--;
      } else {
        dir = 'up';
        row--;
        rowMax--;
      }
    } else if (dir === 'up') {
      if (row > rowMin) {
        row--;
      } else {
        dir = 'right';
        col++;
        colMin++;
      }
    }
  }

  console.table(matrix);
  return matrix;
};

// spiralMatrix(4);

// spiralMatrix(6);
// spiralMatrixWithOneLoop(6);
spiralMatrixWithOneLoopInMatrix(5);



