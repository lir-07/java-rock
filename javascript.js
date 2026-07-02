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
}

let humanScore = 0;
let computerScore = 0;
