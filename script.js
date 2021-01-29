const imageElem = document.querySelector("#image");
const countElem = document.querySelector("#count");

//immagine formata da 24 tick, quindi, affinche la rivoluzione avvenga in 2 secondi, ogni 8ms si deve muovere di 15 gradi
const tick = 24;
const completeRotation = 2000; //millisecondi
const degreeToAdd = 360 / tick;
const velocity = (completeRotation * degreeToAdd) / 360;

//360:2000=15:x

var degree = 0;
var count = 0;
var loop;

const handleClick = () => {
  if (loop) {
    clearInterval(loop);
    checkForWin();
    degree = 0;
    loop = false;
  } else {
    loop = setInterval(rotate, velocity);
  }
};

const rotate = () => {
  console.log(degree);
  degree += 15;
  imageElem.style.transform = `rotate(${degree}deg)`;
};

const checkForWin = () => {
  console.log("degree:", degree);
  if (degree % 360 === 0) {
    //the yellow tick is on the top
    alert("you won");
    incrementCount();
  } else {
    alert("you lost");
  }
};

const incrementCount = () => {
  count += 1;
  countElem.innerHTML = count;
};
