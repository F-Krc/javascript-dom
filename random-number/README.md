# The Guessing Game
[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)

## Create a guessing game for players. 

* Create a function named `randomNum()` without parameters.
* The function `randomNum()` should return a random number between __1__ and __10__.
* Create another function `guessingGame()` and Make the player guess the number in a *prompt*, then write a code that compares the *prompt* value the user inserted with the random number returned by the function `randomNum()`.
* The player has 3 guessing attempts. Store the number of remaining attempts in a variable named `counter`


![alt text](./images/start-game.png "Starting Game") 

* If the number chosen by the player matches the random number returned by the function `randomNum()`, a message that says __"Success!"__ should be displayed in the prompt dialog in addition to the number of attempts the player used. 

![alt text](./images/game-win.png "Won Game") 

* If the player's guess is incorrect, the message, __"Wrong. Try again!"__ should be displayed to the player in the prompt dialog. 

![alt text](./images/wrong-answer.png "Wrong Answer") 

* If the player fails to guess the number after three attempts, the message __"Sorry, you failed to guess the number in three attempts."__ in addition to the correct random number returned by the function `randomNum()` should be displayed in the prompt dialog.

![alt text](./images/game-lost.png "Lost Game") 


**See the images for reference**

[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.


### Guessing Game

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status0.svg) | `randomNum` returns a random number between 1 and 10 |
| ![Status](../../blob/badges/.github/badges/main/status1.svg) | three atemps should be available |
| ![Status](../../blob/badges/.github/badges/main/status2.svg) | success message is displayed upon correct guess |
| ![Status](../../blob/badges/.github/badges/main/status3.svg) | failure message is displayed upon three incorrect guesses |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=Browser-DOM-window)


[//]: # (autograding info end)