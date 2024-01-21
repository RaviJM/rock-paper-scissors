function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    let choice = choices[Math.floor(Math.random()*3)];
    return choice;
}

function getPlayerChoice(){
    let choice = prompt("Enter your choice (Rock/Paper/Scissors): ");
    choice = choice.toLowerCase();
    return choice;
}

function playRound(playerChoice, computerChoice){
    if (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors"){
        return ("re-round");
    }
    if (playerChoice === computerChoice){
        return ("tie"); 
    }
    else if (playerChoice === "rock"){
        if (computerChoice === "paper"){
            return ("You Lose! Paper beats Rock.");
        }
        else {
            wins++;
            return ("You Win! Rock beats Scissors.");
        }
    }
    else if (playerChoice === "paper"){
        if (computerChoice === "rock"){
            wins++;
            return ("You Win! Paper beats Rock.");
        }
        else {
            return ("You Lose! Rock beats Scissors.");
        }
    }
    else {
        if (computerChoice === "rock"){
            return ("You Lose! Rock beats Scissors.");
        }
        else {
            wins++;
            return ("You Win! Paper beats Rock.");
        }
    }
}

function game(){
    let counter = 0;
    while (counter != 5){
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();
        // console.log("Your Choice: ", playerChoice);
        // console.log("Computer CHoice: ", computerChoice);
        let message = playRound(playerChoice, computerChoice);
        if (message !== "tie" && message !== "re-round"){
            console.log(message);
            counter++;
        }
        else {
            if (message === "tie"){
                console.log("Game Tied! Play this round again (Round: ",counter+1,")");
            }
            else {
                console.log("Enter a valid Choice! Play this round again (Round: ",counter+1,")");
            }
        }
        
    }
    console.log(counter);
    console.log(wins);
    if (counter-wins > wins){
        console.log("You Lost!");
    }
    else {
        console.log("You Win!");
    }
}

let wins = 0;
game();
