"use strict";

//setting up the random number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

//handler for check btn
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //if empty returns falsy value 0
  if (!guess) {
    document.querySelector(".message").textContent = "No number";
    score--;
    document.querySelector(".score").textContent = score;
  }
  //if correct
  else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".gmn").textContent = "You've won 🎉";
    let highscore = Number(document.querySelector(".highscore").textContent);
    if (score >= highscore) {
      highscore = score;
    }
    document.querySelector(".highscore").textContent = highscore;
  }
  //if higher
  else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "High";
    score--;
    document.querySelector(".score").textContent = score;
  }
  //if lower
  else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "Low";
    score--;
    document.querySelector(".score").textContent = score;
  }
  //end
  if (score == 0) {
    document.querySelector(".message").textContent = "You lost the game😢";
    document.querySelector("body").style.backgroundColor = "red";
    document.querySelector(".check").textContent = "Again!";
    document.querySelector(".check").addEventListener("click", function () {
      a();
    });
  }
});

//handler for again btn
document.querySelector(".again").addEventListener("click", function () {
  a();
});

//reset function
function a() {
  document.querySelector("body").style.backgroundColor = "#333";
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".gmn").textContent = "Guess my number!";
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".check").textContent = "Check!";
  document.querySelector(".guess").value = "";
}
