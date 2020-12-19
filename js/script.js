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
  } else if (
    (chooseIcon.includes("scissor") && choosePc.includes("rock")) ||
    (chooseIcon.includes("rock") && choosePc.includes("paper")) ||
    (chooseIcon.includes("paper") && choosePc.includes("scissor"))
  ) {
    result.innerHTML = "Sorry. You Lost! 😥 ";
  } else {
    result.innerHTML = "oohh , It's a draw! ";
  }
};
