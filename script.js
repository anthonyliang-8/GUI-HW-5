/*
Name: Anthony Liang
Date: 12/17/2023
Email: anthony_liang@student.uml.edu
*/

const nextSetBtn = document.getElementById("next-set-btn");
const restartGameBtn = document.getElementById("restart-game-btn");
const regScoreTiles = document.querySelectorAll(".reg-score-tile");
const doubleScoreTiles = document.querySelectorAll(".double-score-tile");

var ScrabbleTiles = [];
var score = 0;
var totalScore = 0;

/*  File:  /~heines/91.461/91.461-2015-16f/461-assn/Scrabble_Pieces_AssociativeArray_Jesse.js
 *  Jesse M. Heines, UMass Lowell Computer Science, heines@cs.uml.edu
 *  Copyright (c) 2015 by Jesse M. Heines.  All rights reserved.  May be freely
 *    copied or excerpted for educational purposes with credit to the author.
 *  updated by JMH on November 21, 2015 at 10:27 AM
 *  updated by JMH on November 25, 2015 at 10:58 AM to add the blank tile
 *  updated by JMH on November 27, 2015 at 10:22 AM to add original-distribution
 */
ScrabbleTiles["A"] = {
  value: 1,
  "original-distribution": 9,
  "number-remaining": 9,
  tile: "assets/game_tiles/Scrabble_Tile_A.jpg",
};
ScrabbleTiles["B"] = {
  value: 3,
  "original-distribution": 2,
  "number-remaining": 2,
  tile: "assets/game_tiles/Scrabble_Tile_B.jpg",
};
ScrabbleTiles["C"] = {
  value: 3,
  "original-distribution": 2,
  "number-remaining": 2,
  tile: "assets/game_tiles/Scrabble_Tile_C.jpg",
};
ScrabbleTiles["D"] = {
  value: 2,
  "original-distribution": 4,
  "number-remaining": 4,
  tile: "assets/game_tiles/Scrabble_Tile_D.jpg",
};
ScrabbleTiles["E"] = {
  value: 1,
  "original-distribution": 12,
  "number-remaining": 12,
  tile: "assets/game_tiles/Scrabble_Tile_E.jpg",
};
ScrabbleTiles["F"] = {
  value: 4,
  "original-distribution": 2,
  "number-remaining": 2,
  tile: "assets/game_tiles/Scrabble_Tile_F.jpg",
};
ScrabbleTiles["G"] = {
  value: 2,
  "original-distribution": 3,
  "number-remaining": 3,
  tile: "assets/game_tiles/Scrabble_Tile_G.jpg",
};
ScrabbleTiles["H"] = {
  value: 4,
  "original-distribution": 2,
  "number-remaining": 2,
  tile: "assets/game_tiles/Scrabble_Tile_H.jpg",
};
ScrabbleTiles["I"] = {
  value: 1,
  "original-distribution": 9,
  "number-remaining": 9,
  tile: "assets/game_tiles/Scrabble_Tile_I.jpg",
};
ScrabbleTiles["J"] = {
  value: 8,
  "original-distribution": 1,
  "number-remaining": 1,
  tile: "assets/game_tiles/Scrabble_Tile_J.jpg",
};
ScrabbleTiles["K"] = {
  value: 5,
  "original-distribution": 1,
  "number-remaining": 1,
  tile: "assets/game_tiles/Scrabble_Tile_K.jpg",
};
ScrabbleTiles["L"] = {
  value: 1,
  "original-distribution": 4,
  "number-remaining": 4,
  tile: "assets/game_tiles/Scrabble_Tile_L.jpg",
};
ScrabbleTiles["M"] = {
  value: 3,
  "original-distribution": 2,
  "number-remaining": 2,
  tile: "assets/game_tiles/Scrabble_Tile_M.jpg",
};
ScrabbleTiles["N"] = {
  value: 1,
  "original-distribution": 6,
  "number-remaining": 6,
  tile: "assets/game_tiles/Scrabble_Tile_N.jpg",
};
ScrabbleTiles["O"] = {
  value: 1,
  "original-distribution": 8,
  "number-remaining": 8,
  tile: "assets/game_tiles/Scrabble_Tile_O.jpg",
};
ScrabbleTiles["P"] = {
  value: 3,
  "original-distribution": 2,
  "number-remaining": 2,
  tile: "assets/game_tiles/Scrabble_Tile_P.jpg",
};
ScrabbleTiles["Q"] = {
  value: 10,
  "original-distribution": 1,
  "number-remaining": 1,
  tile: "assets/game_tiles/Scrabble_Tile_Q.jpg",
};
ScrabbleTiles["R"] = {
  value: 1,
  "original-distribution": 6,
  "number-remaining": 6,
  tile: "assets/game_tiles/Scrabble_Tile_R.jpg",
};
ScrabbleTiles["S"] = {
  value: 1,
  "original-distribution": 4,
  "number-remaining": 4,
  tile: "assets/game_tiles/Scrabble_Tile_S.jpg",
};
ScrabbleTiles["T"] = {
  value: 1,
  "original-distribution": 6,
  "number-remaining": 6,
  tile: "assets/game_tiles/Scrabble_Tile_T.jpg",
};
ScrabbleTiles["U"] = {
  value: 1,
  "original-distribution": 4,
  "number-remaining": 4,
  tile: "assets/game_tiles/Scrabble_Tile_U.jpg",
};
ScrabbleTiles["V"] = {
  value: 4,
  "original-distribution": 2,
  "number-remaining": 2,
  tile: "assets/game_tiles/Scrabble_Tile_V.jpg",
};
ScrabbleTiles["W"] = {
  value: 4,
  "original-distribution": 2,
  "number-remaining": 2,
  tile: "assets/game_tiles/Scrabble_Tile_W.jpg",
};
ScrabbleTiles["X"] = {
  value: 8,
  "original-distribution": 1,
  "number-remaining": 1,
  tile: "assets/game_tiles/Scrabble_Tile_X.jpg",
};
ScrabbleTiles["Y"] = {
  value: 4,
  "original-distribution": 2,
  "number-remaining": 2,
  tile: "assets/game_tiles/Scrabble_Tile_Y.jpg",
};
ScrabbleTiles["Z"] = {
  value: 10,
  "original-distribution": 1,
  "number-remaining": 1,
  tile: "assets/game_tiles/Scrabble_Tile_Z.jpg",
};
ScrabbleTiles["_"] = {
  value: 0,
  "original-distribution": 2,
  "number-remaining": 2,
  tile: "assets/game_tiles/Scrabble_Tile_Blank.jpg",
};

$(document).ready(function () {
  newGame();
  $("#restart-game-btn").on("click", function () {
    restart();
  });
  $("#next-set-btn").on("click", function () {
    nextSet();
  });
});

regScoreTiles.forEach((tile) => {
  tile.addEventListener("drop", dropFunc);
  tile.addEventListener("dragover", droppableTile);
});

// add event listeners for each double-score-tile
doubleScoreTiles.forEach((tile) => {
  tile.addEventListener("drop", dropFunc);
  tile.addEventListener("dragover", droppableTile);
});

// prevents the default behavior of the event, allowing a draggable element to be dropped
function droppableTile(e) {
  e.preventDefault();
}

// sets the data to be transferred during drag-and-drop, storing the ID of the dragged element
function dragFunc(e) {
  e.dataTransfer.setData("text", e.target.id);
}

// setles the drop event, checks if the target is a scrabble tile, prevents default behavior, appends the dragged element, and updates the score
function dropFunc(e) {
  // checks if the target is a scrabble tile, and if so, returns early to prevent further execution
  if (e.target.classList[0] == "scrabble-tile") return;

  // prevents the default behavior of the drop event
  e.preventDefault();

  // retrieves the ID of the dragged element
  var data = e.dataTransfer.getData("text");

  // appends the dragged element to the drop target
  e.target.appendChild(document.getElementById(data));

  // updates the score based on the current state of the tiles on the board
  updateScore();
}

// gives the player a new set of scrabble tiles
function newGame() {
  // clear existing event listeners for user-tiles
  $("#user-tiles").off("dragover drop");

  // loop to create 7 new scrabble tiles for the player's set
  for (set = 0; set < 7; set++) {
    // generate a unique ID for each tile div
    var divName = "temp" + set;

    // randomly select a scrabble letter for the current tile
    var currentRandomLetter = randomize();

    // get the value of the selected scrabble letter
    var value = ScrabbleTiles[currentRandomLetter]["value"];

    // get the URL of the tile image for the selected scrabble letter
    var tileDraggable = ScrabbleTiles[currentRandomLetter]["tile"];

    // create a new div element representing each scrabble tile
    // https://www.tutorialrepublic.com/faq/how-to-create-a-div-element-in-jquery.php
    var newVar = $(
      '<div class="scrabble-tile" id="' +
        divName +
        '" draggable="true" droppable="false" ondragstart="dragFunc(event)" "' +
        '" style="background-image: url(' +
        tileDraggable +
        '); background-size: 80px 85px; width: 80px; height: 85px; border-width: 1px;"/>'
    );

    // set custom attributes on the new tile div to store data
    newVar.attr("data-letterName", currentRandomLetter);
    newVar.attr("data-value", value);
    newVar.attr("data-tile", tileDraggable);

    // append the new tile element to the user-tiles container
    $("#user-tiles").append(newVar);
  }

  // add the droppable event listeners for the user-tiles container
  $("#user-tiles").on("dragover", droppableTile);
  $("#user-tiles").on("drop", function (e) {
    e.preventDefault();
    // pass data from tile to the droppable div holder
    // https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/getData
    var data = e.originalEvent.dataTransfer.getData("text");
    // append the dragged tile back to the user-tiles container
    $("#user-tiles").append(document.getElementById(data));
    updateScore();
  });
}

// sets the score of the current word based on the tiles on the board
function updateScore() {
  score = 0;
  // loop through the regular space tiles
  for (i = 1; i < 8; i++) {
    // format string for jQuery selector
    tileName = "t";
    // concatenate 'i' with " > *" to form unique selector pattern
    tileName = tileName + i + " > *";
    currentValue = $("#" + tileName).data("value");
    if (isNaN(currentValue) == false) {
      // check if the tile is on a double-score space
      if ($("#t" + i).attr("class") == "double-score-tile")
        score = score + currentValue * 2;
      else score = score + currentValue;
    } else {
      break;
    }
  }

  // display the updated score on the page
  $("#score").html("Score: " + score);
}

// clears the set and board of current tiles and sets new ones for the next round
function nextSet() {
  // add the current score to the total score
  totalScore += score;
  // reset the score for the next round
  score = 0;

  // update the score display on the page
  $("#score").html("Score: " + score);
  $("#totalScore").html("Total Score: " + totalScore);

  // loop through and remove the current set of tiles from the board and set
  for (let tileIndex = 1; tileIndex < 8; tileIndex++) {
    const currentTile = "tile" + tileIndex + " > *";
    const currentSet = "temp" + (tileIndex - 1);

    $("#" + currentTile).remove();
    $("#" + currentSet).remove();
  }

  // generate a new set of tiles for the player's set
  newGame();
}

// restarts the game by clearing the board and set, and resetting scores
function restart() {
  // loop through and remove the current set of tiles from the board and set
  for (let i = 1; i < 8; i++) {
    const currentSet = "temp" + (i - 1);
    const currentTile = "tile" + i + " > *";

    // removes tiles off board
    $("#" + currentTile).remove();
    $("#" + currentSet).remove();
  }

  // reset total score and current score
  totalScore = 0;
  score = 0;

  // update the score display on the page
  $("#score").html("Score: " + score);
  $("#totalScore").html("Total Score: " + totalScore);

  // generate a new set of tiles for the player's set
  newGame();
}

// https://www.geeksforgeeks.org/shuffle-a-given-array-using-fisher-yates-shuffle-algorithm/
// ranomize what letters are generated using fisher yates algorithm
function randomize() {
  const alphabet = "ABCDEFGHIJKLMNOPQURTUVWXYZ_";

  for (let i = alphabet.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [alphabet[i], alphabet[j]] = [alphabet[j], alphabet[i]];
  }

  return alphabet[Math.floor(Math.random() * alphabet.length)];
}
