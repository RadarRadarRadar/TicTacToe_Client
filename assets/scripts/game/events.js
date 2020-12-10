'use strict'
const api = require('./api')
const ui = require('./ui')
const store = require('./../store')
const logic = require('./logic')

// const getFormFields = require('./../../../lib/get-form-fields')
let currentPlayerMark

const playerOneMark = 'X'
const playerTwoMark = 'O'

// currentPlayerMark = playerOneMark

const turnOver = function () {
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
  // console.log(currentPlayerMark)
  $('.game-space').html(' ')
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
  // console.log('this is the div data clicked ' + cellIndex)

  const gameArray = store.game.cells
  // console.log('this is the game array before api call ' + gameArray)

  const gameArrayIndex = gameArray[cellIndex]
  // console.log('this is the game array index the mark will be added to ' + gameArrayIndex)

  if (gameArrayIndex !== playerOneMark && gameArrayIndex !== playerTwoMark) {
    api.markerPlacement(cellIndex, currentPlayerMark)
      .then(ui.markerPlacementSuccess)
      .catch(ui.markerPlacementFail)
    $(event.target).html(currentPlayerMark)
    // logic.checkWin(gameArray)
    turnOver()
    $('#message').text(`${currentPlayerMark}'s turn to place`)
  } else {
    ui.markerPlacementFail()
    console.log('Not a legal move')
  }
  console.log(gameArray)
  console.log(store.game.cells)
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
