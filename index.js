const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const happyClown = document.getElementById("video");
const sadClown = document.getElementById("video1");

function play() {
    happyClown.play();
}
function play() {
    sadClown.play();
}

let x = 50;
let y = 50;
const squareSize = 10;

const enemy = new Enemy(100, 100, ctx, canvas);
const allEnemies = createEnemies(10);

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function createEnemies(n) {
  return Array(n)
    .fill(0)
    .map(() => {
      return new Enemy(
        randomIntFromInterval(100, canvas.width),
        randomIntFromInterval(0, canvas.height),
        ctx,
        canvas
      );
    });
}
function detectCollisions() {
  for (const enemy of allEnemies) {
    if (
      x < enemy.x + enemy.w &&
      x + squareSize > enemy.x &&
      y < enemy.y + enemy.h &&
      y + squareSize > enemy.y
    ) {
        sadClown.play()
        happyClown.pause()
        //sadClown.classList.add("visible");
        //happyClown.classList.add("notVisible");
        


    }else{
        happyClown.play()
        sadClown.pause()
        //sadClown.classList.add("notVisible");
        //happyClown.classList.add("visible");
    }
  }
}

function init() {
  window.addEventListener("keydown", moveSquare);
  setInterval(update, 100);
}

function update() {
  drawSquare();
  drawEnemies();
  detectCollisions();
}

function drawEnemies() {
  allEnemies.forEach((enemy) => {
    enemy.update();
    enemy.draw();
  });
}

function drawSquare() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#FFFFF";
  ctx.fillRect(x, y, squareSize, squareSize);
}

function moveSquare(event) {
  console.log(event.key);
  switch (event.key) {
    case "ArrowUp":
      y -= 10;
      break;
    case "ArrowDown":
      y += 10;
      break;
    case "ArrowLeft":
      x -= 10;
      break;
    case "ArrowRight":
      x += 10;
      break;
  }

  // Ensure the square stays within the canvas bounds
  x = Math.max(0, Math.min(x, canvas.width - squareSize));
  y = Math.max(0, Math.min(y, canvas.height - squareSize));

  // Redraw the square at the new position
}

init();
