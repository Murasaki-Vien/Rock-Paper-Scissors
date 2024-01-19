const rockBtn = document.querySelector("#button1");
const paperBtn = document.querySelector("#button2");
const scissorsBtn = document.querySelector("#button3");

rockBtn.addEventListener("click", () => handleClick("ROCK"));
paperBtn.addEventListener("click", () => handleClick("PAPER"));
scissorsBtn.addEventListener("click", () => handleClick("SCISSORS"));

function handleClick(playerSelect) {
  const computerSelect = getChoices();
  getResult(playerSelect, computerSelect);
  compareChoice(playerSelect, computerSelect)

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
  }
  else{
    console.log("COMPUTER WINS");
  }
}
