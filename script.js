const ROCK = 0;
const PAPER = 1;
const SCISSOR = 2;
const WIN = 1;
const LOSE = - 1;
const TIE = 0;



function getComputerChoice(){

    let randNum = 0;
    let computerSelection = [2];


    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

    randNum = getRandomInt(3);
    console.log(randNum);

    if(randNum === 0){
        computerSelection[0] = ROCK;
    }
    else if(randNum === 1){
        computerSelection[0] = PAPER;
    }
    else if(randNum === 2){
        computerSelection[0] = SCISSOR;
    }
    else{
        return 0;
    }

    return computerSelection;
}

function getPlayerChoice(){
    

    let initialSelection = prompt("Please select your choice of Rock, Paper, or Scissor: ");
    
    initialSelection.toLowerCase();

    // if(initialSelection !== 'rock' || initialSelection !== 'paper' || initialSelection !== 'scissor'){
    //     return "Error with user input!";
    // }
    
    let playerSelection = [];

    if(initialSelection === 'rock'){
        playerSelection[0] = ROCK;
    }
    else if(initialSelection === 'paper'){
        playerSelection[0] = PAPER;
    }
    else if(initialSelection === 'scissor'){
        playerSelection[0] = SCISSOR;
    }
    else{
        return 0;
    }

    console.log(playerSelection[0]);

    return playerSelection;

}

function playRound(playerSelection, computerSelection){

    let whoWon = '';
    let finalResult = [];

    if(playerSelection[0] === computerSelection[0])
    {
        whoWon = "You Tie!";
        let Result = document.getElementById("display");
        Result.textContent = whoWon;

        return TIE;
    }

    if(playerSelection[0] === ROCK ){
        if(computerSelection[0] === PAPER){
            whoWon = "You Lose! Paper beats Rock";
            let Result = document.getElementById("display");
            Result.textContent = whoWon;
            return LOSE;
        }
       else if(computerSelection[0] === SCISSOR){
            whoWon = "You Win! Rock beats Scissor";
            let Result = document.getElementById("display");
            Result.textContent = whoWon;
            return WIN;
        }
    }
    else if(playerSelection[0] === PAPER){

        if(computerSelection[0] === ROCK){
            whoWon = "You Win! Paper beats Rock";
            let Result = document.getElementById("display");
            Result.textContent = whoWon;
            return WIN;
        }
        else if(computerSelection[0] === SCISSOR){
            whoWon = "You Lose! Scissor beats Paper";
            let Result = document.getElementById("display");
            Result.textContent = whoWon;
            return LOSE;
        }
    }
    else if(playerSelection[0] === SCISSOR){

        if(computerSelection[0] === ROCK){
            whoWon = "You Lose! Rock beats Scissor";
            let Result = document.getElementById("display");
            Result.textContent = whoWon;
            return LOSE;
        }
        else if(computerSelection[0] === PAPER){
            whoWon = "You Win! Scissor beats Paper";
            let Result = document.getElementById("display");
            Result.textContent = whoWon;
            return WIN;
        }
    }
}



function game(){

    let playerCount = 0;
    let computerCount = 0;

    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();

    let result = playRound(playerSelection, computerSelection);

    if(result === TIE){
        playerCount += 0;
    }
    else if(result === WIN){
        playerCount += WIN;
    }
    else if(result === LOSE){
        computerCount += WIN;
    }
    else{
        return 'ERROR';
    }

    // for(let i = 0; i < 5; i++){

    //     let playerSelection = getPlayerChoice();
    //     let computerSelection = getComputerChoice();

    //     let result = playRound(playerSelection, computerSelection);

    //     if(result === TIE){
    //         continue;
    //     }
    //     else if(result === WIN){
    //         playerCount += WIN;
    //     }
    //     else if(result === LOSE){
    //         computerCount += WIN;
    //     }
    //     else{
    //         return 'ERROR';
    //     }
    // }

    if(playerCount > computerCount){
        console.log("Player wins! You won " + playerCount + " times, while computer won " + computerCount + " times :)");
    }
    else if(computerCount > playerCount){
        console.log("Computer wins! You won " + playerCount + " times, while computer won " + computerCount + " times :(");
    }
    else{
        console.log("It's a Tie! You won " + playerCount + " times, while computer won " + computerCount + " times");
    }

}