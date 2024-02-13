var gBallSize = 100

function onBallClick(ball) {
    gBallSize = gBallSize + 50
    
    if (gBallSize === 400) gBallSize = 100
    ball.style.width = gBallSize + 'px'
    ball.style.height = gBallSize + 'px'
    
    ball.innerText = gBallSize
}