'use strict'

const onStartNewGame = function (event) {
  event.preventDefault()

  api.startNewGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFail)
}

module.exports = {
  onStartNewGame
}
