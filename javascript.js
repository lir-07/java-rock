function getComputerChoice(){
    const min = Math.ceil(0);
    const max = Math.floor(2);
    
    let num = Math.floor(Math.random() * (max - min + 1) + min);

    if (num === 0){
        return "rock";
    } else if (num ===1){
        return "paper";
    } else{
        return "scissors";
    }
}

function getHumanChoice(){
    let choice = prompt("What is your choice(rock, paper, scissors)?");
    return choice;
}

let humanScore = 0;
let computerScore = 0;
let win = "false";

function playRound(humanChoice, computerChoice){
    let humanch = humanChoice.toLowerCase();

    if (humanch === "rock"){
        if(computerChoice === "rock"){
            win = "tie";
        }
        if(computerChoice === "scissors"){
            win = "true";
        }
        if(computerChoice === "paper"){
            win = "false";
        }
    }

    if (humanch === "paper"){
        if(computerChoice === "rock"){
            win = "true";
        }
        if(computerChoice === "scissors"){
            win = "false";
        }
        if(computerChoice === "paper"){
            win = "tie";
        }
    }

    if (humanch === "scissors"){
        if(computerChoice === "rock"){
            win = "false";
        }
        if(computerChoice === "scissors"){
            win = "tie";
        }
        if(computerChoice === "paper"){
            win = "true";
        }
    }

    if(win === "false"){
        console.log("You lose! " + computerChoice + " beats " + humanChoice + ".");
        computerScore++;
    }

    if(win === "true"){
            console.log("You win! " + humanChoice + " beats " + computerChoice + ".");
        humanScore++;
    }

    if(win === "tie"){
        console.log("Tie! Both picked the same thing.")
    }

}

function playGame(){

    for (let i = 0; i < 5; i++){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }
}

playGame();
