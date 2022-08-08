
// Function to randomly return either "Rock", "Paper" or "Scissors" as the computers choice.
function getComputerChoice() {
    const myArray = ["rock", "paper", "scissors"];
   const myValue = myArray[Math.floor(Math.random() * myArray.length)];
    return myValue;                                                  
}

//event
let buttons = document.querySelectorAll('button');
buttons.forEach((element) => element.addEventListener('click', playRound));

// THink about creating the player choice and computer choice values inside the event listener i.e., input of the player in selecting the button and the randomly generated string from the computer. Its all here, it just needs to be refactored.



// define scores
let playerScore = 0;
let computerScore = 0;
let playerSelection = 
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



//Show first loop
console.log("Player score " + playerScore);
console.log("Computer score " + computerScore); 
 
// loop
//function game() {
//    for (let i = 0; i < 4; i++){
//       computerSelection = getComputerChoice();
//        playRound(playerSelection, computerSelection);
//       console.log("Player score " + playerScore);
//      console.log("Computer score " + computerScore);    
//}
//if (playerScore > computerScore){
//   console.log("Player Wins!")
//} else if (computerScore > playerScore){
//   console.log("Computer Wins.")
//} else if (playerScore === computerScore)
//   console.log("It's a tie");
//}
//game();




