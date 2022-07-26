// Function to randomly return either "Rock", "Paper" or "Scissors" as the computers choice.
function getComputerChoice() {
    const myArray = ["rock", "paper", "scissors"];
    const myValue = myArray[Math.floor(Math.random() * myArray.length)]; // A random number between 0 and myArray.length is generated. Math.floor generates the nearest integer value generated from Math.random.  
    return myValue;                                                  
}

// define scores
let playerScore = 0;
let computerScore = 0;
let playerSelection = prompt("Choose either 'Rock', 'Paper' or 'Scissors'.").toLowerCase();
let computerSelection = getComputerChoice();

// Function to play a round of "Rock", "Paper", "Scissors". 
function playRound(playerSelection, computerSelection) { 
  if (
    (playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'paper' && computerSelection == 'rock') ||
    (playerSelection == 'scissors' && computerSelection == 'paper')
    ) { alert(`You win! ${playerSelection} beats ${computerSelection}.`);
        playerScore++;
        return "Win"
    }
    
    else if(
    (playerSelection == 'rock' && computerSelection == 'paper') ||
    (playerSelection == 'paper' && computerSelection == 'scissors') ||
    (playerSelection == 'scissors' && computerSelection == 'rock')
    ) { alert(`You lose, ${computerSelection} beats ${playerSelection}.`);
        computerScore++;
        return "Lose"
    } 

    else if (playerSelection == computerSelection){
        alert(`It's a tie, ${playerSelection} and ${computerSelection} are equal.`);
        return "Tie"
    }
}  
playRound(playerSelection, computerSelection);

// Show first loop
console.log("Player score " + playerScore);
console.log("Computer score " + computerScore); 
 
// loop
function game() {
    for (let i = 0; i < 4; i++){
         playerSelection = prompt("Choose another option, either 'Rock', 'Paper', or 'Scissors'".toLowerCase());
         computerSelection = getComputerChoice();
         console.log(playRound(playerSelection, computerSelection));
         console.log("Player score " + playerScore);
         console.log("Computer score " + computerScore);    
}
if (playerScore > computerScore){
    console.log("Player Wins!")
} else if (computerScore > playerScore){
    console.log("Computer Wins.")
} else if (playerScore === computerScore)
    console.log("It's a tie");
}
game();

