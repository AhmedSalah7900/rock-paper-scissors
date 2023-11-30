const options = ["rock", "paper", "scissors"];

// a function to get the computer choice
function getComputerChoice() {
  const choice = options[Math.floor(Math.random() * 3)];
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

// a function to prompt the player for their choice
function getPlayerChoice() {
  let validInput = false;
  while (validInput == false) {
    const choice = prompt("Rock Paper Scissors");
    if (choice == null) {
      continue;
    }
    const choiceInLower = choice.toLowerCase();
    if (options.includes(choiceInLower)) {
      validInput = true;
      return choiceInLower;
    }
  }
}

// a function to play the game
function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    const player1 = getPlayerChoice();
    const computer = getComputerChoice();
    console.log(gameRound(player1, computer));
    console.log("----------");
    if (checkWinner(player1, computer) == "Player") {
      playerScore++;
    } else {
      computerScore++;
    }
  }
  console.log("Game Over!");
  if (playerScore > computerScore) {
    console.log("You Win!");
  } else if (playerScore < computerScore) {
    console.log("You Lose!");
  } else {
    console.log("Tie!");
  }
}

game();
