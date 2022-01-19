computerPlay();
function computerPlay(){
  num = Math.floor(Math.random() * 4)
  if (num === 1){
    return 'rock';
  } else if (num === 2){
    return 'paper';
  } else if (num === 3){
    return 'scissors'
  } //Generating and returning a random move.
} 
let result = ''
function playRound(computerSelection, playerSelection){
  if (computerSelection === playerSelection){
    result = "its a tie!";
  } else if (computerSelection === 'rock' && playerSelection === 'paper'){
    result = "player win (paper)"
  } else if (computerSelection === 'rock' && playerSelection === 'scissors'){
    result = "computer win (rock)"
  } else if (computerSelection === 'paper' && playerSelection === 'rock'){
    result = "computer win (paper)"
  }  else if (computerSelection === 'paper' && playerSelection === 'scissors'){
    result = "player win (scissors)"
  } else if (computerSelection === 'scissors' && playerSelection === 'paper'){
    result = "computer win (scissors)"
  } else if (computerSelection === 'scissors' && playerSelection === 'rock'){
    result = "player win (rock)"
  } return result;
}

let playerScore = 0;
let computerScore = 0;


function game(){
  const playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
  const computerSelection = computerPlay();
  console.log("Player: " + playerSelection, "Computer: " + computerSelection)
  console.log(playRound(computerSelection,playerSelection))
  if (result.slice().split(' ')[0] === 'player'){
    playerScore++
  } else if (result.slice().split(' ')[0] === 'computer'){
    computerScore++
  }
  console.log("playerscore: " + playerScore)
  console.log("computerscore: " + computerScore)
}

while (playerScore < 5 && computerScore < 5){
  game() 
} 

if (playerScore < computerScore){
  console.log("Computer Wins! " + computerScore + "-" + playerScore)
} if (playerScore > computerScore){
  console.log("Player Wins! " + playerScore + "-" + computerScore)
}


