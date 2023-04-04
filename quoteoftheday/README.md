# Quote of the Day
[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)


Create random quote app that shows a random quote when ever the user loads the App(page) or clicks the 'get random quote' button.

1.  Create a function that returns a random quote from the array of
    quotes that's given in `js/index.js`. Remember that there's a nice function for
    random numbers in the MDN documentation for `Math.random()`.

**Note:** _Sometimes it's a good idea to create multiple functions that each
do one specific thing only, to make the code more readable and
easier to maintain / extend._

2.  Add a 'Random Quote' button as `button` or `input` element beneath the quote element. When the button is clicked, a new quote should be generated.

3.  **Optional:** Style to your pleasing & feel free to load/use bootstrap via CDN.


**BONUS** (Please do as much of this as possible)

- No repetition of quotes: If the user presses the button, a quote should always appear that the user has not yet seen. Only when he or she has seen all the quotes from the array, the quotes may be repeated

- Make the input field read only

- Five quotes (heavy): Add a second button ("5 quotes"). If this is clicked, the user will be shown 5 quotes one after the other, each of which can be seen for 5 seconds. Here window.setTimeout can help you

- Style the app using CSS. I like to use Bootstrap via CDN.



> Hint: Refer to the representation below, for an idea of what your result should look like.

![demo](demo.gif)

[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.


### Quote Generator

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status0.svg) | 'Random Quote' button as `button` or `input` is present |
| ![Status](../../blob/badges/.github/badges/main/status1.svg) | New quote is generated when button is clicked |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=Browser-QuoteOfTheDay)


[//]: # (autograding info end)