const rockBtn = document.querySelector("#button1");
const paperBtn = document.querySelector("#button2");
const scissorsBtn = document.querySelector("#button3");
const playerScorePara = document.getElementById("player-score-counter");
const computerScorePara = document.getElementById("computer-score-counter");
const announceDiv = document.getElementById("announceDiv");
const playerChoiceImg = document.getElementById("playerChoice");
const computerChoiceImg = document.getElementById("computerChoice");
const overlay = document.getElementById("overlay");
const playAgainModal = document.getElementById("playAgainModal");
const playAgainBtn = document.getElementById("play-again");
const isGameDoneMsg = document.getElementById("isGameDone");
const gameSettings = document.getElementById("gameSettings");
const gameSettingsModal = document.getElementById("gameSettingsModal");
const closebtn = document.getElementById("closebtn");
const player = document.getElementById("player");
const playerName = document.getElementById("playerName");
const numpoints = document.getElementById("numpoints");
const changePoints = document.getElementById("changePoints");
const saveChangesbtn = document.getElementById("saveChanges");

let playerScore = 0;
let computerScore = 0;
let pointsToWin = 3;

rockBtn.addEventListener("click", () => handleClick("ROCK"));
paperBtn.addEventListener("click", () => handleClick("PAPER"));
scissorsBtn.addEventListener("click", () => handleClick("SCISSORS"));
playAgainBtn.addEventListener("click", gameReset);
gameSettings.addEventListener("click", openSettings)
closebtn.addEventListener("click", closeSettings)
saveChangesbtn.addEventListener("click", saveChanges)

function handleClick(playerSelect) {
  if (isGameOver()) {
    setMessage();
  }

  const computerSelect = getChoices();
  getResult(playerSelect, computerSelect);
  compareChoice(playerSelect, computerSelect);
  updateScore();

  if (isGameOver()) {
    setMessage();
    return;
  }
}

function getResult(playerSelect, computerSelect) {
  switch (playerSelect) {
    case "ROCK":
      playerChoiceImg.src = "assets/svg/Landscape.svg";
      break;
    case "PAPER":
      playerChoiceImg.src = "assets/svg/Paper.svg";
      break;
    case "SCISSORS":
      playerChoiceImg.src = "assets/svg/Scissor.svg";
      break;
  }

  switch (computerSelect) {
    case "ROCK":
      computerChoiceImg.src = "assets/svg/Landscape.svg";
      break;
    case "PAPER":
      computerChoiceImg.src = "assets/svg/Paper.svg";
      break;
    case "SCISSORS":
      computerChoiceImg.src = "assets/svg/Scissor.svg";
      break;
  }
}

// for the computer
function getChoices() {
  let randNum = Math.floor(Math.random() * 6);
  switch (randNum) {
    case 0:
      return "ROCK";
    case 1:
      return "PAPER";
    case 2:
      return "SCISSORS";
    case 3:
      return "PAPER";
    case 4:
      return "SCISSORS";
    case 5:
      return "ROCK";
  }
}

function compareChoice(playerSelect, computerSelect) {
  if (playerSelect === computerSelect) {
    announceDiv.textContent = "We Have A Tie";
  } else if (
    (playerSelect === "ROCK" && computerSelect === "SCISSORS") ||
    (playerSelect === "PAPER" && computerSelect === "ROCK") ||
    (playerSelect === "SCISSORS" && computerSelect === "PAPER")
  ) {
    announceDiv.textContent = `${playerSelect} beats ${computerSelect}`;
    playerScore++;
    console.log(`Player Score = ${playerScore}`);
    console.log(`Computer Score = ${computerScore}`);
  } else {
    announceDiv.textContent = `${computerSelect} beats ${playerSelect}`;
    computerScore++;
    console.log(`Player Score = ${playerScore}`);
    console.log(`Computer Score = ${computerScore}`);
  }
}

function updateScore() {
  playerScorePara.textContent = `${playerScore}`;
  computerScorePara.textContent = `${computerScore}`;
}

function isGameOver() {
  return playerScore === pointsToWin || computerScore === pointsToWin;
}

function setMessage() {
  return playerScore > computerScore
    ? ((announceDiv.textContent = "You Won!"),
      overlay.classList.add("active"),
      playAgainModal.classList.add("active"),
      (isGameDoneMsg.textContent = "You Won!"))
    : ((announceDiv.textContent = "Computer Won! try again!"),
      overlay.classList.add("active"),
      playAgainModal.classList.add("active"),
      (isGameDoneMsg.textContent = "You Lost!"));
}

function gameReset() {
  playerScore = 0;
  computerScore = 0;
  updateScore();

  playerChoiceImg.src = "assets/svg/shield-question.svg";
  computerChoiceImg.src = "assets/svg/shield-question.svg";
  playAgainModal.classList.remove("active");
  overlay.classList.remove("active");
  announceDiv.textContent = "Choose Your Weapon!";
}

function openSettings(){
  overlay.classList.add("active")
  gameSettingsModal.classList.add("active")
}

function closeSettings(){
  overlay.classList.remove("active")
  gameSettingsModal.classList.remove("active")
}

function saveChanges(){
  if(playerName.value === ""){
    player.textContent = "You"
  }else{
    player.textContent = `${playerName.value}`;
  }

  if(parseInt(changePoints.value) === 0){
    numpoints.textContent = "3"
  }else{
    pointsToWin = parseInt(changePoints.value);
    numpoints.textContent = `${changePoints.value}`
  }
  overlay.classList.remove("active")
  gameSettingsModal.classList.remove("active")
}