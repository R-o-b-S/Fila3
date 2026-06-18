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

const players = [];

function addPlayer () {
    if (players.length < 2){
        const name = window.prompt("insert player name:");
        if (name.length > 0) {
            let score = 0;
            const getScore= () => score;
            const giveScore = () => { score++; };
            players.push({name, getScore, giveScore})
            }
        else {
            window.alert("Player name can't be empty");
        }
    }
    else {
        window.alert("Players already defined, reload page to change players");
    }
}

document.getElementById("addPlayer").onclick = addPlayer;


