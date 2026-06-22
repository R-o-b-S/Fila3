const gameBoard = [
    "empty",      //0
    "empty",      //1
    "empty",      //2
    "empty",      //3
    "empty",      //4
    "empty",      //5
    "empty",      //6
    "empty",      //7
    "empty",      //8
];

// 0 1 2
// 3 4 5
// 6 7 8

const players = ["player1", "player2"];

let turn = 1
function activePlayer () { //cycle between players
    if (turn === 0) {
        turn = 1;
        console.log("player2 turn");
        return "player2";
    }
    else if (turn === 1) {
        turn = 0;
        console.log("player1 turn");
        return "player1";
    }
}

function plrInput () {
    return window.prompt("make a move:");
}


function playRound (player, box) {  //play a round for the active player
    if (player === players[0]) {
        gameBoard[box] = "X";
        }
    else if (player === players[1]) {
        gameBoard[box] = "O";
        }
}

function refreshBoard () { //for now just print the board on console
    console.log(gameBoard[0], gameBoard[1], gameBoard [2]);
    console.log(gameBoard[3], gameBoard[4], gameBoard [5]);
    console.log(gameBoard[6], gameBoard[7], gameBoard [8]);
}

function chkWin () {
    if (gameBoard[0] === "X" && gameBoard[1] === "X" && gameBoard [2] === "X" ||
        gameBoard[3] === "X" && gameBoard[4] === "X" && gameBoard [5] === "X" ||
        gameBoard[6] === "X" && gameBoard[7] === "X" && gameBoard [8] === "X" ||
        gameBoard[0] === "X" && gameBoard[4] === "X" && gameBoard [8] === "X" ||
        gameBoard[2] === "X" && gameBoard[4] === "X" && gameBoard [6] === "X" ||
        gameBoard[0] === "X" && gameBoard[3] === "X" && gameBoard [6] === "X" ||
        gameBoard[1] === "X" && gameBoard[4] === "X" && gameBoard [7] === "X" ||
        gameBoard[2] === "X" && gameBoard[5] === "X" && gameBoard [8] === "X") {
            console.log(players[0] + "WINS!");
        }
    else if (gameBoard[0] === "O" && gameBoard[1] === "O" && gameBoard [2] === "O" ||
        gameBoard[3] === "O" && gameBoard[4] === "O" && gameBoard [5] === "O" ||
        gameBoard[6] === "O" && gameBoard[7] === "O" && gameBoard [8] === "O" ||
        gameBoard[0] === "O" && gameBoard[4] === "O" && gameBoard [8] === "O" ||
        gameBoard[2] === "O" && gameBoard[4] === "O" && gameBoard [6] === "O" ||
        gameBoard[0] === "O" && gameBoard[3] === "O" && gameBoard [6] === "O" ||
        gameBoard[1] === "O" && gameBoard[4] === "O" && gameBoard [7] === "O" ||
        gameBoard[2] === "O" && gameBoard[5] === "O" && gameBoard [8] === "O") {
            console.log(players[1] + "WINS!");
        }
    else {
        round ();
    }
}

function round () {
    const player = activePlayer();
    const box = plrInput();
    playRound(player, box);
    refreshBoard();
    chkWin();
}

document.getElementById("play").onclick = round;