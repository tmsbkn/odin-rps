function getComputerChoice() {
   let choice = Math.floor(Math.random() * 3);
   if (choice == 0) {
      choice = 'ROCK';
   } else if (choice == 1) {
      choice = 'PAPER';
   } else {
      choice = 'SCISSORS';
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

   if (humanChoice == computerChoice.toUpperCase()) {
      winner = 'Tie';
   } else if (
      (computerChoice == 'ROCK' && humanChoice.toUpperCase() == 'PAPER') ||
      (computerChoice == 'PAPER' && humanChoice.toUpperCase() == 'SCISSORS') ||
      (computerChoice == 'SCISSORS' && humanChoice.toUpperCase() == 'ROCK')
   ) {
      winner = 'Human';
      humanScore++;
   } else if (
      (computerChoice == 'ROCK' && humanChoice.toUpperCase() == 'SCISSORS') ||
      (computerChoice == 'PAPER' && humanChoice.toUpperCase() == 'ROCK') ||
      (computerChoice == 'SCISSORS' && humanChoice.toUpperCase() == 'PAPER')
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
   playRound('ROCK', getComputerChoice());
});
paperBtn.addEventListener('click', function () {
   playRound('PAPER', getComputerChoice());
});
scissorsBtn.addEventListener('click', function () {
   playRound('SCISSORS', getComputerChoice());
});
