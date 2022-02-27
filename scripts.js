console.log("WELCOME TO ROCK, PAPER, SCISSORS!")

// randomly return 'Rock', 'Paper', or 'Scissors' 
function computerPlay() {
    let str = "";
    // Math.random() * (max-min) + min;     use to get random number range 1-3
    let randomNumber = Math.random() * (4-1) + 1;
    if (randomNumber > 3) { 
        str = "Rock"; 
    } else if (randomNumber > 2) {
        str = "Paper";
    } else {
        str = "Scissors";
    }
    return str;
}

// write a boolean function that plays single round of Rock Paper Scissors
// to check if win, lose, or tie
function playRound (playerSelection, computerSelection) {
    let str = "";
    let playerPick = playerSelection.toUpperCase();
    let computerPick = computerSelection.toUpperCase();
    let strWin = `You win! ${playerPick} beats ${computerPick}!`;
    let strLose = `You lose! ${computerPick} beats ${playerPick}!`;


    if (playerPick == computerPick) {
        str =  `It's a draw! ${playerPick} ties ${computerPick}!`;
    } else if (playerPick == "ROCK" && computerPick == "SCISSORS") {
        str = strWin;
    } else if (playerPick == "ROCK" && computerPick == "PAPER") {
        str = strLose;
    } else if (playerPick == "SCISSORS" && computerPick == "ROCK") {
        str = strLose;
    } else if (playerPick == "SCISSORS" && computerPick == "PAPER") {
        str = strWin;
    } else if (playerPick == "PAPER" && computerPick == "ROCK") {
        str = strWin;
    } else if (playerPick == "PAPER" && computerPick == "SCISSORS") {
        str = strLose;
    }
    return str;
}
/* ~Test playRound function~
const playerSelection = "paper";
const computerSelection = computerPlay();
console.log(`Player:\t\t${playerSelection}\nComputer:\t${computerSelection}`);
console.log(playRound(playerSelection, computerSelection));
*/

// Call playRound function inside of function game() to play a 5 round game
// that keeps score and reports winner or loser at the end.
function game() {
    let maxRounds = 5;
    let playerScore = 0;
    let computerScore = 0;

    let answer = window.prompt(`Please enter rock, paper, or scissors.`);
    console.log(playRound(answer, computerPlay()) );
    console.log(answer);

/*
    for (let i=0; i < maxRounds; i++) {
        

    }
*/    
}