const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');
const dynamiteBtn = document.getElementById('dynamiteBtn');
const resultTable = document.getElementById('score-body');

let computerScore = 0;
let humanScore = 0;
let gameRound = 1;

rockBtn.addEventListener('click', function () {
   playRound(0, getComputerChoice());
});
paperBtn.addEventListener('click', function () {
   playRound(1, getComputerChoice());
});
scissorsBtn.addEventListener('click', function () {
   playRound(2, getComputerChoice());
});
dynamiteBtn.addEventListener('click', function () {
   playRound(3, getComputerChoice());
});

function averageChoice(choices, toRound) {
   let lastChoices = choices.slice(-toRound);
   let average = Math.round(
      lastChoices.reduce((acc, curr) => acc + curr, 0) / lastChoices.length,
   );
   return average;
}

function getComputerChoice() {
   let choice = 0;
   if (gameRound < 5) {
      choice = Math.floor(Math.random() * 4);
   } else {
      let userFavChoice = averageChoice(userChoiceHistory, 5);
      if (userFavChoice == 0) {
         choice = 1;
      } else if (userFavChoice == 1) {
         choice = 2;
      } else if (userFavChoice == 2) {
         choice = 0;
      } else {
         choice = 3;
      }
   }
   return choice;
}
let userChoiceHistory = [];

let gameScore = [];

function playRound(humanChoice, computerChoice) {
   let roundResult = {};
   roundResult.round = gameRound;
   roundResult.youChose = humanChoice;
   roundResult.computerChose = computerChoice;
   let winner = '';

   if (humanChoice == computerChoice) {
      winner = 'Tie';
   } else if (
      (computerChoice == 0 && humanChoice == 1) ||
      (computerChoice == 1 && humanChoice == 2) ||
      (computerChoice == 2 && humanChoice == 0) ||
      humanChoice == 3
   ) {
      winner = 'Human';
      humanScore++;
   } else if (
      (computerChoice == 0 && humanChoice == 2) ||
      (computerChoice == 1 && humanChoice == 0) ||
      (computerChoice == 2 && humanChoice == 1) ||
      computerChoice == 3
   ) {
      winner = 'Computer';
      humanScore--;
   }
   roundResult.roundWinner = winner;
   roundResult.score = humanScore;
   userChoiceHistory.push(humanChoice);
   console.log(roundResult.roundWinner);

   gameRound++;
}
