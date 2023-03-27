# Menu Styling 
[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)

In the repository, there is an `index.html` starting file which has the skeleton of an online menu. Style the menu by following the instructions below. 

**Rules**: 
* All changes to the menu should be done in JavaScript! No CSS!!
* The page should be responsive.

**Instructions**: 
* Change the font of the body element. 
* Center the text of h1 on the page.
* The menu headings have the class `.category`. Select the elements by class name. Then, change the `color` and `font-style` of each element. 
* Create a function named `colorGenerator` that returns a random color. The returned color should also include transparency.
* Select the unordered lists with the class `.food-category`. Give each list a different background color using the function that you created. 
* Align the `.food-category` lists in a row on desktop. Make sure that the page is responsive and also works on mobile.
* Select the warning at the end of the page by its id `#warning`. Select the id without using `querySelector`. Change the size and font of `.warning`.
* Select all _even_ `.allergy-info` items. Give the even items a different background color.
* Make `.allergy-warning` appear as a column at the center of the page.
* The descriptions in the footer should also be styled, e.g. a rounded border with a background color. They should appear in a column for mobile and in a row for desktop.

**Images**:

![alt text](./images/menu-mobile.png "Mobile Menu")

![alt text](./images/menu-desktop.png "Mobile Menu")

**Notes**:
* Follow the instructions to create a menu. You can add any additional styling. 
* Deadline: 2hrs.
* See reference images.

[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.


### Browser-DOM-querying

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status0.svg) | Page Shouldn't contain a CSS Stylesheet |
| ![Status](../../blob/badges/.github/badges/main/status1.svg) | Element with class '.title' should be centered |
| ![Status](../../blob/badges/.github/badges/main/status2.svg) | Elements with class '.category' should have custom font size |
| ![Status](../../blob/badges/.github/badges/main/status3.svg) | Element with ID '#warning' should have custom font size |
| ![Status](../../blob/badges/.github/badges/main/status4.svg) | `colorGenerator()` fuction should exist |
| ![Status](../../blob/badges/.github/badges/main/status5.svg) | Elements with class `.food-category` should each have unique background color |
| ![Status](../../blob/badges/.github/badges/main/status6.svg) | Each even element with class `.allergy-info` should have unique background color |
| ![Status](../../blob/badges/.github/badges/main/status7.svg) | Elements with class `.allergy-warning` should be layed out as column and centered |
| ![Status](../../blob/badges/.github/badges/main/status8.svg) | Element with class `.footer` should appear as column for mobile and row for desktop |
| ![Status](../../blob/badges/.github/badges/main/status9.svg) | Elements with class `.food-desc` should have rounded corners and have a custom border color |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=Browser-DOM-querying)


[//]: # (autograding info end)