'use strict'

const store = require('../store')

const createNewGameSuccess = function (response) {
  $('#message').text('Game Created')
  $('#game-board-display').show()
  store.game = response.game
  // console.log(store.game)
}

const createNewGameFail = function () {
  $('#message').text('Game Created')
  console.log('Oh Shit')
}

const markerPlacementSuccess = function (response) {
  // console.log(response)
  store.game = response.game
  console.log('worked')
}

module.exports = {
  createNewGameSuccess,
  createNewGameFail,
  markerPlacementSuccess
}
