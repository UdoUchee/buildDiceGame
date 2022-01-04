// 1. Create variables for the game state
let player1Score = 0
let player2Score = 0
let player1Turn = true

// 2. Create variables to store references to the necessary DOM nodes
const messageEl = document.getElementById("message")
const player1ScoreboardEl = document.getElementById("player1Scoreboard")
const player2ScoreboardEl = document.getElementById("player2Scoreboard")
const player1DiceEl = document.getElementById("player1Dice")
const player2DiceEl = document.getElementById("player2Dice")
const rollBtnEl = document.getElementById("rollBtn")
const resetBtnEl = document.getElementById("resetBtn")


/* 3. Hook up a click event listener to the Roll Dice Button. Log out a random
 number between 1 and 6. Hint: use Math.floor() and Math.random() */


rollBtnEl.addEventListener("click", function () {
  const randomNumber = Math.floor(Math.random() * 6) + 1
  console.log(randomNumber)
  
// 4. Find out which players turn it is
// 5. log out the value e.g. "Player 1 rolled 5" > //  console.log("Player-1 rolled " + randomNumber)
  // Hint: use the .classList.remove() and classList.add() methods
  if (player1Turn) {
    player1Score += randomNumber // 10. Update the scores for each player
    player1ScoreboardEl.textContent = player1Score // 11. Display the scores in their scoreboards
    player1DiceEl.textContent = randomNumber // 7. Display the dice number instead of logging it out
    player1DiceEl.classList.remove("active") // 8. Use the 'active' class to show which player's turn it is 
    player2DiceEl.classList.add("active")
    messageEl.textContent = "Player 2 Turn" // 9. Update the "message" DOM node so that it states who's turn it is
  } else {
    player2Score += randomNumber
    player2ScoreboardEl.textContent = player2Score
    player2DiceEl.textContent = randomNumber
    player2DiceEl.classList.remove("active")
    player1DiceEl.classList.add("active")
    messageEl.textContent = "Player 1 Turn"
  }

  if (player1Score >= 20){
    messageEl.textContent = "Player 1 has won! ​🥳​" // 12. Check if a player has won. If so, change the message to "Player X has won!"
    return reset()
  } else if (player2Score >= 20) {
    messageEl.textContent = "Player 2 has won! ​🤩​"
    return reset()
  }

  player1Turn = !player1Turn // 6. Switch the turn back to the other player > ! = opposite of the value to the left of the "!"
})


function reset(){
  rollBtnEl.style.display = "none" // 13. Hide the Roll Dice Button and show the Reset Button. Hint: use display none/block
  resetBtnEl.style.display = "block"
}





