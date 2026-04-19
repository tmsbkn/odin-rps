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
        roundOutcome = 'Tie, play again';
    } else if (
        computerChoice == 'ROCK' && humanChoice.toUpperCase() == 'PAPER' ||
        computerChoice == 'PAPER' && humanChoice.toUpperCase() == 'SCISSORS' || 
        computerChoice == 'SCISSORS' && humanChoice.toUpperCase() == 'ROCK'
    ){
        roundOutcome = 'You Win! ' + humanChoice + ' beats ' + computerChoice;
        humanScore = humanScore++;
    } else if (
        computerChoice == 'ROCK' && humanChoice.toUpperCase() == 'SCISSORS' ||
        computerChoice == 'PAPER' && humanChoice.toUpperCase() == 'ROCK' ||
        computerChoice == 'SCISSORS' && humanChoice.toUpperCase() == 'PAPER'
        ){
        roundOutcome = 'You Lose! ' + computerChoice + ' beats ' + humanChoice;
        computerScore = computerScore++;
    } else {
        roundOutcome = 'Type either ROCK, PAPER, or SCISSORS';
    }

    console.log(roundOutcome);
    
    
}
    const humanSelection = getUserChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);