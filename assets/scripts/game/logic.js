'use strict'
const store = require('../store')

const gameArray = store.game.cells

const triggerWinner = function (gameArray, winCons) {
  if
}

const winCons = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
]

// Check the string for the winCons
// If the value at each of points in the arrays of above are all equal
// then it is a win
// Pass it the whole string and check each value at that point (.forEach)
// If thing A is equal to thing A,
// and thing A is equal to thing B,
// and thing A is equal to thing C
  // then it is a win for the current Player
  // Trigger wincon events
