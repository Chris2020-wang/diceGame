var randomNumber1 = Math.floor(Math.random()*6 + 1);
var randomNumber2 = Math.floor(Math.random()*6 + 1);
var leftDiceImage = "images/dice" + randomNumber1 + ".png";
var rightDiceImage = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img1").setAttribute("src", leftDiceImage);
document.querySelector(".img2").setAttribute("src", rightDiceImage);
var h1 = document.querySelector("h1");
console.log(h1);
if(randomNumber1 > randomNumber2) {
  h1.innerHTML = "⛳️Player 1 Wins!";
} else if(randomNumber1 < randomNumber2) {
  h1.innerHTML = "Player 2 Wins!⛳️";
} else {
  h1.innerHTML = "Draw!";
}
