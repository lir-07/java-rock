function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

let humanScore = 0;
let computerScore = 0;

const roundResult = document.getElementById("roundResult");
const score = document.getElementById("score");
const winner = document.getElementById("winner");

function playRound(humanChoice, computerChoice) {

    if (humanScore === 5 || computerScore === 5) {
        return;
    }

    if (humanChoice === computerChoice) {
        roundResult.textContent = `Tie! You both chose ${humanChoice}.`;
    }
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        roundResult.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
    }
    else {
        computerScore++;
        roundResult.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
    }

    score.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;

    if (humanScore === 5) {
        winner.textContent = "You won the game!";
    }

    if (computerScore === 5) {
        winner.textContent = "Computer won the game!";
    }
}

document.getElementById("rock").addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

document.getElementById("paper").addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});

document.getElementById("scissors").addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});