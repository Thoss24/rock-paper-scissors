// Function to randomly return either "Rock", "Paper" or "Scissors" as the computers choice.
function getComputerChoice() {
    let myArray = ["Rock", "Paper", "Scissors"];
    let myValue = myArray[Math.floor(Math.random() * myArray.length)]; // A random number between 0 and myArray.length is generated. Math.floor generates the nearest integer value generated from Math.random. 
    return myValue                                          // This random index is used to return a random value from myArray.
}


// Function to randomly select player choice of "Rock" "Paper" "Scissors".
function getPlayerChoice() {
    let myArray = ["Rock", "Paper", "Scissors"];
    let myValue = myArray[Math.floor(Math.random() * myArray.length)];
    return myValue
}


// Function to play a round of "Rock", "Paper", "Scissors".
function playRound(playerSelection, computerSelection) { 
    if (playerSelection === "Rock" && computerSelection === "Paper"){
        return "You lose, Paper beats Rock!";
    } else if (playerSelection === "Rock" && computerSelection === "Scissors"){
        return "You win! Rock beats Scissors!";
    } else if (playerSelection === "Rock" && computerSelection === "Rock"){
        return "It's a tie!";
    } else if (playerSelection === "Paper" && computerSelection === "Rock"){
        return "You win! Paper beats Rock!";
    } else if (playerSelection === "Paper" && computerSelection === "Paper"){
        return "It's a tie!";
    } else if (playerSelection === "Paper" && computerSelection === "Scissors"){
        return "You lose, Scissors beats Paper!";
    } else if (playerSelection === "Scissors" && computerSelection === "Rock"){
        return "You lose, Rock beats Scissors!";
    } else if (playerSelection === "Scissors" && computerSelection === "Paper"){
        return "You win! Scissors beats Paper!";
    } else (playerSelection === "Scissors!" && computerSelection === "Scissors")
        return "It's a tie!";
}
const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));