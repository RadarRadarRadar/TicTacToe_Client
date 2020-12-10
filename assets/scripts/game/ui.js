'use strict'

const store = require('../store')

const createNewGameSuccess = function (response) {
  $('#message').text('Game Created')
  $('#game-board-display').show()
  store.game = response.game
  // console.log(store.game)
}

const createNewGameFail = function () {
  $('#message').text('Game Not Created')
  console.log('Oh Shit')
}

const markerPlacementSuccess = function (response) {
  console.log(response)
  store.game.cells = response.game.cells
  // console.log('worked')
  console.log(store.game.cells)
}

module.exports = {
  createNewGameSuccess,
  createNewGameFail,
  markerPlacementSuccess
}
