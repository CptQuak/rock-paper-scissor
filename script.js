let gameScore = { user: 0, computer: 0 };
function computerPlay() {
    const randomChoice = Math.floor(Math.random() * 3) + 1;
    switch (randomChoice) {
        case 1:
            return "rock";
        case 2:
            return "scissors";
        case 3:
            return "paper";
    }
}

function didWin(userInput, computerOption) {
    const patterns = ["paper", "scissors", "rock"];
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

let computerOption = "";
let userInput = "";
let turn = 0;
for (turn; turn < 5; turn++) {
    userInput = window.prompt("Your choise: ").toLowerCase();
    computerOption = computerPlay();
    console.log("------------------------");
    console.log(didWin(userInput, computerOption));
    console.log(
        `Game score: You ${gameScore.user}:${gameScore.computer} Computer`
    );
    console.log(`${4 - turn}turns left`);
    console.log("------------------------");
}
