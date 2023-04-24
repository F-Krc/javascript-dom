# Currency converter
[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)


Create a currency converter webpage. The page should convert the given currency to the chosen one.

- In the interface already set up in `index.html` the user can select a crypto currency and input the price
- The user will be able to convert the crypto currency into another selected currency e.g. USD/EUR etc
- Don't change the `index.html` file
- Write your code in `main.js` that should display the conversion result to the user when they press the **Convert** button

## Instructions

- Use the coinbase API to get the spot price; https://docs.cloud.coinbase.com/sign-in-with-coinbase/docs/api-prices#get-spot-price
  - Note: some APIs have usage limitations; too many requests too quickly might limit your access
  - Example query: https://api.coinbase.com/v2/prices/LTC-EUR/spot

(ignore dropdown values):

![preview](./demo.gif)

[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.


### API Fetch

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status0.svg) | API is called with correct URL params |

### Conversion

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status1.svg) | App performs currency conversion and displays correct result to user |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=Browser-Crypto-CurrencyConverter)


[//]: # (autograding info end)