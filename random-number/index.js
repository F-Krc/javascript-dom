function randomNum() {
  // generate a random number between 1 and 10
  let num = Math.ceil(Math.random() * 10);
  return num;
}

let counter = 0;
 
guessingGame();

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
