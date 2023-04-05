function animate(){
    ctx1.clearRect(0,0,canvas.width,canvas.height)
    ctx2.clearRect(0,0,canvas.width,canvas.height)
    ctx3.clearRect(0,0,canvas.width,canvas.height)
    ctx4.clearRect(0,0,canvas.width,canvas.height)
    ctx5.clearRect(0,0,canvas.width,canvas.height)
     
    handleRipple()
    ctx2.drawImage(backgroundLevel2,0,0,canvas.width,canvas.height)
    handleParticles()
    frogger.draw()
    frogger.update()

    handleObstacles()
    handleScoreBoard()
    ctx4.drawImage(grass,0,0)
    frame++
    requestAnimationFrame(animate)
}

animate()

/* Event Listeners */
window.addEventListener("click", event => {
    const audio = document.querySelector("audio");
    audio.volume = 0.5;
    audio.play();
  });

window.addEventListener('keydown',function(e){
    keys=[]
    // console.log(keys[e.key])
    keys[e.key]=true
    if(keys['ArrowUp']||keys['ArrowDown']||keys['ArrowRight']||keys['ArrowLeft']){
        frogger.jump()
    }
})
window.addEventListener('keyup',function(e){
    delete keys[e.key]
    frogger.moving=false
    frogger.frameX=0
})

function scored(){
    score++
    gameSpeed+=0.05
    frogger.x=canvas.width/2-frogger.width/2
    frogger.y=canvas.height-frogger.height-40
}

function handleScoreBoard()
{
    ctx4.fillStyle='black'
    ctx4.strokeStyle='black'
    ctx4.font='15px Verdana'
    ctx4.strokeText('Score',265,15)
    ctx4.font='60px Verdana'
    ctx4.fillText(score,270,65)
    ctx4.font='15px Verdana'
    ctx4.strokeText('Collisions: '+collisionsCount,10,175)
    ctx4.strokeText('Game Speed: '+gameSpeed.toFixed(1),10,195)

}

// COLLISIONS DETECTION BETWEEN TWO RECTANGLES
function collision(first,second){
    return !(first.x>second.x+second.width||
            first.x+first.width<second.x||
            first.y>second.y+second.height||
            first.y+first.height<second.y)
}

function resetGame(){
    frogger.x=canvas.width/2-frogger.width/2
    frogger.y=canvas.height-frogger.height-40
    score=0
    collisionsCount++
    gameSpeed=1
    // audio.stop()

}

function drawScore() {
    ctx4.font = "16px Arial";
    ctx4.fillStyle = "#0095DD";
    ctx4.fillText(`Score: ${score}`, 8, 20);
  }