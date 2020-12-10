'use strict'
const store = require('../store')

// const gameArray = store.game.cells

const triggerWinner = function(gameArray, winCons) {
  if
}

const gameArray = ['', '', 'X', '', '', 'X', '', '', 'X']

const winCons = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function checkWin() {
  winCons.forEach(function(element, index, gameArray) {
      console.log(gameArray[element[0]])

      if (gameArray[element[0]] === gameArray[element[0]] &&
        gameArray[element[1]] === gameArray[element[0]] &&
        gameArray[element[2]] === gameArray[element[0]]) {
        console.log('winner')
      }
    })
  }


// if
// gameArray[0] === gameArray[0] &&
// gameArray[0] === gameArray[1] &&
// gameArray[0] === gameArray[2] &&
// else if
// gameArray[3] === gameArray[3] &&
// gameArray[3] === gameArray[4] &&
// gameArray[3] === gameArray[5] &&
// etc...

// else if
// gameArray is full triggerDraw()

// else
// keep playing

// gameState = store.game.over

// handleGameOver = function () {
//  gameState = 'true'
// }


// Check the string for the winCons
// If the value at each of points in the arrays of above are all equal
// then it is a win
// Pass it the whole string and check each value at that point (.forEach)
// If thing A is equal to thing A,
// and thing A is equal to thing B,
// and thing A is equal to thing C
// then it is a win for the current Player
// Trigger wincon events
// For each thing in my game array check if each coresponding position to
// the wincon array's array points are equal.
// If they any are trigger the winner function.
// If not test for a draw.
// If still not, log the turn and proceed to handle the turn.
