let totalButtons = document.querySelectorAll(".drum");

for (let i = 0; i < totalButtons.length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let innerText = this.innerHTML;
    playSound(innerText);
  });
}

document.addEventListener("keydown", function (event) {
  playSound(event.key);
});

function playSound(value) {
  switch (value) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "d":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "f":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "s":
      let kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "x":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "c":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "g":
      let bass = new Audio("sounds/kick-bass.mp3");
      bass.play();
      break;
    default:
      console.log(innerText);
  }
}
