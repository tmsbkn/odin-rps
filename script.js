function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        choice = "Rock";
    } else if (choice == 1) {
        choice = "Paper";
    } else {
        choice = "Scissors";
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
    } else if (computerChoice == 'Rock' && humanChoice.toLowercase() == 'paper'){
        roundOutcome = 'You win';
        humanScore = humanScore++;
    } else {
        roundOutcome = 'Not sure yet';
    }

    console.log(roundOutcome);
    
}
    const humanSelection = getUserChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);