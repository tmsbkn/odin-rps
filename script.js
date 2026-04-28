const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');
const dynamiteBtn = document.getElementById('dynamiteBtn');
const resultTable = document.getElementById('score-body');
const outcomeMsg = document.getElementById('outcome-msg');
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
   outcomeMsg.innerText = getSnark(humanChoice, computerChoice);
   roundResult.roundWinner = winner;
   roundResult.score = humanScore;
   userChoiceHistory.push(humanChoice);
   console.log(roundResult);

   gameRound++;
}

let snarks = [
   {
      humanPick: 0,
      computerPick: 0,
      message: 'Whats hard like a Rock? Another Rock! We Tie!',
   },
   {
      humanPick: 1,
      computerPick: 0,
      message: 'Paper wraps around Rock. You Win!',
   },
   {
      humanPick: 2,
      computerPick: 0,
      message: 'ROCK SMASH SCISSORS! That means: You Lose!',
   },
   {
      humanPick: 3,
      computerPick: 0,
      message: 'Fire in the Hole! Dynamite destroys all! You Win!',
   },
   {
      humanPick: 0,
      computerPick: 1,
      message: "I think you're Rock has a PAPER CUT! I Win!",
   },
   {
      humanPick: 1,
      computerPick: 1,
      message: 'Paper and Paper, someone should write a book. We Tie!',
   },
   {
      humanPick: 2,
      computerPick: 1,
      message: 'Ouchie! Scissors cut up Paper. You Win this time!',
   },
   {
      humanPick: 3,
      computerPick: 1,
      message: 'BOOM goes the Dynamite! You Win!',
   },
   {
      humanPick: 0,
      computerPick: 2,
      message: 'My Scissors are no match for your Rock. You Win!',
   },
   {
      humanPick: 1,
      computerPick: 2,
      message: 'CHOP CHOP, is what I say when I cut your paper up! I Win! You LOSE!',
   },
   {
      humanPick: 2,
      computerPick: 2,
      message: "LETS HAVE A KIKI! Since we're Scissors Sisters now... We Tie!",
   },
   {
      humanPick: 3,
      computerPick: 2,
      message: 'BANG! Watch out for flying scissor parts! You Win!',
   },
   {
      humanPick: 0,
      computerPick: 3,
      message:
         "It's demolition time! My Dynamite blows up your rock which means YOU LOSE!",
   },
   {
      humanPick: 1,
      computerPick: 3,
      message: 'BURN BABY BURN! My dynamite made your paper catch fire. YOU LOSE!',
   },
   {
      humanPick: 2,
      computerPick: 3,
      message: 'Can Dynamite melt metal? OH YEAH IT CAN! YOU LOSE!',
   },
   {
      humanPick: 3,
      computerPick: 3,
      message:
         'BOOM! They say war never changes. I just hope one of us picks different next time. TIE!',
   },
];

function getSnark(humanChoice, computerChoice) {
   let chosenSnark = snarks.filter(function (el) {
      return el.humanPick === humanChoice && el.computerPick == computerChoice;
   });
   return chosenSnark[0].message;
}
