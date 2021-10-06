let gameScore = { user: 0, computer: 0 };
const patterns = ["paper", "scissors", "rock"];
function computerPlay() {
    const randomChoice = Math.floor(Math.random() * 3);

    return patterns[randomChoice];
}

function didWin(userInput, computerOption) {
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
let spelling = false;
for (turn; turn < 5; turn++) {
    while (!spelling) {
        userInput = window.prompt("Your choise: ").toLowerCase();
        spelling = patterns.includes(userInput);
    }
    spelling = false;
    computerOption = computerPlay();
    console.log("------------------------");
    console.log(didWin(userInput, computerOption));
    console.log(
        `Game score: You ${gameScore.user}:${gameScore.computer} Computer`
    );
    if (turn != 4) {
        console.log(`${4 - turn}turns left`);
    } else {
        if (gameScore.user > gameScore.computer) {
            console.log("Congrats you won!");
        } else if (gameScore.user < gameScore.computer) {
            console.log("Good luck next time!");
        } else {
            console.log("Its a tie!");
        }
    }
    console.log("------------------------");
}
