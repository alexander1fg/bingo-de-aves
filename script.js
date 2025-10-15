const birds = [
  { name: "Batará Rayado", img: "img/ave1.jpg" },
  { name: "Colibrí Verde", img: "img/ave2.jpg" },
  { name: "Azulejo Común", img: "img/ave3.jpg" },
  { name: "Copetón", img: "img/ave4.jpg" },
  { name: "Torito", img: "img/ave5.jpg" },
  { name: "Canario", img: "img/ave6.jpg" },
  { name: "Gavilán", img: "img/ave7.jpg" },
  { name: "Carpintero", img: "img/ave8.jpg" },
  { name: "Petirrojo", img: "img/ave9.jpg" }
];

const board = document.getElementById("bingo-board");
const resetBtn = document.getElementById("reset-btn");
const winnerMsg = document.getElementById("winner-message");

function shuffle(array) {
  // Orden aleatorio simple
  let newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

function createBoard() {
  board.innerHTML = "";
  const shuffled = shuffle(birds);
  shuffled.forEach(bird => {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    const img = document.createElement("img");
    img.src = bird.img;
    img.alt = bird.name;
    img.title = bird.name;
    cell.appendChild(img);
    cell.addEventListener("click", () => toggleMark(cell));
    board.appendChild(cell);
  });
}

function toggleMark(cell) {
  cell.classList.toggle("marked");
  checkWin();
}

function checkWin() {
  const cells = document.querySelectorAll(".cell");
  const allMarked = Array.from(cells).every(c => c.classList.contains("marked"));
  if (allMarked) {
    winnerMsg.classList.remove("hidden");
    setTimeout(() => {
      winnerMsg.classList.add("hidden");
    }, 4000);
  }
}

resetBtn.addEventListener("click", createBoard);

document.addEventListener("DOMContentLoaded", createBoard);
