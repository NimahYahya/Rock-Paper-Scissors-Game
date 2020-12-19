let playerWin = 0;
let lose = 0;
let draws = 0;

document.querySelectorAll("button").forEach((btns) =>
  btns.addEventListener("click", (e) => {
    e.preventDefault();
    randomChoice();
    computerPlayer(e);
  })
);

const randomChoice = () => {
  const random = [
    '<i class="fas fa-hand-rock"></i>',
    '<i class="fas fa-hand-scissors"></i>',
    '<i class="fas fa-hand-paper"></i>',
  ];
  let randomIcon = random[Math.floor(Math.random() * random.length)];
  document.querySelector("#computerPlay").innerHTML = randomIcon;
};

const mydiv = document.getElementById("result");

function showDiv() {
  document.getElementById("result").style.opacity = 1;
}

const computerPlayer = (e) => {
  let chooseIcon = e.target.className;
  let choosePc = document.querySelector("#computerPlay").innerHTML;
  let result = document.querySelector("#result");

  if (
    (chooseIcon.includes("scissor") && choosePc.includes("paper")) ||
    (chooseIcon.includes("rock") && choosePc.includes("scissor")) ||
    (chooseIcon.includes("paper") && choosePc.includes("rock"))
  ) {
    result.innerHTML = "Congratulations, You Win 🏆";
    playerWin++;
    document.getElementById("wins").innerHTML = playerWin;
  } else if (
    (chooseIcon.includes("scissor") && choosePc.includes("rock")) ||
    (chooseIcon.includes("rock") && choosePc.includes("paper")) ||
    (chooseIcon.includes("paper") && choosePc.includes("scissor"))
  ) {
    result.innerHTML = "Sorry. You Lost! 😥 ";
    lose++;
    document.getElementById("losses").innerHTML = lose;
  } else {
    result.innerHTML = "oohh , It's a draw! ";
    draws++;
    document.getElementById("draws").innerHTML = draws;
  }
};

document.getElementById("reset-scores").addEventListener("click", function () {
  playerWin = 0;
  document.getElementById("wins").innerHTML = playerWin;

  draws = 0;
  document.getElementById("draws").innerHTML = draws;
  lose = 0;
  document.getElementById("losses").innerHTML = lose;
});
