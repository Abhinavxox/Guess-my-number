"use strict";

//setting up the random number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};
const displayHighscore = function (highscore) {
  document.querySelector(".highscore").textContent = highscore;
};
const getCheck = function (check) {
  document.querySelector(".check").textContent = check;
};
const gmnText = function (getnumber) {
  document.querySelector(".gmn").textContent = getnumber;
};

//handler for check btn
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //if empty returns falsy value 0
  if (!guess) {
    displayMessage("No number");
    score--;
    displayScore(score);
  }
  //if error in guess
  else if (guess > 20 || guess < 1) {
    displayMessage("Guess between 1 and 20");
  }
  //if correct
  else if (guess === secretNumber) {
    displayMessage("Correct");
    document.querySelector("body").style.backgroundColor = "#60b347";
    gmnText("You've won 🎉");
    let highscore = Number(document.querySelector(".highscore").textContent);
    if (score >= highscore) {
      highscore = score;
    }
    displayHighscore(highscore);
  }
  //if it is high or low
  else if (guess !== secretNumber) {
    displayMessage(guess > secretNumber ? "High" : "Low");
    score--;
    displayScore(score);
  }
  //end
  if (score == 0) {
    displayMessage("You lost the game😢");
    document.querySelector("body").style.backgroundColor = "red";
    getCheck("Again!");
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
  document.querySelector("body").style.backgroundColor = "#222";
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayScore(score);
  displayMessage("Start guessing...");
  getCheck("Check!");
  document.querySelector(".guess").value = "";
}
