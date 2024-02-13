var gBallSize = 100

function onBallClick(ball, maxDiameter) {
    gBallSize = gBallSize + getRandomInt(20, 60)
    
    if (gBallSize >= maxDiameter) gBallSize = 100
    ball.style.width = gBallSize + 'px'
    ball.style.height = gBallSize + 'px'
    
    ball.style.backgroundColor = getRandomColor()
    ball.innerText = gBallSize
}

function onBall3Click() {

    var ball1 = document.querySelector('.ball1')
    var ball2 = document.querySelector('.ball2')

    var holder = {  
                width: ball1.style.width,
                height: ball1.style.height, 
                color: ball1.style.backgroundColor,
                size: ball1.innerText
            }

    ball1.style.width = ball2.style.width
    ball1.style.height = ball2.style.height
    ball1.style.backgroundColor = ball2.style.backgroundColor
    ball1.innerText = ball2.innerText

    
    ball2.style.width = holder.width
    ball2.style.height = holder.height
    ball2.style.backgroundColor = holder.color
    ball2.innerText = holder.size

}