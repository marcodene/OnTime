const imageElem = document.querySelector("#image-game");
const txtImageElem = document.querySelector("#text-level-game");

//immagine formata da 48 tick, quindi, affinche la rivoluzione avvenga in 4 secondi, ogni 8ms si deve muovere di 7.5 gradi
const tick = 48;
const completeRotation = 4000; //millisecondi
const degreeToAdd = 360 / tick;
var velocity = (completeRotation * degreeToAdd) / 360;

var degree = 0;
var count = 1;
var loop;

const handleStartGame = () => {
  switch (gameMode) {
    case "easy":
      easyGame();
      break;
    case "hard":
      hardGame();
      break;
    case "impossible":
      impossibleGame();
      break;
  }
};
