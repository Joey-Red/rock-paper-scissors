
const playerSelection = 'asdasd';
function choose(bonk){
  computerPlay();
  let playerSelection = bonk;
  playerMove.textContent = `Player Move: ${playerSelection}`;
  computerMove.textContent = `Computer Move: ${computerChoice}`;
  playRound(playerSelection, computerChoice);
}
const display = document.querySelector(".display")
const playerMove = document.createElement('div');
playerMove.classList.add('playerMove');
playerMove.textContent = `Player Move: `;
display.appendChild(playerMove)

//default values for scores
let playerScore = 0;
let computerScore = 0;

function results (result){
if (result.slice().split(' ')[0] === 'player'){
    playerScore++, playerScoreDiv.textContent = `Player Score: ${playerScore}`;
display.appendChild(playerScoreDiv);
  } else if (result.slice().split(' ')[0] === 'computer'){
    computerScore++, computerScoreDiv.textContent = `Computer Score: ${computerScore}`;
} return playerScore, computerScore;
}
let computerChoice = ''
// computerPlay(); NEEDS TO BE CALLED AFTER PLAYER CHOOSES.
function computerPlay(){
  num = Math.floor(Math.random() * 4)
  if (num === 1){
    computerChoice = 'rock';
  } else if (num === 2){
    computerChoice = 'paper';
  } else if (num === 3){
    computerChoice = 'scissors'
  } //Generating and returning a random move.
  return computerChoice;
} 

let gameWinner = ''

let computerSelection = computerChoice;
const rock = document.querySelector('#rock');
rock.onclick = () => choose('rock');
const paper = document.querySelector('#paper');
paper.onclick = () => choose('paper');
const scissors = document.querySelector('#scissors');
scissors.onclick = () => choose('scissors');

const computerMove = document.createElement('div');
computerMove.classList.add('computerMove');
computerMove.textContent = `Computer Move: ${computerSelection}`;
display.appendChild(computerMove)

const roundWinner = document.createElement('div');
roundWinner.classList.add('roundWinner');
display.appendChild(roundWinner);
roundWinner.textContent = `Round Winner: `;
// Game winner div stuff

const winner = document.querySelector('.winner')
let gameWinnerDiv = document.createElement('div');
gameWinnerDiv.classList.add('gameWinnerDiv');
gameWinnerDiv.textContent = `Game Winner: ${gameWinner}`;
winner.appendChild(gameWinnerDiv);
// Game winner div stuff


//Game Logic. 
let result = ''

  function playRound(computerSelection, playerSelection){
    while (playerScore <= 4 && computerScore <= 4){
    if (computerSelection === playerSelection){
      result = "its a tie!";
    } else if (computerSelection === 'rock' && playerSelection === 'paper'){
      result = "player win"
    } else if (computerSelection === 'rock' && playerSelection === 'scissors'){
      result = "computer win"
    } else if (computerSelection === 'paper' && playerSelection === 'rock'){
      result = "computer win"
    }  else if (computerSelection === 'paper' && playerSelection === 'scissors'){
      result = "player win"
    } else if (computerSelection === 'scissors' && playerSelection === 'paper'){
      result = "computer win"
    } else if (computerSelection === 'scissors' && playerSelection === 'rock'){
      result = "player win"
    } return result, roundWinner.textContent = `Round Winner: ${result}`, results(result)
  } 
  if (computerScore > playerScore){
    gameWinner = "Computer Wins";
  } else {
    gameWinner = "Player Wins";
  } return gameWinner, gameWinnerDiv.textContent = `Game Winner: ${gameWinner}`
}


//divs holding scores
const pscore = document.querySelector('.pscore')
let playerScoreDiv = document.createElement('div');
playerScoreDiv.classList.add('playerScoreDiv');
playerScoreDiv.textContent = `Player Score: ${playerScore}`;
pscore.appendChild(playerScoreDiv);

const cscore = document.querySelector('.cscore')
let computerScoreDiv = document.createElement('div');
computerScoreDiv.classList.add('computerScoreDiv');
computerScoreDiv.textContent = `Computer Score: ${computerScore}`;
display.appendChild(computerScoreDiv);
