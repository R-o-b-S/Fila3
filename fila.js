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

function createPlayers (i) {
    const name = "player "+i;
    let score = 0;
    return {name, score};
}

const players = [createPlayers(1),createPlayers(2),];

let turn = Math.floor(Math.random() * 2);
function activePlayer () { //cycle turns between players 
    if (turn === 0) {
        turn = 1;
        updateActivePlr(turn);
        return players[0].name;
    }
    else if (turn === 1) {
        turn = 0;
        updateActivePlr(turn);
        return players[1].name;
    }
}

function updateActivePlr(t) { //update the displayed active player
    const element = document.getElementById("acti");
    element.remove();
    const p = document.createElement("p");
    p.id = "acti";
    const txt = "It's " + players[t].name + " turn!";
    p.textContent = txt;
    document.getElementById("activePlr").appendChild(p);
}


function playRound (player, box) {  //play a round for the active player
    if (player === players[0].name) {
        gameBoard[box] = "X";
        }
    else if (player === players[1].name) {
        gameBoard[box] = "O";
        }
}

function chkWin () { //check if the game is won by one of the players
    if (gameBoard[0] === "X" && gameBoard[1] === "X" && gameBoard [2] === "X" ||
        gameBoard[3] === "X" && gameBoard[4] === "X" && gameBoard [5] === "X" ||
        gameBoard[6] === "X" && gameBoard[7] === "X" && gameBoard [8] === "X" ||
        gameBoard[0] === "X" && gameBoard[4] === "X" && gameBoard [8] === "X" ||
        gameBoard[2] === "X" && gameBoard[4] === "X" && gameBoard [6] === "X" ||
        gameBoard[0] === "X" && gameBoard[3] === "X" && gameBoard [6] === "X" ||
        gameBoard[1] === "X" && gameBoard[4] === "X" && gameBoard [7] === "X" ||
        gameBoard[2] === "X" && gameBoard[5] === "X" && gameBoard [8] === "X") {
            window.alert(players[0].name + " wins!");
            //the following prevents player to keep the game after someone won
            for (i=0; i<9; i++) {  
                if (gameBoard[i] === "empty") {
                    gameBoard[i] = "gameover";
                }
            }
            clearBoard();
            displayBoard();
            //the following changes the active player with the winner
            const element = document.getElementById("acti");
            element.remove();
            const p = document.createElement("p");
            p.id = "acti";
            const txt = players[0].name + " won!";
            p.textContent = txt;
            document.getElementById("activePlr").appendChild(p);
            //the following increases the winner score
            scoreRefresh (0);
        }
    else if (gameBoard[0] === "O" && gameBoard[1] === "O" && gameBoard [2] === "O" ||
        gameBoard[3] === "O" && gameBoard[4] === "O" && gameBoard [5] === "O" ||
        gameBoard[6] === "O" && gameBoard[7] === "O" && gameBoard [8] === "O" ||
        gameBoard[0] === "O" && gameBoard[4] === "O" && gameBoard [8] === "O" ||
        gameBoard[2] === "O" && gameBoard[4] === "O" && gameBoard [6] === "O" ||
        gameBoard[0] === "O" && gameBoard[3] === "O" && gameBoard [6] === "O" ||
        gameBoard[1] === "O" && gameBoard[4] === "O" && gameBoard [7] === "O" ||
        gameBoard[2] === "O" && gameBoard[5] === "O" && gameBoard [8] === "O") {
            window.alert(players[1].name + " wins!");
            // the following prevents player to keep the game after someone won
            for (i=0; i<9; i++) { 
                if (gameBoard[i] === "empty") {
                    gameBoard[i] = "gameover";
                }
            }
            clearBoard();
            displayBoard();
            //the following changes the active player with the winner
            const element = document.getElementById("acti");
            element.remove();
            const p = document.createElement("p");
            p.id = "acti";
            const txt = players[0].name + " won!";
            p.textContent = txt;
            document.getElementById("activePlr").appendChild(p);
            //the following increases the winner score
            scoreRefresh (1);
        }
}

function displayBoard () { //renders the board on the web page
    for (i=0; i<9; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList = "box";
        newDiv.id = "box"+i;
        if (gameBoard[i] === "X" || gameBoard[i] === "O"){
            let txt = gameBoard[i];
            newDiv.textContent = txt;
        }
        else if (gameBoard[i] === "empty"){
            newDiv.addEventListener("click", () => round(newDiv.id));
        }
        document.getElementById("board").appendChild(newDiv);
    }
}

function clearBoard () { //clear the board for a new game
    for (i=0; i<9; i++) {
        const element = document.getElementById("box"+i);
        element.remove();
        }
    }

function round (a) { //plays a round
    const player = activePlayer();
    const box = a.substr(3,1);
    playRound(player, box);
    clearBoard();
    displayBoard();
    chkWin();
}

function newGame () { //starts a new game
    for (i=0; i<9; i++) {  
        gameBoard[i] = "empty";
    }
    clearBoard();
    displayBoard();
    turn = Math.floor(Math.random() * 2);
    updateActivePlr(turn);
}

function scoreRefresh (w) { //add score points and refresh value on screen
    players[w].score= players[w].score+1;
    const txt = "Score: " + players[w].score;
    if (w === 0){
        const element = document.getElementById("oneS");
        element.remove();
        const div = document.createElement("div");
        div.classList = "score";
        div.id = "oneS";
        div.textContent = txt;
        document.getElementById("plyr1").appendChild(div);
        }
    else if (w === 1){
        const element = document.getElementById("twoS");
        element.remove();
        const div = document.createElement("div");
        div.classList = "score";
        div.id = "twoS";
        div.textContent = txt;
        document.getElementById("plyr2").appendChild(div);
        }
}

displayBoard(); //needed to display the board on page loading
updateActivePlr(turn); //needed to display active player on page loading
document.getElementById("newG").onclick = newGame; //start a new game