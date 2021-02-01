const easyGame = () => {
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
  degree += degreeToAdd;
  imageElem.style.transform = `rotate(${degree}deg)`;
};

const checkForWin = () => {
  if (degree % 360 === 0) {
    //the yellow tick is on the top
    alert("you won");
    incrementCount();
    incrementVelocity();
  } else {
    alert("you lost");
    resetVelocity();
    count = 1;
    txtImageElem.innerHTML = count;
  }
};

const incrementCount = () => {
  count += 1;
  txtImageElem.innerHTML = count;
};

const incrementVelocity = () => {
  velocity /= 1.1;
};

const resetVelocity = () => {
  velocity = (completeRotation * degreeToAdd) / 360;
};
