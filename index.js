const modeBtn = {
  easy: document.querySelector("#easy-mode-btn"),
  hard: document.querySelector("#hard-mode-btn"),
  impossible: document.querySelector("#impossible-mode-btn"),
};
const gameModeTxt = document.querySelector("#game-mode-txt");

var gameMode = "easy";

const handleChangeMode = (mode, modeBtnColor) => {
  gameMode = mode;
  changeGameModeTxt(mode);
  changeModeBtnColor(modeBtnColor);
};

const changeGameModeTxt = (mode) => {
  gameModeTxt.innerHTML = mode;
};

//set the color of the mode-btn in base of the selected mode
const changeModeBtnColor = (modeBtnColor) => {
  modeBtn.easy.style.backgroundColor = modeBtnColor[0];
  modeBtn.hard.style.backgroundColor = modeBtnColor[1];
  modeBtn.impossible.style.backgroundColor = modeBtnColor[2];
};

changeModeBtnColor(["lightcoral", "lightgray", "lightgray"]); //set the initial color
