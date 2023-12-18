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

// gives the player a new hand of scrabble tiles
function newGame() {
  // loop to create 7 new scrabble tiles for the player's hand
  for (col = 0; col < 7; col++) {
    // generate a unique ID for each tile div
    var divName = "temp" + col;

    // randomly select a scrabble letter for the current tile
    var currentRandomLetter = randomize();

    // get the value of the selected scrabble letter
    var value = ScrabbleTiles[currentRandomLetter]["value"];

    // get the URL of the tile image for the selected scrabble letter
    var tileDraggable = ScrabbleTiles[currentRandomLetter]["tile"];

    // create a new div element representing the scrabble tile
    // https://stackoverflow.com/questions/867916/creating-a-div-element-in-jquery
    var newSlot = $(
      '<div class="scrabble-tile" id="' +
        divName +
        '" draggable="true" droppable="false" ondragstart="dragFunc(event)" "' +
        '" style="background-image: url(' +
        tileDraggable +
        '); background-size: 80px 85px; width: 80px; height: 85px; border-width: 1px;"/>'
    );

    // set custom attributes on the new tile div to store data
    newSlot.attr("data-letterName", currentRandomLetter);
    newSlot.attr("data-value", value);
    newSlot.attr("data-tile", tileDraggable);

    // append the new tile element to the user-tiles container
    $("#user-tiles").append(newSlot);
  }
}

//set score of current word
function updateScore() {
  score = 0;
  // loop through the reg-space-tiles
  for (i = 1; i < 8; i++) {
    //format string for jquery selector
    tileName = "t";
    tileName = tileName + i + " > *";
    currentValue = $("#" + tileName).data("value");
    if (isNaN(currentValue) == false) {
      if ($("#t" + i).attr("class") == "double-score-tile")
        score = score + currentValue * 2;
      else score = score + currentValue;
    } else {
      break;
    }
  }

  $("#score").html("Score: " + score);
}

//clears the hand and board of current tiles and sets new ones
function nextSet() {
  totalScore += score;
  score = 0;
  $("#score").html("Score: " + score);
  $("#totalScore").html("Total Score: " + totalScore);

  for (let tileIndex = 1; tileIndex < 8; tileIndex++) {
    const currentTileId = "tile" + tileIndex + " > *";
    const currentHandId = "temp" + (tileIndex - 1);

    $("#" + currentTileId).remove();
    $("#" + currentHandId).remove();
  }

  newGame();
}

// Function to restart the game
function restart() {
  for (let i = 1; i < 8; i++) {
    const currentHandName = "hand" + (i - 1);
    const currentTileName = "tile" + i + " > *";

    $("#" + currentTileName).remove();
    $("#" + currentHandName).remove();
  }
  totalScore = 0;
  score = 0;
  $("#score").html("Score: " + score);
  $("#totalScore").html("Total Score: " + totalScore);
  newGame();
}

// https://www.geeksforgeeks.org/shuffle-a-given-array-using-fisher-yates-shuffle-algorithm/
// ranomize what letters are generated using fisher yatles
function randomize() {
  const alphabet = "ABCDEFGHIJKLMNOPQURTUVWXYZ_";

  for (let i = alphabet.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [alphabet[i], alphabet[j]] = [alphabet[j], alphabet[i]];
  }

  return alphabet[Math.floor(Math.random() * alphabet.length)];
}
function droppableTile(e) {
  e.preventDefault();
}

function dragFunc(e) {
  e.dataTransfer.setData("text", e.target.id);
}

function dropFunc(e) {
  if (e.target.classList[0] == "scrabble-tile") return;
  e.preventDefault();
  var data = e.dataTransfer.getData("text");
  e.target.appendChild(document.getElementById(data));
  updateScore();
}
