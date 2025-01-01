function pickComputerMove() {
  let computerMove = '';

  const randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1/3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2/3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  return computerMove
}

function playGame(playerMove) {
  let result = '';

  const computerMove = pickComputerMove();

  if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie';
    } else if (computerMove === 'paper') {
      result = 'You lose'
    } else if (computerMove === 'scissors') {
      result = 'You win'
    }

  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win'
    } else if (computerMove === 'paper') {
      result = 'Tie'
    } else if (computerMove === 'scissors') {
      result = 'You lose'
    }

  } else if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose'
    } else if (computerMove === 'paper') {
      result = 'You win'
    } else if (computerMove === 'scissors') {
      result = 'Tie'
    }
  }

  document.querySelector('.js-moves').innerHTML = `You <img src="${playerMove}.png" class="moves"> - <img src="${computerMove}.png" class="moves"> Computer`

  document.querySelector('.js-result').innerHTML = `${result}!`;

  if (result === 'You win') {
    score.win++;
  } else if (result === 'You lose') {
    score.loss++;
  } else if (result === 'Tie') {
    score.tie++;
  }

  displayScore();
}

let score = {
  win: 0,
  loss: 0,
  tie: 0
};

function displayScore () {
  document.querySelector('.js-score').innerHTML = `Wins: ${score.win}, Losses: ${score.loss}, Ties: ${score.tie}`;
}

let isAutoPlaying = false;
let intervalId;

function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(() => {
      const computerMove = pickComputerMove();
      playGame(computerMove);
    }, 2000);
    isAutoPlaying = true;

    document.querySelector('.js-auto-play').innerHTML = 'Stop playing';
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
    
    document.querySelector('.js-auto-play').innerHTML = 'Auto play';
  }
}