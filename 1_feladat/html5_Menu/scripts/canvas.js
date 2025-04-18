const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = 150;
const squareSize = 20;
const numSquares = 8;
let time = 0;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < numSquares; i++) {
    const angle = i * 2 * Math.PI / numSquares;
    const x = centerX + Math.cos(angle) * radius - squareSize / 2;
    const y = centerY + Math.sin(angle) * radius - squareSize / 2;
    const hue = (i * 45 + time * 50) % 360;
    ctx.fillStyle = `hsl(${hue}, 80%, 60%)`;
    ctx.fillRect(x, y, squareSize, squareSize);
  }

  time += 0.01;
  requestAnimationFrame(draw);

}

draw();