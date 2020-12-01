const btn = document.querySelector(".start button")

let levelNbr = document.querySelector(".level span");
let levelName = document.querySelector(".levelName");
let playerScore = document.querySelector(".playerScore span");
let aiScore = document.querySelector(".computerScore span");
const footer = document.querySelector(".footer")

// function countingPoints(points, score) {
// points ++;
// score.textContent = points;
// }

function ballZeroPositon(){
    ballSpeedX = 0;
    ballSpeedY= 0;
    ballX = cw/2-ballsize/2;
    ballY = ch/2-ballsize/2;
}

function changeLevel() {
    if(aiScore.textContent > 30 ){
        ballZeroPositon();
        footer.textContent = `Muisz jeszcze poćwiczyć`;
        ballZeroPositon();
    }
    else if (playerScore.textContent > 30){
        footer.textContent = `Jesteś mistrzem, twoje punkty to ${playerScore.textContent}!!!`;
        ballZeroPositon();

    }
    else if(playerScore.textContent > 20) {
        console.log(playerScore.textContent);
        levelNbr.textContent = 3;
        levelName.textContent = "HARD"
        aiPosition(4,6)
        
    }
    else if(playerScore.textContent > 10){  
        levelNbr.textContent = 1
        levelName.textContent = "MEDIUM";
        aiPosition(2,5);
      
    }
}

function gameReset() {
    levelNbr.textContent = 0;
    levelName.textContent = "EASY";
    aiPoints = 0;
    playerPoints = 0;
    aiScore.textContent = 0;
    playerScore.textContent = 0;
    levelNbr.textContent = 0;
    levelName.textContent = "EASY"
    
    
}




btn.addEventListener("click", gameStart)