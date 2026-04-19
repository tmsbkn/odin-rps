function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        choice = "ROCK";
    } else if (choice == 1) {
        choice = "PAPER";
    } else {
        choice = "SCISSORS";
    }

    return choice;
};

// Get user choice using prompt
function getUserChoice() {
   let choice = prompt("Please choose your hand");
    return choice;
};

let computerScore = 0;
let humanScore = 0;

function playRound(humanChoice,computerChoice){
    let roundOutcome;
    if (humanChoice == computerChoice) {
        roundOutcome = 'Tie';
    } else if (computerChoice == 'ROCK' && humanChoice.toUppercase() == 'PAPER'){
        roundOutcome = 'You win';
        humanScore = humanScore++;
    } else if(computerChoice == 'ROCK' && humanChoice.toUppercase() == 'SCISSORS'){
        roundOutcome = 'You Lose';
        computerScore = computerScore++;
    }
    else if (computerChoice == 'PAPER' && humanChoice.toUppercase() == 'SCISSORS'){
        roundOutcome = 'You win';
        humanScore = humanScore++;
    } else if(computerChoice == 'PAPER' && humanChoice.toUppercase() == 'ROCK'){
        roundOutcome = 'You Lose';
        computerScore = computerScore++;
    }
    else if (computerChoice == 'SCISSORS' && humanChoice.toUppercase() == 'ROCK'){
        roundOutcome = 'You win';
        humanScore = humanScore++;
    } else if(computerChoice == 'SCISSORS' && humanChoice.toUppercase() == 'PAPER'){
        roundOutcome = 'You Lose';
        computerScore = computerScore++;
    }
    else {
        roundOutcome = 'Type either ROCK, PAPER, or SCISSORS';
    }

    console.log(roundOutcome);
    
}
    const humanSelection = getUserChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);