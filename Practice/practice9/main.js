const gameSelector = document.querySelector("#gameSelector");
const gameContainer = document.querySelector("#gameContainer");
const friendBtn = document.querySelector("#friendBtn");
const botBtn = document.querySelector("#botBtn");
const restartBtn = document.querySelector("#restartBtn");
const newGameBtn = document.querySelector("#newGameBtn");
const winnerModal = document.querySelector("#winnerModal");
const playAgainBtn = document.querySelector("#playAgainBtn");
const homeBtn = document.querySelector("#homeBtn");
const currentTurn = document.querySelector("#currentTurn");
const turnText = document.querySelector("#turnText");
const turnIcon = document.querySelector("#turnIcon");
const gameMode = document.querySelector("#gameMode");
const modeIcon = document.querySelector("#modeIcon");
const xScoreElement = document.querySelector("#xScore");
const oScoreElement = document.querySelector("#oScore");
const winnerText = document.querySelector("#winnerText");
const winnerMessage = document.querySelector("#winnerMessage");
const winnerIcon = document.querySelector("#winnerIcon");
const boardContainer = document.querySelector(".grid");

//Game State
let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;
let vsComputer = false;
let xScore = 0;
let oScore = 0;
let ties = 0;

//Initialize the game
function initGame() {
  createBoard();
  updateGameStatus();
}
//Create the game board

function createBoard() {
  boardContainer.innerHTML = "";
  for (let i = 0; i < 9; i++) {
    const cell = document.createElement("div");
    cell.classList.add(
      "cell",
      "bg-[#31505f]",
      "rounded-lg",
      "shadow-sm",
      "flex",
      "items-center",
      "justify-center",
      "relative",
      "cursor-pointer",
      "aspect-square"
    );
    cell.setAttribute("data-index", i);
    cell.addEventListener("click", () => handleCellClick(i));
    boardContainer.appendChild(cell);
  }
}

//handle cell click
function handleCellClick(index) {
  if (!gameActive || board[index] !== "") return;
  makeMove(index, currentPlayer);
  if (vsComputer && gameActive) {
    setTimeout(() => {
      const computerMove = getComputerMove();
      if (computerMove !== -1) {
        makeMove(computerMove, "O");
      }
    }, 500);
  }
}

//Make a move
function makeMove(index, player) {
  board[index] = player;
  const cell = document.querySelector(`[data-index="${index}"]`);

  if (player === "X") {
    cell.classList.add("x-mark");
    cell.innerHTML = `<i class= "fas fa-xmark text-5xl text-[#30c4c1] opacity-0 animate-fade-in"></i>`;
  } else {
    cell.classList.add("o-mark");
    cell.innerHTML = `<i class= "fas fa-circle text-4xl text-[#f1b336] opacity-0 animate-fade-in"></i>`;
  }
  cell.classList.add("disabled");

  //Check for winner or draw
  const winningInfo = checkWin();
  if (winningInfo) {
    endGame(winningInfo);
    return;
  }
  if (!board.includes("")) {
    endGame(null);
    return;
  }
  //Switch Player
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  updateGameStatus();
}
function getComputerMove() {
  // Simple AI - first try to win, then block, then random

  // 1. Check for winning move
  for (let i = 0; i < 9; i++) {
    if (board[i] === "") {
      board[i] = "O";
      if (checkWin()?.winner === "O") {
        board[i] = "";
        return i;
      }
      board[i] = "";
    }
  }

  // 2. Block opponent's winning move
  for (let i = 0; i < 9; i++) {
    if (board[i] === "") {
      board[i] = "X";
      if (checkWin()?.winner === "X") {
        board[i] = "";
        return i;
      }
      board[i] = "";
    }
  }

  // 3. Take center if available
  if (board[4] === "") return 4;

  // 4. Take a corner if available
  const corners = [0, 2, 6, 8];
  const availableCorners = corners.filter((c) => board[c] === "");
  if (availableCorners.length > 0) {
    return availableCorners[Math.floor(Math.random() * availableCorners.length)];
  }

  // 5. Take any available spot
  const availableSpots = board.map((val, idx) => (val === "" ? idx : -1)).filter((val) => val !== -1);

  if (availableSpots.length > 0) {
    return availableSpots[Math.floor(Math.random() * availableSpots.length)];
  }

  return -1;
}

// Check for winner
function checkWin() {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // columns
    [0, 4, 8],
    [2, 4, 6], // diagonals
  ];

  for (const pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], pattern: pattern };
    }
  }

  return null;
}

// End the game
function endGame(winningInfo) {
  gameActive = false;

  if (winningInfo) {
    // Highlight winning cells
    winningInfo.pattern.forEach((index) => {
      const cell = document.querySelector(`[data-index="${index}"]`);
      cell.classList.add("bg-green-100", "shadow-md");
    });

    // Update scores
    if (winningInfo.winner === "X") {
      xScore++;
      xScoreElement.textContent = xScore;
    } else {
      oScore++;
      oScoreElement.textContent = oScore;
    }
    showWinnerModal(winningInfo.winner);
    return;
  }
  ties++;
  showWinnerModal(null);
}
function showWinnerModal(winner) {
  if (winner === "X") {
    winnerText.textContent = "Player X Wins!";
    winnerMessage.textContent = "Congratulations on your victory!";
    winnerIcon.className = "fas fa-trophy text-7xl mb-6 mx-auto w-24 h-24 flex items-center justify-center rounded-full bg-[#30c4c1] text-[#30c4c1]";
    winnerIcon.innerHTML = '<i class="fas fa-trophy"></i>';
  } else if (winner === "O") {
    winnerText.textContent = vsComputer ? "Computer Wins!" : "Player O Wins!";
    winnerMessage.textContent = vsComputer ? "Better luck next time!" : "Congratulations on your victory!";
    winnerIcon.className = "fas fa-robot text-7xl mb-6 mx-auto w-24 h-24 flex items-center justify-center rounded-full bg-[#f1b336] text-[#f1b336]";
    winnerIcon.innerHTML = '<i class="fas fa-robot"></i>';
  } else {
    winnerText.textContent = "It's a Draw!";
    winnerMessage.textContent = "The game ended in a tie.";
    winnerIcon.className = "fas fa-handshake text-7xl mb-6 mx-auto w-24 h-24 flex items-center justify-center rounded-full bg-gray-100 text-gray-600";
    winnerIcon.innerHTML = '<i class="fas fa-handshake"></i>';
  }

  winnerModal.classList.remove("hidden");
}

// Update game status UI
function updateGameStatus() {
  if (currentPlayer === "X") {
    turnText.textContent = "Player X's Turn";
    turnIcon.className = "fas fa-xmark text-[#30c4c1]";
    turnIcon.parentElement.classList.remove("text-[#f1b336]");
    turnIcon.parentElement.classList.add("text-[#30c4c1]");
  } else {
    turnText.textContent = vsComputer ? "Computer's Turn" : "Player O's Turn";
    turnIcon.className = vsComputer ? " fas fa-robot text-[#f1b336]" : " fas fa-circle text-[#f1b336]";
    turnIcon.parentElement.classList.remove("text-[#30c4c1]");
    turnIcon.parentElement.classList.add("text-[#f1b336]");
  }
}
function resetGame(resetScores = false) {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameActive = true;
  createBoard();
  updateGameStatus();
  winnerModal.classList.add("hidden");

  // 🔹 Si se pasa resetScores = true, reinicia los puntajes
  if (resetScores) {
    xScore = 0;
    oScore = 0;
    ties = 0;
    xScoreElement.textContent = xScore;
    oScoreElement.textContent = oScore;
  }
}
// Start a new game (return to menu)
function newGame() {
  gameSelector.classList.remove("hidden");
  gameContainer.classList.add("hidden");
  resetGame();
}

// Event Listeners
friendBtn.addEventListener("click", () => {
  vsComputer = false;
  gameSelector.classList.add("hidden");
  gameContainer.classList.remove("hidden");
  gameMode.querySelector("span").textContent = "Vs Friend";
  modeIcon.className = "fas fa-users";
  resetGame();
});

botBtn.addEventListener("click", () => {
  vsComputer = true;
  gameSelector.classList.add("hidden");
  gameContainer.classList.remove("hidden");
  gameMode.querySelector("span").textContent = "Vs Computer";
  modeIcon.className = "fas fa-robot";
  resetGame();
});

restartBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", newGame),
  playAgainBtn.addEventListener("click", () => {
    winnerModal.classList.add("hidden");
    resetGame();
  });
homeBtn.addEventListener("click", newGame);

initGame();
