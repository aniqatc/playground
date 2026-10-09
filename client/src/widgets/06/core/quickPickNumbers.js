import lotteryContext from './context';
const { randomButton, content, mainNumbers, specialBall, numberInputs } = lotteryContext;

export default function initializeRandomButton() {
  randomButton.addEventListener('click', () => {
    numberInputs.forEach((input) => input.classList.remove('error'));
    generateRandomNumbers();
  });
}

function generateRandomNumbers() {
  const currentGame = content.dataset.game;
  const mainMaxValue = currentGame === 'megamillion' ? 70 : 69;
  const specialMaxValue = currentGame === 'megamillion' ? 25 : 26;

  const randomMainNumbers = getUniqueMainNumbers(1, mainMaxValue).sort((a, b) => a - b);
  const randomSpecialNumber = getRandomNumber(1, specialMaxValue);
  const inputs = lotteryContext.widget.querySelector('.lottery-input-container');

  mainNumbers.forEach((input, index) => {
    input.value = randomMainNumbers[index];
  });
  specialBall.value = randomSpecialNumber;

  // replay the little "roll" animation on the number boxes
  inputs.classList.remove('rolling');
  void inputs.offsetWidth;
  inputs.classList.add('rolling');
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getUniqueMainNumbers(min, max) {
  const numbers = new Set(); // removes duplicates
  while (numbers.size < 5) {
    numbers.add(getRandomNumber(min, max));
  }
  return Array.from(numbers);
}
