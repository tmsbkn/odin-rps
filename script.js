function getComputerChoice() {
   let choice = Math.floor(Math.random() * 3);
   if (choice == 0) {
      choice = 'Rock';
   } else if (choice == 1) {
      choice = 'Paper';
   } else {
      choice = 'Scissors';
   }

   return choice;
}

// Get user choice using prompt
function getUserChoice() {
   let choice = prompt('Please choose your hand');
   return choice;
}

let computerScore = 0;
let humanScore = 0;
let gameRound = 1;

const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');
const resultTable = document.getElementById('score-body');

let gameScore = [];

function playRound(humanChoice, computerChoice) {
   const newRow = document.createElement('tr');
   newRow.classList.add('row');

   let roundResult = {};
   roundResult.round = gameRound;
   roundResult.youChose = humanChoice;
   roundResult.computerChose = computerChoice;
   let winner = '';

   if (humanChoice == computerChoice) {
      winner = 'Tie';
   } else if (
      (computerChoice == 'Rock' && humanChoice.toUpperCase() == 'PAPER') ||
      (computerChoice == 'Paper' && humanChoice.toUpperCase() == 'SCISSORS') ||
      (computerChoice == 'Scissors' && humanChoice.toUpperCase() == 'ROCK')
   ) {
      winner = 'Human';
      humanScore++;
   } else if (
      (computerChoice == 'Rock' && humanChoice.toUpperCase() == 'SCISSORS') ||
      (computerChoice == 'Paper' && humanChoice.toUpperCase() == 'ROCK') ||
      (computerChoice == 'Scissors' && humanChoice.toUpperCase() == 'PAPER')
   ) {
      winner = 'Computer';
      humanScore--;
   }
   roundResult.roundWinner = winner;
   roundResult.score = humanScore;

   gameRound++;

   let rowLog = Object.values(roundResult);

   rowLog.forEach((item) => {
      let td = document.createElement('td');
      td.innerText = item;
      newRow.appendChild(td);
   });

   resultTable.appendChild(newRow);
}

rockBtn.addEventListener('click', function () {
   playRound('Rock', getComputerChoice());
});
paperBtn.addEventListener('click', function () {
   playRound('Paper', getComputerChoice());
});
scissorsBtn.addEventListener('click', function () {
   playRound('Scissors', getComputerChoice());
});
