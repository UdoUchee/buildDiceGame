# *#buildJs*
# Building a simple Dice Game
*2022-01-03*

![Two dice rolling 6's!](/dice.jpg "Willi Heidelbach")

**This simple Dice game allows two playes to keep rolling the dice until a player gets a total of 20 points and is declared the winner.**


**#CodeSteps**

1. Create variables for the game state
1. Create variables to store references to the necessary DOM nodes
1. Hook up a click event listener to the Roll Dice Button. Log out a random number between 1 and 6. 
    > Hint: use Math.floor() and Math.random()
1. Find out which players turn it is
1. log out the value e.g. **"Player 1 rolled 5"**
1. Switch the turn back to the other player
1. Display the dice number instead of logging it out
1. Use the 'active' class to show which player's turn it is 
    > Hint: use the .classList.remove() and classlist.add() methods*
1. Update the "message" DOM node so that it states who's turn it is
1. Update the scores for each player
1. Display the scores in their scoreboards
1. Check if a player has won. If so, change the message to "Player X has won!"
1. Hide the Roll Dice Button and show the Reset Button. Hint: use display none/block
1. Hook a click event listener up with the Reset Button
1. Create a reset() function that resets the game
1. Invoke the reset() function when the Reset Button is clicked



> For more check : 
 -  [Math method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
 -  [ClassList method](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)

## Languages used
	- HTML
	- CSS
	- JavaScript
## Prerequisties
IDE

## Credits
[Per Harald Borgen](https://scrimba.com/allcourses)

## To DO
  - Change dice rolled to show image of dice not number
  - Make the game fair "each player must have equal roll, and the closer to 20 wins"