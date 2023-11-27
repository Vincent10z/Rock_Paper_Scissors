function getComputerChoice(){

    let randNum = 0;
    let computerSelection = '';
    

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

    randNum = getRandomInt(3);

    if(randNum === 0){
        computerSelection = 'rock';

    }
    else if(randNum === 1){
        computerSelection = 'paper';
    }
    else if(randNum === 2){
        computerSelection = 'scissor';
    }
    else{
        return 0;
    }

    console.log(randNum);
    console.log(computerSelection);

    return computerSelection;
}

function getPlayerChoice(){

    let playerSelection = prompt("Please select your choice of Rock, Paper, or Scissor: ");

    playerSelection = playerSelection.toLowerCase()


    // if(playerSelection !== 'rock' || playerSelection !== 'paper' || playerSelection !== 'scissor'){
    //     console.log("Please Enter a valid selection");
    //     return 1;
    // }

    
    console.log(playerSelection);


    return playerSelection;

}

function playRound(playerSelection, computerSelection){

    let whoWon = '';

    if(playerSelection === computerSelection)
    {
        whoWon = "You Tie!";
        return whoWon;
    }
    else if(playerSelection === 'rock'){
        if(computerSelection === 'paper'){
            whoWon = "You Lose! Paper beats Rock";
            return whoWon;
        }
        if(computerSelection === 'scissor'){
            whoWon = "You Win! Rock beats Scissor";
            return whoWon;
        }
    }
    else if(playerSelection === 'paper'){

        if(computerSelection === 'rock'){
            whoWon = "You Win! Paper beats Rock";
            return whoWon;
        }
        if(computerSelection === 'scissor'){
            whoWon = "You Lose! Scissor beats Paper";
            return whoWon;
        }
    }
    else if(playerSelection === 'scissor'){

        if(computerSelection === 'rock'){
            whoWon = "You Lose! Rock beats Scissor";
            return whoWon;
        }
        if(computerSelection === 'paper'){
            whoWon = "You Win! Scissor beats Paper";
            return whoWon;
        }
    }
  


}

let computerSelection = getComputerChoice();
let playerSelection = getPlayerChoice();
let whoWon = playRound(playerSelection, computerSelection);
console.log(whoWon);