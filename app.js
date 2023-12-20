const options = ["rock", "paper", "scissors"];

// function to get the computer choice
function getComputerChoice() {
  const choice = options[Math.floor(Math.random() * 3)];
  return choice;
}

// function to check if it's a tie, a win, or a lose
function checkWinner(player1, computer) {
  if (player1 == computer) {
    return "Tie!";
  } else if (
    (computer == "rock" && player1 == "scissors") ||
    (computer == "scissors" && player1 == "paper") ||
    (computer == "paper" && player1 == "rock")
  ) {
    return "Computer";
  } else {
    return "Player";
  }
}

// function to check the winner
function gameRound(player1, computer) {
  const result = checkWinner(player1, computer);
  if (result == "Tie!") {
    return "It's a tie game!";
  } else if (result == "Player") {
    return `You win! ${player1} beats ${computer}.`;
  } else {
    return `You lose! ${computer} beats ${player1}.`;
  }
}

// function to prompt the player for their choice
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

// function to play the game
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
    } else if (checkWinner(player1, computer) == "Computer") {
      computerScore++;
    }
  }
  console.log(playerScore);
  console.log(computerScore);
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
