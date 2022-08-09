
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
    let computerSelection = computerChoice[Math.floor(Math.random() * 3)]


// Function to play a round of "Rock", "Paper", "Scissors". 
function playRound(choice1, choice2) { 
  if (
    (choice1 == 'rock' && choice2 == 'scissors') ||
    (choice1 == 'paper' && choice2 == 'rock') ||
    (choice1 == 'scissors' && choice2 == 'paper')
    ) { alert(`You win! ${choice1} beats ${choice2}.`);
        playerScore++;
    }
    
    else if(
    (choice1 == 'rock' && choice2 == 'paper') ||
    (choice1 == 'paper' && choice2 == 'scissors') ||
    (choice1 == 'scissors' && choice2 == 'rock')
    ) { alert(`You lose, ${choice2} beats ${choice1}.`);
        computerScore++;
    } 

    else if (choice1 == choice2){
        alert(`It's a tie, ${choice1} and ${choice2} are equal.`);
        tieScore++;
    }
}  
console.log(playRound(playerSelection, computerSelection));

console.log("Player score: " + playerScore + " " + " ||", " Computer score: " + computerScore)


}




 


    



