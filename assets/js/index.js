const rockBtn = document.querySelector("#button1");
const paperBtn = document.querySelector("#button2");
const scissorsBtn = document.querySelector("#button3");
const playerScorePara = document.getElementById('player-score-counter')
const computerScorePara = document.getElementById('computer-score-counter')


let playerScore = 0;
let computerScore = 0;


rockBtn.addEventListener("click", () => handleClick("ROCK"));
paperBtn.addEventListener("click", () => handleClick("PAPER"));
scissorsBtn.addEventListener("click", () => handleClick("SCISSORS"));

function handleClick(playerSelect) {

  const computerSelect = getChoices();
  getResult(playerSelect, computerSelect);
  compareChoice(playerSelect, computerSelect)
  updateScore()

}

function getResult(playerSelect, computerSelect) {
  switch (playerSelect) {
    case "ROCK":
      console.log("ROCK");
      break;
    case "PAPER":
      console.log("PAPER");
      break;
    case "SCISSORS":
      console.log("SCISSORS");
      break;
  }

  switch (computerSelect) {
    case "ROCK":
      console.log("COMPUTER ROCK");
      break;
    case "PAPER":
      console.log("COMPUTER PAPER");
      break;
    case "SCISSORS":
      console.log("COMPUTER SCISSORS");
      break;
  }
}

// for the computer
function getChoices() {
  let randNum = Math.floor(Math.random() * 3);
  switch (randNum) {
    case 0:
      return "ROCK";
    case 1:
      return "PAPER";
    case 2:
      return "SCISSORS";
  }
}

function compareChoice(playerSelect, computerSelect){
  if(playerSelect === computerSelect){
    console.log("Tie")
  }
  else if((playerSelect === "ROCK" && computerSelect === "SCISSORS") || (playerSelect === "PAPER" && computerSelect === "ROCK") || (playerSelect === "SCISSORS" && computerSelect === "PAPER")){
    console.log("Player WINS");
    playerScore++;
    console.log(`Player Score = ${playerScore}`);
    console.log(`Computer Score = ${computerScore}`);

    if(isGameOver()){
      console.log("WE HAVE A WINNER")
    }
  }
  else{
    console.log("COMPUTER WINS");
    computerScore++;
    console.log(`Player Score = ${playerScore}`);
    console.log(`Computer Score = ${computerScore}`);

    if(isGameOver()){
      console.log("WE HAVE A WINNER")
    }
  }
}

function updateScore(){
  playerScorePara.textContent = `${playerScore}`
  computerScorePara.textContent = `${computerScore}` 
} 

function isGameOver(){
  return playerScore === 3 || computerScore === 3
}
