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
