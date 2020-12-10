'use strict'
const api = require('./api')
const ui = require('./ui')
const store = require('./../store')

// const getFormFields = require('./../../../lib/get-form-fields')
let currentPlayerMark

const playerOneMark = 'X'
const playerTwoMark = 'O'

// currentPlayerMark = playerOneMark

const handleTurn = function () {
  if (currentPlayerMark === playerOneMark) {
    currentPlayerMark = playerTwoMark
  } else {
    currentPlayerMark = playerOneMark
  };
  return currentPlayerMark
}

const onStartNewGame = function (event) {
  event.preventDefault()
  currentPlayerMark = playerOneMark
  console.log(currentPlayerMark)
  api.startNewGame()
    // .then(function (response) {
    //   console.log(response)
    //   return response
    // })
    .then(ui.createNewGameSuccess)
    .catch(ui.createNewGameFail)
}

const onMarkerPlacement = function (event) {
  event.preventDefault()
  const cellIndex = $(event.target).data('cell-index')
  // console.log(cellIndex)

  const gameArray = store.game.cells
  // console.log(gameArray)

  const gameArrayIndex = gameArray[cellIndex]
  // console.log(gameArrayIndex)

  if (gameArrayIndex !== playerOneMark && gameArrayIndex !== playerTwoMark) {
    api.markerPlacement(cellIndex, currentPlayerMark)
      .then(ui.markerPlacementSuccess)
      .catch(ui.markerPlacementFail)
    $(event.target).html(currentPlayerMark)
    handleTurn()
    $('#message').text(`${currentPlayerMark}'s turn to place`)
  } else {
    ui.markerPlacementFail()
    console.log('Not a legal move')
  }
  console.log(gameArray)
}

//   api.markerPlacement(cellIndex, currentPlayerMark)
//     .then(ui.markerPlacementSuccess)
//     .catch(ui.markerPlacement)
// }

module.exports = {
  onStartNewGame,
  onMarkerPlacement,
  currentPlayerMark
}
