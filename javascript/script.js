function computerPlay() {
    const possibleActions = ["rock", "paper", "scissors"];
    let computerAction = possibleActions[~~(Math.random() * possibleActions.length)];
   return computerAction;
};

let playerScore = 0;
let computerScore = 0;
let draws = 0;
let roundLost = 0;

function singleRound () {
     computerSelection = computerPlay();
     playerSelection = prompt("Let's play rock, paper, scissors. What do you choose?").toLowerCase();
     
    if (playerSelection == computerSelection) {
        draws += 1;
        return `Both you AND the computer chose ${playerSelection}. It's a tie!`;
    }
    else if (playerSelection == "rock" && computerSelection == "paper" 
        || playerSelection == "paper" && computerSelection == "scissors"
        || playerSelection == "scissors" && computerSelection == "rock"){ 
            computerScore += 1;
            return `You Lost this Round! ${computerSelection} beats ${playerSelection}!`;
    }
    else if (playerSelection == "rock" && computerSelection == "scissors"
        || playerSelection == "paper" && computerSelection == "rock"
        || playerSelection == "scissors" && computerSelection == "paper") {
            playerScore += 1;
            return `You Won this Round! ${playerSelection} beats ${computerSelection}!`;
    }
    else {
        roundLost +=1;
        return `The input is wrong! We are playing Rock, Paper, Scissors!`;
    }
};

function game() {
    for (let i = 5; i >=1 ; i--) {
        let rounds = (i -1).toString();
        if (roundLost > 0) {
            rounds = i.toString();
            i ++;
            roundLost --;   
        };
        if (rounds == 0 ) {
            rounds = "no";
        };

        alert(`${singleRound()} \n You have ${rounds} more rounds`);
    };

    if (playerScore > computerScore) {
        alert(`Congrats, you won! Your score: ${playerScore}.\nThe computer score: ${computerScore}.\nThe draws: ${draws}`);
    }
    else if (playerScore < computerScore) {
        alert(`You lost... Your score: ${playerScore}.\nThe computer score: ${computerScore}.\nThe draws: ${draws}`);
    }
    else {
        alert(`It's a tie!. Your score: ${playerScore}.\nThe computer score: ${computerScore}.\nThe draws: ${draws}`)
    }
};

game();