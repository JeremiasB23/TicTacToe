const boardArray = ["0", "0", "0", "0", "0", "0", "0", "0", "0"];
let turns = 0;

function createSquare() {
  const board = document.querySelector(".board");

  let square = new Array();

  for (let i = 0; i < 9; i++) {
    //*Create all the squares and asing them as a childs of board
    square[i] = document.createElement("div");
    board.appendChild(square[i]);
  }

  for (let i = 3; i < 9; i++) {
    //*Reduce the top margin since the 4 square
    square[i].style.marginTop = "-5px";
  }

  for (elem of square) {
    elem.addEventListener("click", function () {
      if (turns % 2 == 0) {
        this.style.backgroundColor = "red";
        boardArray.splice(elem.value, elem.value, "O"); //!I have to check how to add the 0 to the specific square in the array
      } else {
        this.style.backgroundColor = "blue";
        boardArray.splice(elem.value, elem.value, "X");
      }

      turns++;
      console.log(boardArray);
    });
  }
}

function logicBoard() {
  createSquare();
}

logicBoard();
