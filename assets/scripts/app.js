'use strict'

const authEvents = require('./auth/events')
const gameEvents = require('./game/events')

$(() => {
  $('.authenticated').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#start-new-game').on('click', gameEvents.onStartNewGame)
  $('#check-games-played').on('click', gameEvents.onCheckGamesPlayed)
  $('#player-mark-select').on('submit', gameEvents.onPlayerMarkPick)
})
