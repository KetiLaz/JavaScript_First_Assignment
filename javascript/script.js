function computerPlay() {
    const possibleActions = ["rock", "paper", "scissors"];
    let computerAction = possibleActions[~~(Math.random() * possibleActions.length)];
   return computerAction;
};

function singleRound (playerSelection, computerSelection) {
     computerSelection = computerPlay();
     playerSelection = prompt("Let's play rock, paper, scissors. What do you choose?").toLowerCase();
     
    if (playerSelection == computerSelection) {
        return (`Both you AND the computer chose ${playerSelection}. It's a tie!`);
    }
    else if (playerSelection == "rock" && computerSelection == "paper" 
            || playerSelection == "paper" && computerSelection == "scissors"
            || playerSelection == "scissors" && computerSelection == "rock") {
        return (`You Lose! ${computerSelection} beats ${playerSelection}!`);
    }
    else if (playerSelection == "rock" && computerSelection == "scissors"
            || playerSelection == "paper" && computerSelection == "rock"
            || playerSelection == "scisosrs" && computerSelection == "paper") {
        return (`You Won! ${playerSelection} beats ${computerSelection}!`);
    }
    else {
        return (`The input is wrong! We are playing Rock, Paper, Scissors!`);
    }
};

function game() {
    for (let i = 5; i >=1 ; i--) {
        attempts = String(i);
        console.log(`You have ${attempts} more attempts`)
        console.log(singleRound());
    }
};
