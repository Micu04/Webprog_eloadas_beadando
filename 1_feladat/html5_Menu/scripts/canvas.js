const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d")

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const bigRadius = 100;
const dotRadius = 8;
let angle = 0

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  ctx.beginPath();
  ctx.arc(centerX, centerY, bigRadius, 0, Math.PI * 2);
  ctx.strokeStyle = "#555";
  ctx.lineWidth = 8;
  ctx.stroke()

  const x = centerX + Math.cos(angle) * bigRadius;
  const y = centerY + Math.sin(angle) * bigRadius

  ctx.beginPath();
  ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
  ctx.fillStyle = "red";
  ctx.fill()

  angle += 0.02187

  requestAnimationFrame(draw);
}

draw();