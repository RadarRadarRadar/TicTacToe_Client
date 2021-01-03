# Application MVP Requirements

1.  [x] User must be able to sign up
1.  [x] User must be able to sign in
1.  [x] Signed in user must be able to change password
1.  [x] Signed in user must be able to sign out
1.  [x] Signed in user user must be able to start a tic tac toe game
1.  [x] When playing game, user must start as X and then rotate between X and O
1.  [x] When playing game, user must only select available spaces on the board
1.  [x] When playing game, user must be notified when win, loss or tie occurs
1.  [x] Once a game is over, user must not be able to add to that board
1.  [x] Once a game is over, user must be able to play again
1.  [x] Signed in user must be able to view number of games played

# User stories

## MVP Stories
1. As a user I want to: Sign up
1. As a user I want to: Sign in
1. As a user I want to: Sign out
1. As a user I want to: Change my password
1. As a user I want to: Start a new game
1. As a user I want to: See how many games I have played
1. As a user I want to: Be able to click a square and have my mark show up
1. As a user I want to: Know that I have made a move
1. As a user I want to: Know when the game is won, lost or a draw
1. As a user I want to: Start a new game
1. As a user I want to: Play on my phone
1. As a user I want to:

## Stretch Stories
1. As a user I want to: Play on my 42" widescreen 1232132432hz monitor
1. As a user I want to: Pick which marker I play as
1. As a user I want to: Choose my own one character mark to play as
1. As a user I want to: See stats on number of won, lost or drawn games
1. As a user I want to: Play against a bot
1. As a user I want to: Make two bots battle
1. As a user I want to:

# Wireframes
[wireframes](https://docs.google.com/presentation/d/1tcl82zAP9O43cuEmZUyiDnbGFkUfc7JHlx5-tBRHMNs/edit?usp=sharing)


# API curl tests

## User
1. Sign up - WORKS
1. Sign in - WORKS
1. Sign out - WORKS
1. Change Password - WORKS
2.
## Game
1. Get all game - WORKS
1. Get one game - WORKS
1. Create a new game - WORKS
1. Update game - WORKS

# Tech Used

1. Javascript
1. HTML
1. Bootstrap
1. SCSS
1. Ajax
1. Jquery
1. Shell

# Planning Process

  The first step in my planning process was to break the requirements and the game of TicTacToe down into it's basic parts and to plan my wireframes, user stories and javascript constants from there.  Using wireframes I mapped out a basic idea of how I wanted things to look. I created user stories for my project requirements.

# Dev Process

  Auth:

  I started my Dev process by creating a simple HTML and CSS.  I wanted just enough functionality that I could test all my requirements with it.  I knew I was going to be interacting with an API so I first used curl scripts to test the Api's responses.  Once I confirmed these worked I began the coding for each Api interaction.  This was pretty straight forward and besides missing an s on the end of a word I didn't have many bugs.  I next began work on the code for the game it self.

  Game:

  For the game I wanted to have all thing trigger on the placement of a player mark.  I used the store to store a game response from the api. I use the array that is returned from the api to store my player marks and be checked for the player win.  When a win happens the game board is turned off.  New game turns it back on.  This let me use the create new game button to complete two requirements at once. Finally I broke out the check win function into it's own file.

# Problem Solving Process

  The two big problems I encountered were checking for the win and giving the api all the correct information at the right time.  It took me a bit of reordering to make my update game api call work correctly. Figuring out that I could use the information my store file as a temp copy of the game being played got me over this hurdle.
