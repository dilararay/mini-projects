const buttons = document.querySelectorAll("button");

const resultEl = document.getElementById("result");

const playerScoreEl = document.getElementById("user-score");

const computerScoreEl = document.getElementById("computer-score");

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const result = playRound(button.id, computerPlay());
    resultEl.textContent = result;
    
  });
});

function computerPlay() {
  const choices = ["taş", "kağıt", "makas"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Berabere";
  } else if (
    (playerSelection === "taş" && computerSelection === "makas") ||
    (playerSelection === "kağıt" && computerSelection === "taş") ||
    (playerSelection === "makas" && computerSelection === "kağıt")
  ) {
    playerScore++;
    playerScoreEl.textContent = playerScore;
    return "Sen kazandın! " + playerSelection + "  " + computerSelection;
  } else {
    computerScore++;
    computerScoreEl.textContent = computerScore;
    return "Kaybettin! " + computerSelection + "  " + playerSelection;
  }
}
