const canvas = document.getElementById("brickCanvas");
const ctx = canvas.getContext("2d");
let x = canvas.width/2;
let y = canvas.height-30;
let dx=1;
let dy=1;

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
function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2, false);
  ctx.fillStyle = "green";
  ctx.fill();
  ctx.closePath();
}
function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawBall();
    x+=dx;
    y+=dy;
    if(x>canvas.width-5 || x<5){
        dx=-dx;
    }
    if(y>canvas.height-5 || y<5){
        dy=-dy;
    }
}
function init(){
    setInterval(draw,10)
}
init();