const options = ["rock", "paper", "scissors"];

// a function to get the computer choice
function getComputerChoice() {
  const choice = options[Math.floor(Math.random() * 3)];
  console.log(choice);
  return choice;
}

// a function to check if it's a tie, a win, or a lose
function checkWinner(player1, computer) {
  if (
    (player1 == "rock" && computer == "scissors") ||
    (player1 == "scissors" && computer == "paper") ||
    (player1 == "paper" && computer == "rock")
  ) {
    return player1;
  } else if (
    (computer == "rock" && player1 == "scissors") ||
    (computer == "scissors" && player1 == "paper") ||
    (computer == "paper" && player1 == "rock")
  ) {
    return computer;
  } else {
    return "Tie!";
  }
}

// a function to declare the winner
function gameRound(player1, computer) {
  const result = checkWinner(player1, computer);
  if (result == "Tie!") {
    return "It's a tie game!";
  } else if (result == player1) {
    return `You win! ${player1} beats ${computer}.`;
  } else {
    return `You lose! ${computer} beats ${player1}.`;
  }
}

const player1 = "rock";
const computer = getComputerChoice();
console.log(gameRound(player1, computer));
