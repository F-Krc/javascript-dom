# Extreme Travel Website!
[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)


**Instructions**:
* Use only JavaScript to solve the tasks, no changes in the CSS.

* Select the `header` that is the **closest** parent of the `h1` heading. Give the `header` a solid border of 5px. ![alt text](images/header.png "Header")

* If the `.info` section contains an element with the class `.info-package`, select all `.package-title` elements and give the previous sibling element of each a border. ![alt text](images/packages.png "Packages")

* For each info label check if it matches the selector `.mild`. If so, give the label a `yellow` solid border. If the label matches the `.intense` selector, give the label an `orange` solid border. If the class does not match either, give the label a red solid border. ![alt text](images/packages.png "Packages")

* Add a copy of all the children of `.nav-list` to the footer's `.site-map`. Note: the `.nav-list` should keep its children. ![alt text](images/footer.png "Footer")

**Bonus**

Analogous to the previous task: Move the list elements from `navList` to `siteMap` (i.e. no copy).
Comment out the previous For loop to test it

After you completed the assignment and published the solution branch, you can create a new branch `feature/restyle` and change the design of the landing-page. You can publish it on GitHub Pages when you are satisfied with the result.


**Notes**:
* Deadline: ~2hrs.
* See images for reference.

[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.


### Header

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status0.svg) | closest parent `header` to `h1` has border style `5px solid rgb` |

### Info Section

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status1.svg) | previous sibling of `.package-title` has border style `2px solid #072F5F` |

### Labels

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status2.svg) | `.mild` and `.intense` labels have `yellow` or `orange` border |

### Footer Navigation

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status3.svg) | Footer `.site-map` contains copy of children of `.nav-list`. |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=SPA-DOM-Traversing)


[//]: # (autograding info end)