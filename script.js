let boardArray = ["", "", "", "", "", "", "", "", ""];
let turns = 0;

let square = new Array();
let win = false;
let xOy = 0;
let empate = 0;

function createSquare() {
  const board = document.querySelector(".board");

  circulito = document.createElement("div");
  circulito2 = document.createElement("div");

  cruz = document.createElement("div");
  cruz2 = document.createElement("div");

  circulito.className = "circulito";
  circulito2.className = "circulito2";

  cruz.className = "cruz";
  cruz2.className = "cruz2";

  for (let i = 0; i < 9; i++) {
    //*Create all the squares and asing them as a childs of board
    square[i] = document.createElement("div");
    board.appendChild(square[i]);
  }

  for (let i = 3; i < 9; i++) {
    //*Reduce the top margin since the 4 square
    square[i].style.marginTop = "-5px";
  }

  for (let i = 0; i < 9; i++) {
    square[i].addEventListener("click", function () {
      if (boardArray[i] != "O" && boardArray[i] != "X") {
        if (turns % 2 == 0) {
          //square[i].appendChild(circulito);
          //circulito.appendChild(circulito2);
          this.style.backgroundColor = "red";
          boardArray.splice(i, 1, "O");

          turns++;
        } else {
          this.style.backgroundColor = "blue";
          // this.appendChild(cruz);
          // cruz.appendChild(cruz2);
          boardArray.splice(i, 1, "X");

          turns++;
        }
        checkWinner();
      }
    });
  }
  return square;
}

function checkWinner() {
  if (
    (boardArray[0] == "O" && boardArray[1] == "O" && boardArray[2] == "O") ||
    (boardArray[2] == "O" && boardArray[5] == "O" && boardArray[8] == "O") ||
    (boardArray[8] == "O" && boardArray[7] == "O" && boardArray[6] == "O") ||
    (boardArray[6] == "O" && boardArray[3] == "O" && boardArray[0] == "O") ||
    (boardArray[1] == "O" && boardArray[4] == "O" && boardArray[7] == "O") ||
    (boardArray[3] == "O" && boardArray[4] == "O" && boardArray[5] == "O") ||
    (boardArray[0] == "O" && boardArray[4] == "O" && boardArray[8] == "O") ||
    (boardArray[2] == "O" && boardArray[4] == "O" && boardArray[6] == "O")
  ) {
    console.log("O GANASTE");
    win = true;
    xOy = 1;
    finishedGameMessage();
  } else if (
    (boardArray[0] == "X" && boardArray[1] == "X" && boardArray[2] == "X") ||
    (boardArray[2] == "X" && boardArray[5] == "X" && boardArray[8] == "X") ||
    (boardArray[8] == "X" && boardArray[7] == "X" && boardArray[6] == "X") ||
    (boardArray[6] == "X" && boardArray[3] == "X" && boardArray[0] == "X") ||
    (boardArray[1] == "X" && boardArray[4] == "X" && boardArray[7] == "X") ||
    (boardArray[3] == "X" && boardArray[4] == "X" && boardArray[5] == "X") ||
    (boardArray[0] == "X" && boardArray[4] == "X" && boardArray[8] == "X") ||
    (boardArray[2] == "X" && boardArray[4] == "X" && boardArray[6] == "X")
  ) {
    console.log("X GANASTE");
    win = true;
    xOy = 2;
    finishedGameMessage();
  }

  if (!win) {
    for (let i = 0; i < 9; i++) {
      if (boardArray[i] == "O" || boardArray[i] == "X") {
        empate++;
        console.log(empate);
      }
    }
  }

  if (empate == 45) {
    console.log("empate");
    finishedGameMessage();
  }

  //*EL if para finalizar que sea si todas las casillas del array
  //*estan llenas
}

function finishedGameMessage() {
  let messageSection = document.querySelector(".messageSection");
  let message = document.createElement("h1");
  let button = document.createElement("button");
  messageSection.appendChild(message);
  messageSection.appendChild(button);

  if (xOy == 1) {
    message.textContent = "PLAYER 1 Win, do you want to play again?";
  } else if (xOy == 2) {
    message.textContent = "PLAYER 2 Win, do you want to play again?";
  } else if (xOy == 0) {
    message.textContent = "Draw, do you want to play again?";
  }
  button.style.display = "inline";
  button.textContent = "PRESS TO PLAY AGAIN";

  button.addEventListener("click", function () {
    boardArray = ["", "", "", "", "", "", "", "", ""];
    empate = 0;
    turns = 0;
    win = false;
    for (let i = 0; i < 9; i++) {
      square[i].style.backgroundColor = "white";
    }
    message.textContent = "";
    button.style.display = "none";
    xOy = 0;
  });
}

function logicBoard() {
  createSquare();
  checkWinner();
}

logicBoard();
