let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

const compareGuesses = (userGuess, computerGuess, target) => {
  userDiff = Math.abs(userGuess - target);
  compDiff = Math.abs(computerGuess - target);
  if (userDiff === compDiff) {
    return true;
  }
  else if (userDiff < compDiff) {
    return true;
  }
  else {
    return false;
  }
}

const updateScore = winner => {
  if (winner === 'human') {
    humanScore += 1;
  }
  else {
    computerScore += 1;
  }
}

const advanceRound = () => {
  currentRoundNumber += 1;
}