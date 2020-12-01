const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d'); 

canvas.width = 1000;
canvas.height = 500;

const cw = canvas.width;
const ch = canvas.height;


const ballsize = 20;
let ballX = cw/2-ballsize/2;
let ballY = ch/2-ballsize/2;

const paddleHeight = 100;
const paddleWidth = 20; 

const playerX = 70;
const aiX = 910;

let playerY = 200;
let aiY = 200;

const lineWidth = 6;
const lineHeight = 16;

let ballSpeedX = 1;
let ballSpeedY = 1;

let playerPoints = 0;
let aiPoints = 0;


function player() {
    ctx.fillStyle = 'green';
    ctx.fillRect(playerX, playerY, paddleWidth, paddleHeight);
}

function ai() {
    ctx.fillStyle = 'yellow';
    ctx.fillRect(aiX, aiY, paddleWidth, paddleHeight)
}

function ball() {
     ctx.fillStyle = '#ffffff';
     ctx.fillRect(ballX, ballY, ballsize, ballsize);
     
     ballX += ballSpeedX;
     ballY += ballSpeedY;
     
    

     
     if (ballY + ballsize  >= ch || ballY <= 0) {
        ballSpeedY = -ballSpeedY;
        speedUp(.1, .1)  
     }

     if (ballX + ballsize  >= cw ) {
        playerPoints ++;
        playerScore.textContent = playerPoints;
        ballReset()
    //    console.log("ai przegrało")
     }

     else if (ballX <= 0) {
        aiPoints ++;
        aiScore.textContent = aiPoints;
       
        ballReset()   
        changeLevel()

     }
   
     if (Math.floor(ballX)<= playerX+paddleWidth+5 && Math.floor(ballX) >= playerX+paddleWidth-5 ) {
        console.log("ai wygrało")
        if (Math.floor(ballY) > playerY && Math.floor(ballY)< playerY+paddleHeight) {
            ballSpeedX = -ballSpeedX;
        }
    }
    // console.log(Math.floor(ballX+ballsize))
    if (Math.floor(ballX+ballsize) >= aiX-5 && Math.floor(ballX+ballsize) <= aiX+5 ) {
        if (Math.floor(ballY) > aiY && Math.floor(ballY)< aiY+paddleHeight) { 
            ballSpeedX = -ballSpeedX;
            console.log("ai przegrało");
        }
    }
}

function table() {
    ctx.fillStyle = "black";
    ctx.fillRect(0,0, cw, ch);

    for (let linePosition = 20; linePosition < ch; linePosition+=30) {
        ctx.fillStyle = 'gray'
        ctx.fillRect(cw/2 - lineWidth/2, linePosition, lineWidth, lineHeight) 
    }
}

const topCanvas = canvas.offsetTop;    

function playerPosition(e) {

playerY = e.clientY-topCanvas - paddleHeight/2;

if (playerY >= ch-paddleHeight) {
 playerY = ch-paddleHeight;
}

if (playerY <= 0) {
 playerY = 0;
}

//  aiY = playerY;
}

function speedUp(valueX,valueY) {
    if (ballSpeedX > 0 && ballSpeedX < 16) {
        ballSpeedX += valueX;
      } else if (ballSpeedX < 0 && ballSpeedX > -16) {
        ballSpeedX -=valueX;
      }

      if (ballSpeedY > 0 && ballSpeedY < 16) {
        ballSpeedY += valueY;
      } else if (ballSpeedY < 0 && ballSpeedY > -16) {
        ballSpeedY -= valueY;
      }
}


function aiPosition(minPaddleSpeed=3, maxPaddleSpeed=4) {
const middlePaddle = aiY + paddleHeight/2;
const middleBall = ballY + ballsize/2;

if (ballX > 200) {
    if (middlePaddle - middleBall>150) {
        aiY -= maxPaddleSpeed
    }
    else if (middlePaddle - middleBall>50) {
        aiY -= minPaddleSpeed
    }
    else if (middlePaddle - middleBall<-150) {
        aiY += maxPaddleSpeed
    }
    else if (middlePaddle - middleBall<-50) {
        aiY += minPaddleSpeed
    }

}
else if (ballX <= 500 && ballX >150 ) {
    if (middlePaddle - middleBall > 100) {
        aiY -= 3
    }
    else if (middlePaddle - middleBall <- 100) {
        aiY += 3
    }
}}

function ballReset() {
ballX = cw/2-ballsize/2;;
ballY = ch/2-ballsize/2;;
ballSpeedX = -1;
ballSpeedY = 1;
}


canvas.addEventListener("mousemove", playerPosition)


function game(){
table();
ball();
player();
ai();
aiPosition();
}

game()

function gameStart () {
    gameReset()
    ballReset()
    setInterval(game, 1000/60);}


