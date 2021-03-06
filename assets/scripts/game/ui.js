'use strict'

const store = require('../store')
// const logic = require('./logic')
// const events = require('./events')

// I want to make something here to reset the board HTML on success
const createNewGameSuccess = function (response) {
  // $('#player-message').text('Game Created')
  // $('#game-board-display').show()
  // $('.game-space').on()
  store.game = response.game
  // console.log(store.game)
}

const createNewGameFail = function () {
  $('#player-message').text('Game Not Created Big Ooph')
}

const markerPlacementSuccess = function (response) {
  // console.log(response)
  store.game = response.game
  // const responseGameArray = store.game
  // const gameState = store.game.over
  // console.log('worked')
  // console.log(responseGameArray)
  // console.log(store.game.over)
  // logic.checkWin(responseGameArray)
}

const markerPlacementFail = function () {
  $('#player-message').text('Not a Legal Move Try Again')
}

const checkGamesPlayedSuccess = function (response) {
  store.games = response.games
  const gamesPlayedArray = store.games
  const gamesPlayed = gamesPlayedArray.length
  $('#games-played-message').text(`${gamesPlayed} Games Played`)
  // const gameState = store.game.over
  // console.log('worked')
  // console.log(store.game.over)
  // logic.checkWin(responseGameArray)
}

const checkGamesPlayedFail = function () {
  $('#player-message').text('It Broke')
}

module.exports = {
  createNewGameSuccess,
  createNewGameFail,
  markerPlacementSuccess,
  markerPlacementFail,
  checkGamesPlayedSuccess,
  checkGamesPlayedFail
}
