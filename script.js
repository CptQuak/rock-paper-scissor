let gameScore = { user: 0, computer: 0 };
const patterns = ["paper", "scissors", "rock"];
let computerOption = "";
let userInput = "";
let turn = 0;
let startRound = false;
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

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        console.log(
            playRound(button.textContent.toLowerCase(), computerPlay())
        );
    });
});

// function game() {
//     for (turn; turn < 5; turn++) {
//         while (!startRound) {
//             userInput = window.prompt("Your choise: ").toLowerCase();
//             startRound = patterns.includes(userInput);
//         }
//         startRound = false;
//         computerOption = computerPlay();
//         console.log("------------------------");
//         console.log(playRound(userInput, computerOption));
//         console.log(
//             `Game score: You ${gameScore.user}:${gameScore.computer} Computer`
//         );
//         if (turn != 4) {
//             console.log(`${4 - turn}turns left`);
//         } else {
//             if (gameScore.user > gameScore.computer) {
//                 console.log("Congrats you won!");
//             } else if (gameScore.user < gameScore.computer) {
//                 console.log("Good luck next time!");
//             } else {
//                 console.log("Its a tie!");
//             }
//         }
//         console.log("------------------------");
//     }
// }
// game();
