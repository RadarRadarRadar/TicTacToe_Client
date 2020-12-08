'use strict'

const store = require('../store')

const createNewGameSuccess = function (response) {
  $('#message').text('Game Created')
  store.game = response.game
  console.log(store.game)
}

const createNewGameFail = function () {
  $('#message').text('Game Created')
  console.log('Oh Shit')
}

module.exports = {
  createNewGameSuccess,
  createNewGameFail
}
