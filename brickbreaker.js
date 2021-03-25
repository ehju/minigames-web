const canvas = document.getElementById("brickCanvas");
const ctx = canvas.getContext("2d");
let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 1;
let dy = 1;
const paddleHeight = 10;
const paddleWidth = 75;
let paddleX = canvas.width / 2;
let gameProcess;
function gameOver(){
  alert("GameOver")
  clearInterval(gameProcess);  
}
function drawBrick() {
  for (let j = 10; j < 150; j += 30) {
    for (let i = 10; i < 410; i += 65) {
      ctx.beginPath();
      ctx.rect(i, j, 60, 25);
      ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
      ctx.stroke();
      ctx.fillStyle = "rgb(180,90,0)";
      ctx.fill();
      ctx.closePath();
    }
  }
}
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "rgb(15, 204, 153)";
  ctx.fill();
  ctx.closePath();
}
function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2, false);
  ctx.fillStyle = "green";
  ctx.fill();
  ctx.closePath();
}
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawBrick();
  drawPaddle();
  x += dx;
  y += dy;
  if (x > canvas.width - 5 || x < 5) {
    dx = -dx;
  }
  if ( y < 5) {
    dy = -dy;
  }
  if ((y > canvas.height - 5-paddleHeight)&&(paddleX<x)&&(x<paddleX+paddleWidth)){
    dy = -dy;
  }
  if (y>canvas.height){
    gameOver()
  }
  drawBall();
}
function keypressed(e) {
  if (e.code == "ArrowRight") {
    if (paddleX < canvas.width - paddleWidth) {
      paddleX += 15;
    } else {
      paddleX = canvas.width - paddleWidth;
    }
  } else if (e.code == "ArrowLeft") {
    if (paddleX > 0) {
      paddleX -= 15;
    } else {
      paddleX = 0;
    }
  }
}
function init() {
  document.addEventListener("keydown", keypressed);
  gameProcess=setInterval(draw, 10);
}
init();
