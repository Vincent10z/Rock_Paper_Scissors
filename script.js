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

    if(playerSelection === Null){
        
    }

    playerSelection = playerSelection.toLowerCase()

    console.log(playerSelection);


    return playerSelection;

}

function playRound(playerSelection, computerSelection){



}

let computerSelection = getComputerChoice();
let playerSelection = getPlayerChoice();