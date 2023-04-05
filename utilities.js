function animate(){
    ctx3.clearRect(0,0,canvas.width,canvas.height)
    ctx2.drawImage(backgroundLevel2,0,0,canvas.width,canvas.height)
    frogger.draw()
    frogger.update()
    handleObstacles()
    ctx4.drawImage(grass,0,0,canvas.width,canvas.height)
    requestAnimationFrame(animate)
}

animate()

/* Event Listeners */


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
})

function scored(){
    score++
    gameSpeed+=0.05
    frogger.x=canvas.width/2-frogger.width/2
    frogger.y=canvas.height-frogger.height-40
}