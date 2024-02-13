var gBallSize = 100

function onBallClick(ball) {
    gBallSize = gBallSize + getRandomInt(20, 60)
    
    if (gBallSize >= 400) gBallSize = 100
    ball.style.width = gBallSize + 'px'
    ball.style.height = gBallSize + 'px'
    
    ball.style.backgroundColor = getRandomColor()
    ball.innerText = gBallSize
}