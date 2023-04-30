'use strict';

// *************************************************  STEP - 01  ************************************
// Setting All DOM Elements using variables
const score_0_El = document.getElementById('score--0');
const score_1_El = document.getElementById('score--1');

const dice_El = document.querySelector('.dice');

const btn_New = document.querySelector('.btn--new');
const btn_Roll = document.querySelector('.btn--roll');
const btn_Hold = document.querySelector('.btn--hold');

const currentScore_0_El = document.getElementById('current--0');
const currentScore_1_El = document.getElementById('current--1');

const player_0 = document.querySelector('.player--0');
const player_1 = document.querySelector('.player--1');

let totalScores = [0, 0];
let playing = true;
let activePlayer = 0;
let currentScore = 0;

const init = () => {
  totalScores = [0, 0];
  score_0_El.textContent = 0;
  score_1_El.textContent = 0;
  dice_El.classList.add('hidden');

  currentScore_0_El.textContent = 0;
  currentScore_1_El.textContent = 0;

  player_0.classList.remove('player--winner');
  player_1.classList.remove('player--winner');
  player_0.classList.add('player--active');
  player_1.classList.remove('player--active');

  playing = true;
  activePlayer = 0;
  currentScore = 0;
};

// Setting Starting Conditions
init();

const switchPlayers = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  // Switch to the next player
  activePlayer = activePlayer === 0 ? 1 : 0;
  // reset Score = 0
  currentScore = 0;
  // Making Visual Change
  player_0.classList.toggle('player--active');
  player_1.classList.toggle('player--active');
};

// *************************************************  STEP - 02  ************************************

btn_Roll.addEventListener('click', () => {
  if (playing) {
    // Generate a new Dice Roll Number
    const dice_roll = Math.ceil(Math.random() * 6);
    console.log(dice_roll);
    // Display Dice
    dice_El.src = `dice-${dice_roll}.png`;
    dice_El.classList.remove('hidden');
    // check for 1: if true, switch to next player
    if (dice_roll !== 1) {
      // Add dice to current score
      currentScore += dice_roll;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayers();
    }
  }
});

// *************************************************  STEP - 03  ************************************
// When user click Hold Button

btn_Hold.addEventListener('click', () => {
  if (playing) {
    // Add current score to active player score
    totalScores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      totalScores[activePlayer];
    // check if the player score is >= 100 , If yes Finish the gamme
    if (totalScores[activePlayer] >= 100) {
      dice_El.classList.add('hidden');
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
    } else {
      // else Switch to the next player
      switchPlayers();
    }
  }
});

btn_New.addEventListener('click', init);
