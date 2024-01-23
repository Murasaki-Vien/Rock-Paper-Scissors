const rockBtn = document.querySelector("#button1");
const paperBtn = document.querySelector("#button2");
const scissorsBtn = document.querySelector("#button3");
const playerScorePara = document.getElementById("player-score-counter");
const computerScorePara = document.getElementById("computer-score-counter");
const announceDiv = document.getElementById("announceDiv");
const playerChoiceImg = document.getElementById("playerChoice");
const computerChoiceImg = document.getElementById("computerChoice");
const overlay = document.getElementById("overlay");
const playAgainModal = document.getElementById("modal");
const playAgainBtn = document.getElementById("play-again");
const isGameDoneMsg = document.getElementById("isGameDone");

let playerScore = 0;
let computerScore = 0;

rockBtn.addEventListener("click", () => handleClick("ROCK"));
paperBtn.addEventListener("click", () => handleClick("PAPER"));
scissorsBtn.addEventListener("click", () => handleClick("SCISSORS"));
playAgainBtn.addEventListener("click", gameReset);

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
  return playerScore === 3 || computerScore === 3;
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
