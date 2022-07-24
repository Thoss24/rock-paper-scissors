function getComputerChoice() {
    let myArray = ["Rock", "Paper", "Scissors"];
    let myValue = myArray[Math.floor(Math.random() * myArray.length)]; // A random number between 0 and myArray.length is generated. Math.floor generates the nearest integer value generated from Math.random. 
    console.log(myValue);                                              // This random index is used to return a random value from myArray.
    
}
getComputerChoice();
