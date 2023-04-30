let secretNumber = Math.ceil(Math.random() * 20);
let currentHighScore = 0;
// document.querySelector('.number').textContent = secretNumber;

let score = 20;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

const displayNumber = num => {
  document.querySelector('.number').textContent = num;
};

document.querySelector('.check').addEventListener('click', function () {
  const guessedNumber = Number(document.querySelector('.guess').value);
  // No Input
  if (!guessedNumber) {
    displayMessage('⛔ No Number Entered!');
  }
  // Correct Number
  else if (guessedNumber === secretNumber) {
    displayMessage('🎉 Correct Number!');
    displayNumber(secretNumber);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > currentHighScore) {
      currentHighScore = score;
      document.querySelector('.highscore').textContent = currentHighScore;
    }
  }
  // Incorrect Number
  else if (guessedNumber !== secretNumber) {
    if (score > 1) {
      const msg = guessedNumber > secretNumber ? '📈Too High!' : '📉 Too Low!';
      displayMessage(msg);
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You Lost the Game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  guessedNumber = 0;
  secretNumber = Math.ceil(Math.random() * 20);

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  displayNumber('?');

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
