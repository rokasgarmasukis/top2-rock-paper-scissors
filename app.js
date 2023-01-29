const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;

function getComputerChoice() {
  return Math.round(Math.random() * 2) + 1;
}

function getPlayerChoice() {
  let choice = 0;
  while (true) {
    let input = prompt(
      "You choice (enter number): Rock - 1, Paper - 2, Scissors - 3"
    );
    if (input === "1" || input === "2" || input === "3") {
      choice = parseInt(input);
      break;
    }
  }
  return choice;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Equal";
  }

  if (playerSelection === ROCK && computerSelection === PAPER) {
    return "You lose! Paper beats Rock";
  }

  if (playerSelection === PAPER && computerSelection === SCISSORS) {
    return "You lose! Scissors beats Paper";
  }

  if (playerSelection === SCISSORS && computerSelection === ROCK) {
    return "You lose! Rock beats Scissors";
  }

  if (computerSelection === ROCK && playerSelection === PAPER) {
    return "You win! Paper beats Rock";
  }

  if (computerSelection === PAPER && playerSelection === SCISSORS) {
    return "You win! Scissors beats Paper";
  }

  if (computerSelection === SCISSORS && playerSelection === ROCK) {
    return "You win! Rock beats Scissors";
  }
}

function game() {
  let winsPlayer = 0;
  let winsComputer = 0;
  for (let i = 0; i < 5; i++) {
    let computerSelection = getComputerChoice();
    let playerSelection = getPlayerChoice();
    let result = playRound(playerSelection, computerSelection);
    alert(result);
    result.slice(4, 7) === "win" ? winsPlayer++ : winsComputer++;
  }
  console.log(`Wins player: ${winsPlayer}, wins computer: ${winsComputer}`);
}

game();
