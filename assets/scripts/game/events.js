'use strict'
const api = require('./api')
const ui = require('./ui')
const store = require('./../store')

// const getFormFields = require('./../../../lib/get-form-fields')

const onStartNewGame = function (event) {
  event.preventDefault()
  // currentPlayer = playerOneMark
  api.startNewGame()
    // .then(function (response) {
    //   console.log(response)
    //   return response
    // })
    .then(ui.createNewGameSuccess)
    .catch(ui.createNewGameFail)
}

const onMarkerPlacement = function (event) {
  $(event.target).html(currentPlayerMark)
  const cellIndex = $(event.target).data('cell-index')
  console.log(cellIndex)

  const gameArray = store.game.cells
  console.log(gameArray)

  const gameArrayIndex = gameArray[cellIndex]
  console.log(gameArrayIndex)

  if (gameArrayIndex !== 'X') {
    api.markerPlacement(cellIndex, currentPlayerMark)
      .then(ui.markerPlacementSuccess)
      .catch(ui.markerPlacement)
  } else {
    console.log('Not a legal move')
  }
}

//   api.markerPlacement(cellIndex, currentPlayerMark)
//     .then(ui.markerPlacementSuccess)
//     .catch(ui.markerPlacement)
// }

let currentPlayerMark = 'X'
//
const playerOneMark = 'X'
const playerTwoMark = 'O'
//
// let currentPlayer
//
// const handleTurn = function (currentPlayer) {
//   if (currentPlayer === playerOneMark) {
//     currentPlayer = playerTwoMark
//   } else {
//     currentPlayer = playerOneMark
//   }
// }

module.exports = {
  onStartNewGame,
  onMarkerPlacement
}
