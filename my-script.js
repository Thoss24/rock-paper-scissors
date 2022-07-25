// Function to randomly return either "Rock", "Paper" or "Scissors" as the computers choice.
function getComputerChoice() {
    const myArray = ["rock", "paper", "scissors"];
    const myValue = myArray[Math.floor(Math.random() * myArray.length)]; // A random number between 0 and myArray.length is generated. Math.floor generates the nearest integer value generated from Math.random.  
    return myValue;                                                       
}


// Function to play a round of "Rock", "Paper", "Scissors".
function playRound(playerSelection, computerSelection) { 
  if (
    (playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'paper' && computerSelection == 'rock') ||
    (playerSelection == 'scissors' && computerSelection == 'paper')
  ) {alert(`You win ${playerSelection} beats ${computerSelection}`)
    return "Player Win";}
}  

const playerSelection = prompt("Choose either 'Rock', 'Paper' or 'Scissors'.").toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));