var gBallSize = 100

function onBallClick(ball) {
    gBallSize = gBallSize + 50
    ball.style.width = gBallSize + 'px'
    ball.style.height = gBallSize + 'px'

    ball.innerText = gBallSize
}