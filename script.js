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

let computerChoice = getComputerChoice();

console.log('Computer chose', computerChoice);

// Get user choice using prompt
function getUserChoice() {
   let choice = prompt("Please choose your hand");
    return choice;
};

let userChoice = getUserChoice();

console.log('You chose', userChoice);

let computerScore = 0;
let humanScore = 0;