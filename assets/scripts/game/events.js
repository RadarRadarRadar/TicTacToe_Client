'use strict'
const api = require('./api')
const ui = require('./ui')
// const getFormFields = require('./../../../lib/get-form-fields')

const onStartNewGame = function (event) {
  event.preventDefault()
  //
  // const form = event.target
  // const data = getFormFields(form)

  api.startNewGame()
    // .then(function (response) {
    //   // console.log(response)
    //   // console.dir(response)
    //   return response
    // })
    .then(ui.createNewGameSuccess)
    .catch(ui.createNewGameFail)
}

module.exports = {
  onStartNewGame
}
