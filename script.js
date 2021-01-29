var image = document.querySelector("#image");

//immagine formata da 24 tick, quindi, affinche la rivoluzione avvenga in 2 secondi, ogni 8ms si deve muovere di 15 gradi
const tick = 24;
const completeRotation = 2000; //millisecondi
const degreeToAdd = 360 / tick;
const velocity = (completeRotation * degreeToAdd) / 360;

//360:2000=15:x

var degree = 0;
var loop;

const handleClick = () => {
  if (loop) {
    clearInterval(loop);
    loop = false;
  } else {
    loop = setInterval(rotate, velocity);
  }
};

function rotate() {
  console.log(degree);
  image.style.transform = `rotate(${degree}deg)`;
  degree += 15;
}
