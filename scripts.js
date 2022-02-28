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
    let msg = "";
    let playerPick = playerSelection.toUpperCase();
    let computerPick = computerSelection.toUpperCase();
    // status 0 = tie, win = 1, lose = 2
    let roundStatus = 0;
    let strWin = `You win! ${playerPick} beats ${computerPick}!`;
    let strLose = `You lose! ${computerPick} beats ${playerPick}!`;

    if (playerPick == computerPick) {
        msg =  `It's a draw! ${playerPick} ties ${computerPick}!`;
    } else if (playerPick == "ROCK" && computerPick == "SCISSORS") {
        msg = strWin;
        roundStatus = 1;
    } else if (playerPick == "ROCK" && computerPick == "PAPER") {
        msg = strLose;
        roundStatus = 2;
    } else if (playerPick == "SCISSORS" && computerPick == "ROCK") {
        msg = strLose;
        roundStatus = 2;
    } else if (playerPick == "SCISSORS" && computerPick == "PAPER") {
        msg = strWin;
        roundStatus = 1;
    } else if (playerPick == "PAPER" && computerPick == "ROCK") {
        msg = strWin;
        roundStatus = 1;
    } else if (playerPick == "PAPER" && computerPick == "SCISSORS") {
        msg = strLose;
        roundStatus = 2;
    }
    console.log(msg);
    return roundStatus;
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
    const MAX_ROUNDS = 5;
    let playerScore = 0;
    let computerScore = 0;
    let tieScore = 0;

    for (let i=0; i < MAX_ROUNDS; i++) {
        let answer = window.prompt(`Please enter rock, paper, or scissors.`);
        console.log(`Round Count: ${i+1}`);
        console.log(`You entered: ${answer}`);
        let roundStatus = (playRound(answer, computerPlay()) );

        if (roundStatus == 2) {
            computerScore++;
        } else if (roundStatus == 1) {
            playerScore++;
        } else {
            tieScore++;
        }
        console.log(`Player Score: ${playerScore}\nComputer Score: ${computerScore}`);
        console.log("-----------------------------------------------------");
    }
}