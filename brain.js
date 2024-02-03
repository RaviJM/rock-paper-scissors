function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    let choice = choices[Math.floor(Math.random()*3)];
    return choice;
}

function getPlayerChoice(e){
    let choice = e.target.textContent;
    choice = choice.toLowerCase();
    // console.log(choice);
    return choice;
}

function getBothChoicesAndPlayRound(e){
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice(e);

    // console.log(computerChoice);
    // console.log(playerChoice);
    
    let statement = playRound(computerChoice, playerChoice);

    
    if (statement === "re-round" || statement === "tie"){
        statementOfRound.textContent = "PLAY AGAIN!";
    }
    else{
        statementOfRound.textContent = statement;
        playerWins.textContent = playerWinsCount;
        computerWins.textContent = computerWinsCount;
    }

    if (playerWinsCount == 5){
        var winner = document.querySelector(".winner");
        // winner.textContent = "You Won!";
        playerWinsCount = 0;
        computerWinsCount = 0;
        alert("You Won!");
    }
    else if (computerWinsCount == 5){
        var winner = document.querySelector(".winner");
        // winner.textContent = "You Lose!";
        playerWinsCount = 0;
        computerWinsCount = 0;
        alert("You Lost!");
    }
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
            computerWinsCount++;
            return ("You Lose! Paper beats Rock.");
        }
        else {
            playerWinsCount++;
            return ("You Win! Rock beats Scissors.");
        }
    }
    else if (playerChoice === "paper"){
        if (computerChoice === "rock"){
            playerWinsCount++;
            return ("You Win! Paper beats Rock.");
        }
        else {
            computerWinsCount++;
            return ("You Lose! Rock beats Scissors.");
        }
    }
    else {
        if (computerChoice === "rock"){
            computerWinsCount++;
            return ("You Lose! Rock beats Scissors.");
        }
        else {
            playerWinsCount++;
            return ("You Win! Paper beats Rock.");
        }
    }
}

let playerWinsCount = 0;
let computerWinsCount = 0;

var rockBtn = document.querySelector("#rock");
var paperBtn = document.querySelector("#paper");
var scissorBtn = document.querySelector("#scissors");

let statementOfRound = document.querySelector("#statementOfMatch");
let playerWins = document.querySelector("#player-wins");
let computerWins = document.querySelector("#computer-wins");

playerWins.textContent = playerWinsCount;
computerWins.textContent = computerWinsCount;

rockBtn.addEventListener("click", getBothChoicesAndPlayRound);
paperBtn.addEventListener("click", getBothChoicesAndPlayRound);
scissorBtn.addEventListener("click", getBothChoicesAndPlayRound);
