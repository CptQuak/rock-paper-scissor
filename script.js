let gameScore = { user: 0, computer: 0 };
const patterns = ["paper", "scissors", "rock"];
let computerOption = "";
let userInput = "";
let turn = 0;
let startRound = false;
const scoreHolder = document.querySelector(".gamescore");
const gameInfo = document.querySelector(".gameinfo");
const buttons = document.querySelectorAll("button");

function computerPlay() {
    const randomChoice = Math.floor(Math.random() * 3);
    return patterns[randomChoice];
}

function playRound(userInput, computerOption) {
    let user = null;
    let computer = null;
    for (let pattern in patterns) {
        if (userInput === patterns[pattern]) {
            user = pattern;
        }
        if (computerOption === patterns[pattern]) {
            computer = pattern;
        }
    }
    if (
        (user == 0 && computer == 1) ||
        (user == 1 && computer == 2) ||
        (user == 2 && computer == 0)
    ) {
        gameScore.computer++;
        return `You lost, ${patterns[computer]} beats ${patterns[user]}`;
    } else if (
        (user == 0 && computer == 2) ||
        (user == 1 && computer == 0) ||
        (user == 2 && computer == 1)
    ) {
        gameScore.user++;
        return `You won, ${patterns[user]} beats ${patterns[computer]}`;
    } else if (user == computer) {
        return "its a tie!";
    }
}

function updateScore() {
    scoreHolder.textContent = `player ${gameScore.user}:${gameScore.computer} computer`;
}

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        if (turn < 5) {
            console.log(
                (gameInfo.textContent = playRound(
                    button.textContent.toLowerCase(),
                    computerPlay()
                ))
            );
            updateScore();
            turn++;
        }
        if (turn == 5) {
            if (gameScore.user > gameScore.computer) {
                gameInfo.textContent = "Congrats you won!";
            } else if (gameScore.user < gameScore.computer) {
                gameInfo.textContent = "Good luck next time!";
            } else {
                gameInfo.textContent = "Its a tie!";
            }
        }
    });
});
