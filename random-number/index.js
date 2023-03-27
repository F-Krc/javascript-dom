function randomNum() {
  // generate a random number between 1 and 10
  let randomNumber = Math.ceil(Math.random() * 10);
  return randomNumber;
}

// let counter = 0;
// for(let i = 0; i < 200; i++) {
//   console.log(randomNum())
// }

function guessingGame() {
  // your code here
  let number = randomNum();
  let guessNumber = window.prompt('Guess a number between 1 - 10: ');
  counter++;
  if (guessNumber == number) {
    return alert(`Success, the number was ${number}! Attemps : ${counter}`);
  } else if (counter < 3) {
    alert(`Wrong!!! Try Again!`);
    guessingGame();
  } else {
    alert(`Sorry, you failed to guess the number in three attempts. The number was ${number}!`);
  }
}

guessingGame();
