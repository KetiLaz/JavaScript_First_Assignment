function computerPlay() {
    const possibleActions = ["rock", "paper", "scissors"];
    let computerAction = possibleActions[~~(Math.random() * possibleActions.length)];
   return computerAction;
};

function singleRound (playerSelection, computerSelection) {
     computerSelection = computerPlay();
     playerSelection = prompt("Let's play rock, paper, scissors. What do you choose?");
     playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        
    }
};


