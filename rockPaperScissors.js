var userChoice = window.prompt("Enter your selection (Rock, Paper, or Scissors): ")
var computerChoice = Math.random();

if (computerChoice >= 0 && computerChoice <= 0.34){
    var computerChoiceString = "Rock";
}
else if(computerChoice >= 0.35 && computerChoice <= 0.67){
    computerChoiceString = "Scissors";
}
else if(computerChoice >= 0.68 && computerChoice <= 1){
    computerChoiceString = "Paper";
}

console.log("User Choice: " + userChoice);
console.log("Computer Choice: " + computerChoiceString);

if (userChoice === computerChoiceString){
    console.log("Its a tie!");
}
if (computerChoiceString === "Paper" && userChoice === "Rock"){
    console.log("Computer Wins!")
}
else if (computerChoiceString === "Paper" && userChoice === "Scissors"){
    console.log("User Wins!")
}
else if (computerChoiceString === "Rock" && userChoice === "Scissors"){
    console.log("Computer Wins!")
}
else if (computerChoiceString === "Scissors" && userChoice === "Rock"){
    console.log("User Wins!")
}
else if (computerChoiceString === "Rock" && userChoice === "Paper"){
    console.log("User Wins!")
}
else if (computerChoiceString === "Scissors" && userChoice === "Paper"){
    console.log("Computer Wins!")
}
else {
    console.log("Not a valid entry")
}




