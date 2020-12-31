'use strict'
const api = require('./api')
const ui = require('./ui')
const store = require('./../store')
const logic = require('./logic')
const getFormFields = require('./../../../lib/get-form-fields')

// const getFormFields = require('./../../../lib/get-form-fields')
let currentPlayerMark

let playerOneMark = 'X'
let playerTwoMark = 'O'

// currentPlayerMark = playerOneMark

const turnOver = function () {
  if (currentPlayerMark === playerOneMark) {
    currentPlayerMark = playerTwoMark
  } else {
    currentPlayerMark = playerOneMark
  };
  return currentPlayerMark
}

const checkPlayers = function (playerOneMark, playerTwoMark) {
  if (playerOneMark === undefined) {
    playerOneMark = 'X'
  }
  if (playerTwoMark === undefined) {
    playerTwoMark = 'O'
  }
}

const onStartNewGame = function (event) {
  // event.preventDefault()
  checkPlayers(playerOneMark, playerTwoMark)
  currentPlayerMark = playerOneMark
  // console.log(currentPlayerMark)
  $('#player-message').text(`Game Created. It is ${currentPlayerMark}'s Turn.`)
  $('#game-board-display').show()
  $('.game-space').off()
  $('.game-space').on()
  $('#win-message').text('')
  $('#games-played-message').text('')
  $('.game-space').click(onMarkerPlacement)
  $('.game-space').html('')
  // store.game = null
  api.startNewGame()
    .then(function (response) {
      // console.log(response)
      return response
    })
    .then(ui.createNewGameSuccess)
    .catch(ui.createNewGameFail)
}

const onMarkerPlacement = function (event) {
  // event.preventDefault()
  $('#games-played-message').text('')
  const cellIndex = $(event.target).data('cell-index')
  // console.log('this is the div data clicked ' + cellIndex)

  const gameArray = store.game.cells
  // console.log('this is the game array before api call ' + gameArray)

  const gameArrayIndex = gameArray[cellIndex]
  // console.log('this is the game array index the mark will be added to ' + gameArrayIndex)

  if (gameArrayIndex !== playerOneMark && gameArrayIndex !== playerTwoMark) {
    //  store.game.cells[cellIndex] = currentPlayerMark
    gameArray[cellIndex] = currentPlayerMark
    // console.log(gameArray)
    const currentGameState = logic.checkWin(gameArray)

    $(event.target).html(currentPlayerMark)

    // if (currentGameState === false) {
    //   // $(event.target).html(currentPlayerMark)
    //   turnOver()
    //   $('#player-message').text(`${currentPlayerMark}'s turn to place`)
    // } else if (currentGameState === true) {
    //   $('.game-space').off()
    //   $('#player-message').text('')
    // }

    // $(event.target).html(currentPlayerMark)

    api.markerPlacement(cellIndex, currentPlayerMark, currentGameState)
      .then(function (response) {
        // console.log(response)
        return response
      })
      .then(ui.markerPlacementSuccess)
      .catch(ui.markerPlacementFail)

    turnOver()
    $('#player-message').text(`${currentPlayerMark}'s turn to place`)
    if (currentGameState === true) {
      $('.game-space').off()
      $('#player-message').text('')
    }
  } else {
    ui.markerPlacementFail()
    // console.log('Not a legal move')
  }
}

const onCheckGamesPlayed = function (event) {
  event.preventDefault()
  api.checkGamesPlayed()
    .then(ui.checkGamesPlayedSuccess)
    .catch(ui.checkGamesPlayedFail)
}

const onPlayerMarkPick = function (event) {
  event.preventDefault(event)
  const form = event.target
  const data = getFormFields(form)
  console.log(data.credentials.playerOneMark)
  playerOneMark = data.credentials.playerOne
  playerTwoMark = data.credentials.playerTwo
  onStartNewGame()
}

module.exports = {
  onStartNewGame,
  onMarkerPlacement,
  currentPlayerMark,
  onCheckGamesPlayed,
  onPlayerMarkPick
}
