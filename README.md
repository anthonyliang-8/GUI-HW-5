Name: Anthony Liang
Date: 12/17/2023
Email: anthony_liang@student.uml.edu

The current code that I have is working, except for the stubborn styling that I can't seem to figure out for
the tile holder as the tiles are a little high up for my liking. Event listeners for regular and double
score tiles are made so they can be dragged and dropped between the game board and the tile holder. The newGame
function dynamically generates a player's set of tiles, and have unique attributes and drag-and-drop listeners so they can be individually moved. The updateScore function computes the word score based on tile values and board positions. The nextSet
function progresses to the next set, updating scores and resetting the board. The restart function clears the
board, resets scores, and starts a new game. To randomize the user's tiles at the start of the set or game, I made a randomization function "randomize()" using the Fisher-Yates shuffle (found on geeksforgeeks). I made two more drag and drop
functions to handle the drag-and-drop events to preventing default behaviors and handling data transfer so that they wouldn't be stuck (I had an error where I could not drop it properly and it would revert no matter what.)
