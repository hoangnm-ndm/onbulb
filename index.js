const onSrc = "https://www.w3schools.com/jsref/pic_bulbon.gif";
const offSrc = "https://www.w3schools.com/jsref/pic_bulboff.gif";

const lightElement = document.getElementById("light");

function controlLightOn() {
  lightElement.src = onSrc;
}

function controlLightOff() {
  lightElement.src = offSrc;
}
