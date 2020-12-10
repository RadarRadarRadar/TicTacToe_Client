'use strict'

const store = require('../store')
const logic = require('./logic')

// I want to make something here to reset the board HTML on success
const createNewGameSuccess = function (response) {
  $('#message').text('Game Created')
  $('#game-board-display').show()
  store.game = response.game
  // console.log(store.game)
}

const createNewGameFail = function () {
  $('#message').text('Game Not Created Big Ooph')
  console.log('Oh Shit')
}

const markerPlacementSuccess = function (response) {
  // console.log(response)
  store.game.cells = response.game.cells
  const responseGameArray = store.game.cells
  // console.log('worked')
  console.log(responseGameArray)
  logic.checkWin(responseGameArray)
}

const markerPlacementFail = function () {
  $('#message').text('Not a Legal Move Try Again')
  console.log('Oh Shit')
}

module.exports = {
  createNewGameSuccess,
  createNewGameFail,
  markerPlacementSuccess,
  markerPlacementFail
}
