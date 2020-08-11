let totalButtons = document.querySelectorAll(".drum");
for (let i = 0; i < totalButtons.length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let audio = new Audio("sounds/tom-3.mp3");
    audio.play();
  });
}
