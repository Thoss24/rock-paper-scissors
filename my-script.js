
// define scores
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

// onclick event for button press
document.getElementById('rock').onclick = user;
document.getElementById('paper').onclick = user;
document.getElementById('scissors').onclick = user;


//function to compare player selection and computer selection
function user() {
    let playerSelection = this.value;

    let computerChoice = ["rock", "paper", "scissors"];
    let computerSelection = computerChoice[Math.floor(Math.random() * 3)];


    let scoreKeep = document.getElementById('player-score');
    let compScore = document.getElementById('computer-score');
    let drawScore = document.getElementById('tie-score');
    
// Function to play a round of "Rock", "Paper", "Scissors". 
function playRound(choice1, choice2) { 
  if (
    (choice1 == 'rock' && choice2 == 'scissors') ||
    (choice1 == 'paper' && choice2 == 'rock') ||
    (choice1 == 'scissors' && choice2 == 'paper')
    ) { playerScore++;
        scoreKeep.textContent = playerScore;
    }
    
    else if(
    (choice1 == 'rock' && choice2 == 'paper') ||
    (choice1 == 'paper' && choice2 == 'scissors') ||
    (choice1 == 'scissors' && choice2 == 'rock')
    ) { computerScore++;
        compScore.textContent = computerScore;
    } 

    else if (choice1 == choice2){
        tieScore++;
        drawScore.textContent = tieScore;
    }
}  
console.log(playRound(playerSelection, computerSelection));


function firstToFive(play, comp) {
   if (play === 5){
    scoreKeep.textContent = playerScore;
    clearScore();
    alert("You win! You got 5 points before the computer");
   } else if (comp === 5){
    compScore.textContent = computerScore;
    clearScore();
    alert("You lose. THe computer got 5 points before you")
   }
}
firstToFive(playerScore, computerScore);


function clearScore() {
    scoreKeep.textContent = "";
    playerScore = 0;
    compScore.textContent = "";
    computerScore = 0;
    drawScore.textContent = "";
    tieScore = 0;
}

document.getElementById('reset-button').onclick = clearScore;

}

