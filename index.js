let randomNum1 = Math.floor(Math.random() * 6) + 1;
let randomNum2 = Math.floor(Math.random() * 6) + 1;

let firstDice = document.querySelector(".img1");
let secondDice = document.querySelector(".img2");

firstDice.setAttribute("src", "./dice" + randomNum1 + ".png");
secondDice.setAttribute("src", "./dice" + randomNum2 + ".png");

if(randomNum1 > randomNum2) {
  document.querySelector("h1").innerHTML = "&#129351 Player 1 Wins!";
} else if(randomNum2 > randomNum1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! &#127942";
} else {
  document.querySelector("h1").innerHTML = "&#129340 It's a Draw &#129340"
}
