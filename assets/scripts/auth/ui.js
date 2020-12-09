'use strict'
// Required files
const store = require('./../store')

const signUpSuccess = function (response) {
  $('#message').text('Signed Up Successfully!')
  $('form').trigger('reset')
}
const signUpFailure = function (onError) {
  $('#message').text('Sign Up Failed')
}

const signInSuccess = function (response) {
  $('#message').text('Sign In Successfully!')
  store.user = response.user
  console.log(store.user)
  $('.unauthenticated').hide()
  $('.authenticated').show()
  $('#game-board-display').hide()
  $('form').trigger('reset')
}
const signInFailure = function (onError) {
  $('#message').text('Sign In Failed')
}

const changePasswordSuccess = function () {
  $('#message').text('Change password success!')
  $('form').trigger('reset')
}
const changePasswordFailure = function (onError) {
  $('#message').text('Change Password Failed')
}

const signOutSuccess = function () {
  $('#message').text('Change password success!')
  $('.authenticated').hide()
  $('.unauthenticated').show()
  store.user = null
  $('form').trigger('reset')
}
const signOutFailure = function (onError) {
  $('#message').text('Change Password Failed')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutFailure,
  signOutSuccess
}
