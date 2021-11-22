import "/src/style.css";

var player1selection = "";
var player2selection = "";

var playerTurn = "Player 1";

const winnerTag = document.querySelector<HTMLHeadingElement>("h2");
const h3Tag = document.querySelector<HTMLHeadingElement>("h3");
if (h3Tag) h3Tag.innerText = playerTurn + "`s turn";

const rock = document.querySelector<HTMLSpanElement>("#rock");
const paper = document.querySelector<HTMLSpanElement>("#paper");
const scissors = document.querySelector<HTMLSpanElement>("#scissors");
const lizard = document.querySelector<HTMLSpanElement>("lizard");
const spock = document.querySelector<HTMLSpanElement>("spock");

console.log(rock, paper, scissors, lizard, spock);

rock?.addEventListener("click", (event) => {
  if (playerTurn == "Player 1") {
    player1selection = "rock";
    playerTurn = "Player 2";
    console.log(player1selection);
  } else if (playerTurn == "Player 2") {
    player2selection = "rock";
    playerTurn = "Judge";
  }
  if (h3Tag) h3Tag.innerText = playerTurn + "`s turn";

  if (player1selection && player2selection && winnerTag)
    winnerTag.innerText =
      "Winner: " + determineWinner(player1selection, player2selection);
});

paper?.addEventListener("click", (event) => {
  if (playerTurn == "Player 1") {
    player1selection = "paper";
    playerTurn = "Player 2";
    console.log(player1selection);
  } else if (playerTurn == "Player 2") {
    player2selection = "paper";
    playerTurn = "Judge";
    console.log(player2selection);
  }
  if (h3Tag) h3Tag.innerText = playerTurn + "`s turn";
  if (player1selection && player2selection && winnerTag)
    winnerTag.innerText =
      "Winner: " + determineWinner(player1selection, player2selection);
});
scissors?.addEventListener("click", (event) => {
  if (playerTurn == "Player 1") {
    player1selection = "scissors";
    playerTurn = "Player 2";
    console.log(player1selection);
  } else if (playerTurn == "Player 2") {
    player2selection = "scissors";
    playerTurn = "Judge";
    console.log(player2selection);
  }
  if (h3Tag) h3Tag.innerText = playerTurn + "`s turn";

  if (player1selection && player2selection && winnerTag)
    winnerTag.innerText =
      "Winner: " + determineWinner(player1selection, player2selection);
});

lizard?.addEventListener("click", (event) => {
  if (playerTurn == "Player 1") {
    player1selection = "lizard";
    playerTurn = "Player 2";
    console.log(player1selection);
  } else if (playerTurn == "Player 2") {
    player2selection = "lizard";
    playerTurn = "Judge";
    console.log(player2selection);
  }
  if (h3Tag) h3Tag.innerText = playerTurn + "`s turn";

  if (player1selection && player2selection && winnerTag)
    winnerTag.innerText =
      "Winner: " + determineWinner(player1selection, player2selection);
});

spock?.addEventListener("click", (event) => {
  if (playerTurn == "Player 1") {
    player1selection = "spock";
    playerTurn = "Player 2";
    console.log(player1selection);
  } else if (playerTurn == "Player 2") {
    player2selection = "spock";
    playerTurn = "Judge";
    console.log(player2selection);
  }
  if (h3Tag) h3Tag.innerText = playerTurn + "`s turn";

  if (player1selection && player2selection && winnerTag)
    winnerTag.innerText =
      "Winner: " + determineWinner(player1selection, player2selection);
});

function determineWinner(
  playerOneSelection: string,
  playerTwoSelection: string
): string {
  var result = "";

  if (playerOneSelection == playerTwoSelection) result = "Tie";

  if (playerOneSelection == "rock") {
    if (playerTwoSelection == "scissors") result = "Player 1";
    else result = "Player 2";
  }
  if (playerOneSelection == "paper") {
    if (playerTwoSelection == "scissors") result = "Player 2";
    else result = "Player 1";
  }

  if (playerOneSelection == "scissors") {
    if (playerTwoSelection == "paper") result = "Player 1";
    else result = "Player 2";
  }
  return result;
}

// use a map
